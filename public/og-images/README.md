# Open Graph Images for Guides

This directory contains Open Graph images for individual guide pages.

## Files Needed

### weekend-guide.jpg
- For: `/guides/weekend-in-el-paso`
- Title: "48 Hours in El Paso: The Perfect Weekend Itinerary"
- Size: 1200x630px

### taco-guide.jpg
- For: `/guides/el-paso-taco-tour`
- Title: "The Ultimate El Paso Taco Guide"
- Size: 1200x630px

### neighborhoods.jpg
- For: `/guides/best-neighborhoods-el-paso`
- Title: "Explore El Paso's Best Neighborhoods"
- Size: 1200x630px

## Design Notes

- All images should use the same color palette: Dark background (#0a0a0a), Sand (#D4B896), Rust (#C4663B)
- Include the guide title prominently
- Maintain lo-fi aesthetic consistency
- Use Space Mono font for typography when applicable
- Keep text readable when scaled down for small previews

## Implementation

Update the guide `page.tsx` files to reference these images in the `generateMetadata` function.
