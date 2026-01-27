# Assets Directory

This directory contains static assets for the portfolio application.

## Structure

- `/images` - Profile photos, project images, and other visual assets
  - Place your profile photo here (e.g., `profile.jpg` or `profile.png`)
  - Project screenshots and thumbnails

## Usage

To use assets in your components:

```tsx
// For images in public/assets/images/
<img src="/assets/images/profile.jpg" alt="Profile" />

// Or with Avatar component
<Avatar src="/assets/images/profile.jpg" alt="Miller's Profile" />
```

## Recommended Image Formats

- **Profile Photo**: JPG or PNG, recommended size 512x512px or larger
- **Project Images**: JPG or WebP, optimized for web
- **Icons**: SVG preferred for scalability
