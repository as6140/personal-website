import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      name, 
      email, 
      company, 
      role, 
      linkedin_url, 
      accredited_investor,
      professional_interests, 
      personal_interests, 
      connection_note 
    } = body

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Create a fresh Supabase client directly in the route
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn('Supabase not configured - missing environment variables')
      return NextResponse.json(
        { 
          success: true, 
          message: 'Contact information received (Supabase not configured - check environment variables)',
          data: { name, email, company, role, professional_interests, personal_interests }
        },
        { status: 201 }
      )
    }

    // Create a fresh client for this request
    const supabase = createClient(supabaseUrl, supabaseAnonKey)

    // Prepare the data using the EXACT same format that worked in field tests
    const contactData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      company: company ? String(company).trim() : null,
      role: role ? String(role).trim() : null,
      linkedin_url: linkedin_url ? String(linkedin_url).trim() : null,
      accredited_investor: Boolean(accredited_investor),
      professional_interests: Array.isArray(professional_interests) ? professional_interests : [],
      personal_interests: Array.isArray(personal_interests) ? personal_interests : [],
      connection_note: connection_note ? String(connection_note).trim() : null,
      follow_up_needed: true
    }

    console.log('Attempting to insert contact:', contactData)

    // Use the same insert method that worked in field tests
    const result = await supabase
      .from('contacts')
      .insert([contactData])

    if (result.error) {
      console.error('Supabase error:', result.error)
      return NextResponse.json(
        { 
          error: 'Failed to save contact information',
          details: result.error.message
        },
        { status: 500 }
      )
    }

    console.log('Contact saved successfully:', result)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact information saved successfully',
        data: result.data
      },
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