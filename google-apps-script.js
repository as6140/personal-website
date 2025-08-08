// Google Apps Script for Contact Book Form
// Deploy this as a web app in Google Apps Script

function doPost(e) {
  try {
    // Parse the form data
    const formData = e.parameter;
    const name = formData.name || '';
    const email = formData.email || '';
    const interests = formData.interests || '';
    
    // Debug logging
    console.log('Received form data:', formData);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Interests:', interests);
    
    // Get the active spreadsheet (replace with your actual sheet ID)
    const spreadsheet = SpreadsheetApp.openById('YOUR_ACTUAL_SHEET_ID_HERE'); // Replace with your sheet ID
    const sheet = spreadsheet.getSheetByName('Contacts') || spreadsheet.getActiveSheet();
    
    // Create timestamp
    const timestamp = new Date();
    
    // Prepare the row data
    const rowData = [
      timestamp,           // Timestamp
      name,               // Name
      email,              // Email
      interests,          // Interests (comma-separated)
      'New Contact'       // Status
    ];
    
    // Add the row to the sheet
    sheet.appendRow(rowData);
    
    // Send email notification
    sendEmailNotification(name, email, interests);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Contact added successfully!' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doPost:', error);
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: 'Error: ' + error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendEmailNotification(name, email, interests) {
  try {
    const recipient = 'ashropshire7@gmail.com'; // Your email
    const subject = 'New Contact Book Entry: ' + name;
    const body = `
      New contact added to your contact book:
      
      Name: ${name}
      Email: ${email}
      Interests: ${interests}
      
      Timestamp: ${new Date().toString()}
    `;
    
    MailApp.sendEmail(recipient, subject, body);
  } catch (error) {
    console.error('Error sending email notification:', error);
  }
}

// Function to set up the spreadsheet headers (run this once)
function setupSheet() {
  try {
    const spreadsheet = SpreadsheetApp.openById('1BOpXCEOMiTa-v5avh27tmsXdVJfQydoxNV_2_jpJRRA'); // Replace with your sheet ID
    const sheet = spreadsheet.getSheetByName('Contacts') || spreadsheet.getActiveSheet();
    
    // Set up headers
    const headers = ['Timestamp', 'Name', 'Email', 'Interests', 'Status'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    
    // Format headers
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.getRange(1, 1, 1, headers.length).setBackground('#f0f0f0');
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, headers.length);
    
    console.log('Sheet setup completed successfully');
  } catch (error) {
    console.error('Error setting up sheet:', error);
  }
}

// Test function to check if the script is working
function testConnection() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true, message: 'Script is working!' }))
    .setMimeType(ContentService.MimeType.JSON);
} 