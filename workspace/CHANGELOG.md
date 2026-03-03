<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->
- Fixed font loading by adding Google Fonts CDN links for Inter and Space Grotesk to `index.html`
- Removed all broken `@font-face` declarations from `tailwind.css` that were causing font loading failures
- Restored video background to Hero section with proper `<video>` tag and fallback source
- Updated Hero section background video to use the custom Supabase URL provided by the user
- Fixed Hero video playback by updating to a reliable video source and using the `<source>` tag
- Enhanced Hero section mouse tracking effect by increasing the movement multiplier and smoothing the transition
- Removed temporary debug logs from the Hero component
- Fixed Hero section video visibility by adding `isolate` to create a proper stacking context for `z-[-1]`
- Updated `DEBUGGING.md` with recent fixes for font fallbacks and hero video interaction
- Fixed broken font URLs in `tailwind.css` to allow proper fallback to `sans-serif`
- Added interactive background video to `Hero` section with mouse tracking parallax effect
- Replaced Hero video with a custom CSS dotted pattern and interactive orange radial gradient
- Implemented seamless infinite marquee animation for the Hero logo strip
- Refactored Hero logo list into a clean array mapping structure
</changelog>
