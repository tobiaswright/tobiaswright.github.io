# Website of Tobias Wright, Frontend developer.

This site is run on [Astro](https://astro.build/) through [github pages](https://pages.github.com/) and builds on commit via github actions.

To run:

- `npm install`
- `npm run dev` to run the development sever locally

## FAQ

**How do I change or add a global style like hover on achors?**
You can do this in the **base.css** - this file is located here: node_modules\@astrojs\tailwind\base.css
However, node_modules is not commited so any changes will only appear locally. Instead, add a global style to the Main layout page using the [is_global directive in astro](https://docs.astro.build/en/reference/directives-reference/#isglobal)


## Configuration

- The build destination is located in astro.config.mjs
- Github pages is set up in setting>pages