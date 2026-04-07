# Public Assets

This directory contains static assets served by the Next.js application.

## Directory Structure

```
public/
├── favicon.ico              # Site favicon (32x32 or 64x64)
├── og-image.jpg            # Default Open Graph image (1200x630)
└── og-images/              # Directory for specific guide OG images
    ├── weekend-guide.jpg
    ├── taco-guide.jpg
    └── neighborhoods.jpg
```

## Asset Requirements

### favicon.ico
- **Size**: 32x32 or 64x64 pixels
- **Format**: ICO or PNG
- **Purpose**: Browser tab icon, bookmarks, address bar
- **Design**: Should reflect the lo-fi, sand/rust aesthetic

### og-image.jpg (Default)
- **Size**: 1200x630 pixels (16:9 aspect ratio)
- **Format**: JPG or PNG
- **Purpose**: Social media preview (Facebook, Twitter, LinkedIn, etc.)
- **Design**: Include "elpaso.fyi" branding and key messaging

### og-images/*.jpg (Guide-specific)
- **Size**: 1200x630 pixels
- **Format**: JPG or PNG
- **Purpose**: Social media preview for individual guide pages
- **Design**: Include guide-specific title and imagery

## Design Guidelines

- **Color Palette**: Dark background (#0a0a0a), Sand (#D4B896), Rust (#C4663B), Neon cyan (#00D9FF)
- **Typography**: Space Mono for brand
- **Style**: Lo-fi aesthetic with minimalist design
- **Branding**: Consistent with existing website design

## Adding Assets

1. Create your designs matching the requirements above
2. Optimize images for web (compress, use appropriate formats)
3. Place them in the corresponding directories
4. Update references in code if file names change

## Current Status

Placeholder files ready for replacement. Replace these with actual brand-specific designs.
