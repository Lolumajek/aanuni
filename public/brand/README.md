# Brand assets — provenance note

`aanuni-logo.png`, `aanuni-logo-reversed.png`, and `aanuni-logo-mono.png` are
**raster placeholders**, not the approved vector master.

They were produced by taking a reference logo image (an AI-generated concept
sheet, not designer-produced vector art), removing its background and
cropping via chroma-based alpha matting, then mechanically recoloring by hue
(navy→white for the reversed variant, all ink→navy for the monochrome
variant). No shape, curve, or letterform was redrawn, retraced, or
typeset — only background removal and flat color remapping were applied.

**Before production launch:**

- Replace these files with a true vector `aanuni-logo.svg` master (plus
  monochrome and reversed SVGs) from the brand's actual design source.
- Update `src/components/brand/Logo.tsx` to reference the new files — the
  component API (`variant`, `height`, `className`, `priority`) should not
  need to change.
- Delete this note once real assets are in place.
