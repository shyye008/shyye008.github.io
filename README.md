# Shangyuan Ye’s academic website

Live site: https://shyye008.github.io/

This GitHub Pages website contains the biography, research, publications, teaching, and presentations migrated from https://sites.google.com/view/shangyuan-ye/home on September 23, 2026. It builds with GitHub Pages’ supported Jekyll environment.

## Editing the website

- Home: `_pages/about.md`
- Biography: `_pages/cv.md`
- Research: `_pages/research.html`
- Publications: `_pages/publications.html` (all 39 source entries, grouped by area)
- Work in progress: `_pages/work-in-progress.html`
- Teaching: `_pages/teaching.html`
- Presentations: `_pages/talks.html`
- Shared layout and contact links: `_layouts/academic.html`
- Navigation: `_data/navigation.yml`
- Appearance: `academic.css`; publication search: `academic.js`
- Site URL and search verification token: `_config.yml`

Edit a page in GitHub and commit it to `master`. Pages will rebuild automatically. Each page starts with YAML front matter between `---` lines. Keep the `permalink` unless you also set up a redirect. Page content below the front matter is ordinary HTML, including within the `.md` files. No custom build scripts or JavaScript framework are required.

The earlier Academic Pages template files remain in the repository for reference. Sample pages and draft collections are excluded from the published site in `_config.yml`; the live publication list is maintained in `_pages/publications.html`. The original template license is retained.

## Search discovery

The site provides unique page titles and descriptions, canonical URLs, profile structured data, Open Graph metadata, `robots.txt`, and a generated `sitemap.xml`.

1. Open https://search.google.com/search-console/ and add a **URL prefix** property for `https://shyye008.github.io/`.
2. Select HTML tag verification. Copy only the verification token into `google_site_verification` in `_config.yml`, commit, wait for Pages to deploy, then verify.
3. Submit `sitemap.xml` in Search Console and request indexing of the homepage using URL Inspection.
4. Add a visible link to the new website from the old Google Site. Update your institutional profile, Google Scholar profile, and ORCID website field when appropriate.

Google decides whether and when to index pages. Moving hosts or submitting a sitemap does not guarantee indexing or ranking.

## Website address

The `github.io` subdomain must match the GitHub owner’s username or organization name. `shangyuan.github.io` therefore requires control of the `shangyuan` account; that username was already registered when this site was migrated. A repository rename alone cannot claim it. A separately owned custom domain can also be configured in GitHub Pages.

If the site domain changes later, update `_config.yml`, the absolute profile URLs in `_layouts/academic.html`, and the sitemap URL in `robots.txt`, then update Search Console.

## Local preview

With Ruby and Bundler installed, run `bundle install`, then `bundle exec jekyll serve`. Open http://localhost:4000/. See the Pages build in the repository’s Actions tab for deployment errors.
