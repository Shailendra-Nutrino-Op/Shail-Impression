<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All portfolio content (profile, links, experience, skills, projects, metrics) lives in `src/content/portfolio.ts`; components only render it — keeps facts editable in one place and prevents invented data in markup.
- The site is one scrolling page with `#about`, `#experience`, `#skills`, `#projects`, `#contact` anchors, at the owner's explicit request.
- Styling uses tokens and `@utility` classes (`btn-*`, `eyebrow`, `meta`, `display-*`, `shell`) in `src/styles.css`; no hardcoded colours in components.
- Project repo/demo links render only when a real URL is set in config; never add placeholder URLs.
