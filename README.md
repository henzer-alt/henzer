# Henzer Founding Performance Partners

A standalone, responsive institutional partner recruitment site. Plain HTML, CSS, JavaScript, and SVG; no dependencies, build step, or API keys required.

## Preview locally

From `/workspace/henzer` (or the downloaded project folder):

```sh
python3 -m http.server 8080
```

Open the local server in your own browser. Local previews cannot store applications; the form shows an explanatory message instead of claiming success.

## Publish on Netlify

1. Upload the contents of this folder using Netlify's manual deployment, or connect the repository in Netlify. For Git deployment, leave the build command empty and use `.` as the publish directory; `netlify.toml` already sets this directory.
2. In the site's Netlify Forms settings, enable form detection. Redeploy if detection was disabled during the first deployment.
3. Verify that `founding-performance-partners` appears in the Forms dashboard.
4. Submit one test application on the deployed site. Confirm both the thank-you page and the saved submission in the Forms dashboard. Delete the test submission afterwards. A redirect alone does not establish storage.
5. Configure Netlify's form submission email notifications to your preferred inbox. Notifications are set in Netlify, not in this code.
6. Connect your domain if desired, then share the deployed URL with institutions.

The form has a static Netlify-detectable declaration, hidden form name, honeypot, required fields, explicit contact consent, and URL-encoded submission. Native POST works without JavaScript. JavaScript adds submission progress and retry messaging. This form is intended to be hosted on Netlify; other hosts need a real form backend.

## Before outreach

- Replace the visibly marked Instagram and main website placeholders in `index.html` with your actual URLs. They are not fabricated links.
- Contact currently links to the application. Add your public business email to the footer and privacy page if you want a direct email contact.
- Review `privacy.html` against your actual data handling and retention practices; configure administrator access and deletion practices accordingly.
- Confirm development targets and program benefits before distributing. All product figures are explicitly developmental; the illustration is a concept, not photography of a manufactured product.
- The supplied bottle reference inspired the original SVG illustration. Its older 500-calorie / 40g values were not used because the brief specifies 550-calorie / 50g development targets.

## Files

- `index.html`: all landing page sections and Netlify form fields
- `styles.css`: responsive styling and reduced motion support
- `script.js`: form submission UX
- `assets/bottle.svg`: editable product concept illustration
- `thank-you.html`: successful-submission destination
- `privacy.html`: application privacy information
- `netlify.toml`: deployment directory and security headers

## Validation performed

Browser checks cover responsive widths, form requirements, consent, FAQ interaction, local-preview messaging, and a mocked production POST/thank-you flow. Actual Netlify form detection, storage, and email notifications must be verified after publishing. No site has been deployed by this project creation step.
