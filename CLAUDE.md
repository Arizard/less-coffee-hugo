# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run serve`: Start Hugo development server with drafts (`hugo serve -D`)
- `npm run serve-prod`: Start production server without drafts (`hugo serve`)
- `hugo new posts/post-name/index.md`: Create new blog post using archetype

### Build
- `hugo`: Build the static site to `public/` directory

## Architecture

### Hugo Static Site
This is a Hugo-based personal blog and portfolio website with the following structure:

- **Theme**: Uses custom theme `etch-less-coffee` (a fork of the `etch` theme)
- **Content**: Blog posts in `/content/posts/`, each in its own directory with `index.md` and assets
- **Gallery**: Photography gallery with image processing and multiple sizes
- **Resume**: Static resume page at `/resume/`

### Site Configuration
- **baseURL**: https://less.coffee/
- **Permalinks**: Blog posts use title-based URLs (`/:title/`)
- **Markup**: Goldmark with unsafe HTML enabled for rich content
- **Syntax Highlighting**: Pygments with CSS classes

### Content Structure
- Posts follow Hugo's page bundle structure (each post in its own directory)
- Default archetype includes frontmatter for title, subtitle, hero image, date, author, and draft status
- Images and assets are co-located with content
- Gallery uses Hugo's image processing for responsive images

### Lambda@Edge Function
The `less-coffee-lambda-at-edge/` directory contains AWS Lambda@Edge functions for URL rewriting:
- Adds trailing slashes to URLs
- Resolves directory paths to `index.html`
- Used for CloudFront distribution routing

### Deployment
- Static files built to `public/` directory
- Deployed automatically to an S3 bucket via GitHub Actions
- AWS CloudFront distribution with Lambda@Edge URL rewriting
- note that for tags, technical: related to programming, has code snippets and examples. career: soft skills which applies outside of engineering, and analysis of workplace relationships. creative: visual stuff, focused on creating images, words or audio.
- you should use the {{< figure shortcode
- all svg that gets inlined should have viewbox for proper css scaling

## Giving Feedback

Do not give feedback on the articles directly, because this clouds Arie's judgement and results in posts that aren't really written in his own voice. Always prioritise idiosyncrasies first... they aren't a bad thing. It's meant to be Arie's blog, not Claude's blog.

One useful signal is for Claude to try distill the main thesis or key takeaways of the article—this is what Claude should do when asked to "proofread" or "review" a file.

Writing should not tell the reader explicitly what to think. It should let the reasoning speak for itself. Showing, not telling.
