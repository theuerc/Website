import type { RequestHandler } from "@sveltejs/kit";
import saveToSpreadsheet from "$lib/api/save-to-spreadsheet";

export const post: RequestHandler = async ({ request }) => {
  try {
    const body = await request.json();

    if (
      !body.email ||
      !body.email ||
      !body.teamMembers ||
      !body.workspaceHours ||
      !body.largeWorkspaces ||
      !body.calculated
    ) {
      return { status: 400 };
    }

    const isSavedInSheet = await saveToSpreadsheet({
      sheetTitle: "Estimated Costs",
      data: [
        new Date(),
        body.email,
        body.teamMembers,
        body.workspaceHours,
        body.largeWorkspaces,
        body.calculated,
      ],
    });

    if (isSavedInSheet === "duplicate") {
      return { status: 409 };
    }

    if (!isSavedInSheet) {
      throw new Error();
    }

    return {
      status: 201,
      body: "Signed up",
    };
  } catch (error) {
    return {
      status: 500,
      body: "Oh no, something failed.",
    };
  }
};
