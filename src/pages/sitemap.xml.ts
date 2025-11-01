const baseUrl = "https://lucas-azana.netlify.app/";

export async function get() {
	const pages = [
		"/hero",
		"/projects",
		"/experience",
		"/skills",
		"/contact"
	];

	const urls = pages.map(
		(page) => `  <url>\n    <loc>${baseUrl}${page}</loc>\n  </url>`
	).join("\n");

	const body = `<?xml version="1.0" encoding="UTF-8"?>\n` +
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		`${urls}\n` +
		`</urlset>`;

	return {
		body,
		headers: {
			"Content-Type": "application/xml"
		}
	};
}
