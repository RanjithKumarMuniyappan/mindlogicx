# MLX India — Lemon Squeezy build

Mindlogicx India site: the same Home and About content as
`MLX_India_New_Soruce_2`, rebuilt on the **lemonsqueezy.com** design pattern
and themed to MLX cyan.

```bash
npm install
npm run dev      # http://localhost:5178
npm run build
npm run lint
```

Two pages are real — `/` and `/about`. Every other route in the navigation
renders `Placeholder`, so nothing dead-ends during review.

See `NOTES.md` for the measured design tokens, the section mapping, the
deliberate departures from the reference, and how the content layer works.
