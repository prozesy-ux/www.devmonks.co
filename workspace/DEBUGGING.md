# Debugging Records & Issue Tracking

*This file is the single source of truth for debugging sessions, issues, and troubleshooting history in this project.*

## Purpose

Records debugging sessions, error patterns, root causes, solutions, and recurring issues. This file enables systematic problem-solving, prevents re-solving the same bugs, and provides context for future debugging efforts. It supports Roo Code's Debug Mode by maintaining a persistent record of diagnostic work.

## When to Update This File

Update this file when:
- Encountering a new error, bug, or unexpected behavior
- Identifying a root cause during investigation
- Applying a fix or workaround (successful or not)
- Noticing a recurring issue pattern
- During systematic debugging sessions (e.g., in Debug Mode)
- Discovering performance issues, edge cases, or race conditions
- After verifying a fix works across relevant scenarios

**Do not** log transient one-liners or obvious typos. Focus on issues requiring investigation or likely to recur.

## Format

Each entry follows this structure:

```
### [YYYY-MM-DD HH:MM] — [Short Issue Title]

**Status:** Open | Investigating | Fixed | Recurring | Won't Fix
**Symptoms:** What went wrong. Error messages, stack traces, reproduction steps.
**Environment:** dependencies, affected files.
**Root Cause:** (if found) What caused it.
**Investigation Steps:**
- Step 1: What was tried, results.
- Step 2: etc.
**Solution:** What fixed it (code changes, config, workaround).
**Prevention:** How to avoid this in future (patterns, tests, docs).
**Related:** Links to DECISIONS.md entries, commits, or tickets.
```

Mark as **Recurring** if the issue returns.

If this file gets corrupted, re-create it. 
CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

---

## Current Issues

<!-- Newest debugging entries first. Closed issues move to "Resolved Issues" below. -->

## Resolved Issues

### [2026-03-03 21:15] — Hero Video Not Playing & Mouse Movement Unnoticeable

**Status:** Fixed
**Symptoms:** The background video in the Hero section was not playing, and the mouse tracking effect was not visible.
**Root Cause:** The previous video URL was likely returning a 403/404, and the translation offset multiplier (40px) was too small to be noticeable on large screens.
**Solution:** Replaced the video URL with a reliable Mixkit abstract tech video using a `<source>` tag. Increased the mouse movement multiplier from 40 to 150 and adjusted the transition duration to 300ms for a smoother, more pronounced effect. Removed debug logs.

### [2026-03-03 12:00] — Font Fallbacks & Hero Video Interaction

**Status:** Fixed
**Symptoms:** `Inter var` and `webflow-icons` were failing to load due to broken local/extension URLs. Hero section had a static image instead of a video and lacked mouse interaction.
**Root Cause:** `tailwind.css` contained invalid `@font-face` src URLs. Hero component lacked state and event listeners for mouse tracking.
**Solution:** Removed broken `@font-face` declarations to trigger `sans-serif` fallback. Replaced Hero image with a `<video>` tag and added `onMouseMove` listener to translate the video container based on cursor position.

<!-- Historical debugging records -->
