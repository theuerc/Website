import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
  const customers = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/customers/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  customers.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return {
    body: customers,
    status: 200,
  };
};
