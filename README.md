# CAPZ ENTERTAINMENT — Z AI READY PACKAGE

This package is prepared from the Capz Entertainment design brief.

## Brand
- Name: CAPZ ENTERTAINMENT
- Tagline: Events Beyond the Ordinary
- Background: #0B0B17
- Purple: #8B5CF6
- Lavender: #C4B5FD
- Light Lavender: #E9D5FF
- White: #FFFFFF
- Gray: #A1A1AA
- Magenta: #D946EF
- Neon Pink: #FF4DCE

The supplied logo is already included at:
`public/assets/capz-logo.png`

## Z AI
Upload `ZAI_BUILD_PROMPT.txt` to Z AI and use it as the master build instruction.
The prompt is the user's complete 767-line specification.

## Included working starter
The package also includes a working Node/Express/MongoDB starter with the same visual system:
- Home
- About
- Services
- Events
- Gallery
- Contact
- Shared navbar/footer
- 3-second logo intro
- Responsive navigation
- Contact enquiry API
- MongoDB schema
- Admin enquiry endpoint

## Run locally
1. Install Node.js.
2. Copy `.env.example` to `.env`.
3. Add your MongoDB Atlas URI.
4. `npm install`
5. `npm start`
6. Open `http://localhost:3000`

## MongoDB
The backend creates an `inquiries` collection automatically.

Fields:
- name
- company
- email
- phone
- eventType
- eventDate
- location
- message
- createdAt

## GitHub
Push this folder to a GitHub repository.
Never commit `.env`.

## Deployment
GitHub stores the source code but does not run the Node/MongoDB backend.
Use a Node-compatible host for the server and MongoDB Atlas for the database.
Set `MONGODB_URI`, `PORT`, and `ADMIN_KEY` in the host's environment variables.

## Important
Do not invent Capz clients, event names, contact details, locations, statistics or social handles.
Use placeholders until real information is supplied.
