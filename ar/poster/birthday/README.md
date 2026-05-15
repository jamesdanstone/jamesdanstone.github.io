# MindAR Poster Rigour Package v12 — WebM Overscan Version

This package adapts the proven WebM workflow so the video texture can extend beyond the tracked poster.

## Required files

```text
targets.mind
assets/poster-opening-frame_v01.png
assets/animation_v01.webm
```

## Test order

1. `diagnostics.html`
2. `tracking-test.html`
3. `overlay-test.html`
4. `webm-video-test.html`
5. `full-experience-webm.html`

## The important new setting

In `webm-video-test.html` and `full-experience-webm.html`, edit the `CONFIG` block:

```js
videoCanvasWidth: 1920,
videoCanvasHeight: 2700,
videoPosterWidth: 1440,
videoPosterHeight: 2036,
videoPosterCenterX: 0.5,
videoPosterCenterY: 0.5
```

Use your actual After Effects/WebM pixel dimensions.

### What these mean

- `videoCanvasWidth` / `videoCanvasHeight` = full WebM canvas size
- `videoPosterWidth` / `videoPosterHeight` = the size of the solid poster-area inside the WebM
- `videoPosterCenterX` / `videoPosterCenterY` = where that poster-area sits inside the video canvas, normalised:
  - `0.5, 0.5` = centred
  - X is left to right
  - Y is top to bottom

The code calculates a larger AR video plane so that the central poster area aligns with the physical tracked target, while transparent alpha content can extend beyond the poster bounds.

## Example

If your physical poster/opening frame corresponds to a 1440 x 2036 area inside a larger 1920 x 2700 WebM canvas, set:

```js
videoCanvasWidth: 1920,
videoCanvasHeight: 2700,
videoPosterWidth: 1440,
videoPosterHeight: 2036,
videoPosterCenterX: 0.5,
videoPosterCenterY: 0.5
```

Keep:

```js
posterWidth: 1,
posterHeight: 1.414
```

unless your physical poster has a different aspect ratio.

## Notes

Transparent WebM works best in Chrome/Android and desktop Chrome. iOS/Safari support can be inconsistent.
