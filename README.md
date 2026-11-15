# JALAYAJAY AI STUDIO

A mobile-friendly starter interface and secure backend scaffold for a personal AI video-generation platform.

## Current status
- Responsive studio UI: photo-to-video and text-to-video modes
- Prompt, duration, aspect ratio, quality and motion controls
- Reference-consistency controls in the interface
- Express backend with health check and a protected provider-configuration boundary
- **Actual AI generation is not connected yet.** The backend deliberately returns a setup message until a provider adapter is implemented.

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Run `npm start`.
5. Open `http://localhost:3000`.

## Configure generation safely
Choose a video provider/model and implement its API adapter in `server.js`. Put API credentials in the server environment as `VIDEO_PROVIDER_API_KEY`. Never commit `.env`, never expose keys in browser JavaScript, and add authentication, rate limits, upload validation, storage, job polling and billing controls before public launch.

## Important limitations
"Unlimited" generation cannot be promised by the app alone. Provider quotas, GPU capacity, model restrictions, storage and costs still apply. A self-hosted open-weight model can reduce dependence on a third-party API, but requires suitable GPU hardware and ongoing operating costs. Character consistency depends on the selected model and its reference-conditioning features; no model guarantees perfect identity in every frame.
