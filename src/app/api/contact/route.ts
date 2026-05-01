import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      linkedin_url,
      accredited_investor,
      professional_interests,
      personal_interests,
      connection_note,
    } = body

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    const notionKey = process.env.NOTION_API_KEY
    const dbId = process.env.NOTION_DATABASE_ID

    if (!notionKey || !dbId) {
      console.warn('Notion not configured — missing NOTION_API_KEY or NOTION_DATABASE_ID')
      return NextResponse.json(
        {
          success: true,
          message: 'Contact received (Notion not configured — check environment variables)',
          data: { name, email },
        },
        { status: 201 }
      )
    }

    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${notionKey}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: dbId },
        properties: {
          Name: {
            title: [{ text: { content: String(name).trim() } }],
          },
          Email: {
            email: String(email).trim().toLowerCase(),
          },
          LinkedIn: {
            url: linkedin_url ? String(linkedin_url).trim() : null,
          },
          'Accredited Investor': {
            checkbox: Boolean(accredited_investor),
          },
          'Professional Interests': {
            multi_select: (Array.isArray(professional_interests) ? professional_interests : []).map(
              (i: string) => ({ name: i })
            ),
          },
          'Personal Interests': {
            multi_select: (Array.isArray(personal_interests) ? personal_interests : []).map(
              (i: string) => ({ name: i })
            ),
          },
          'Connection Note': {
            rich_text: [{ text: { content: connection_note ? String(connection_note).trim() : '' } }],
          },
          'Follow Up Needed': {
            checkbox: true,
          },
          'Submitted At': {
            date: { start: new Date().toISOString() },
          },
        },
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      console.error('Notion API error:', err)
      return NextResponse.json(
        { error: 'Failed to save contact', details: err.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true, message: 'Contact saved successfully' },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: `Internal server error: ${error instanceof Error ? error.message : 'Unknown error'}` },
      { status: 500 }
    )
  }
}
