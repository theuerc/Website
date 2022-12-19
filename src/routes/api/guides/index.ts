import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const guides = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/guides/**/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  guides.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

  return {
    body: guides,
    status: 200,
  };
};
