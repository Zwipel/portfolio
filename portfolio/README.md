# Portfolio with Contact Form Backend

This portfolio includes a custom backend for handling contact form submissions and sending emails.

## Setup Instructions

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your email settings in `backend/.env`:
   ```env
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   PORT=3001
   ```

   **Important:** For Gmail, you need to use an "App Password" instead of your regular password:
   - Go to your Google Account settings
   - Enable 2-Factor Authentication
   - Generate an App Password for "Mail"
   - Use that app password in EMAIL_PASS

4. Start the backend server:
   ```bash
   npm run dev  # For development (auto-restart)
   # or
   npm start    # For production
   ```

### 2. Frontend Setup

1. Navigate back to the root directory:
   ```bash
   cd ..
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### 3. Testing

1. Make sure both servers are running:
   - Backend on http://localhost:3001
   - Frontend on http://localhost:5175

2. Go to the Contact page and submit the form

3. Check your email (buden1998@googlemail.com) for the message

## Deployment

For production deployment, you'll need to:

1. Deploy the backend to a server (Heroku, DigitalOcean, etc.)
2. Update the API endpoint in `src/pages/Contact.tsx` to point to your deployed backend
3. Deploy the frontend as usual

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for sensitive data
- Consider adding rate limiting and validation to the backend
- For production, use a more secure email service or SMTP provider