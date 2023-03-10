import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: "4d51ba1a-cbaf-4ff3-96c7-f3cc269e9daa", // Get this from tina.io
  token: "684cfab6f6b2890021fa1abf785a6085de6dfed2", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "assets/img/uploads",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "pages",
            fields: [
              {
                type: "string",
                name: "layout",
                label: "Layout",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "boolean",
                name: "show_section_navigation",
                label: "Show Section Navigation",
              },
              {
                type: "string",
                name: "permalink",
                label: "Permalink",
              },
              {
                type: "string",
                name: "lang_ref",
                label: "Language Reference",
              },
              {
                type: "image",
                name: "animage",
                label: "Image"
              }
            ],
      },
      {
        label: "Pages ES",
        name: "pages_es",
        path: "lang/es/pages",
            fields: [
              {
                type: "string",
                name: "layout",
                label: "Layout",
              },
              {
                type: "string",
                name: "title",
                label: "Title",
              },
              {
                type: "boolean",
                name: "show_section_navigation",
                label: "Show Section Navigation",
              },
              {
                type: "string",
                name: "permalink",
                label: "Permalink",
              },
              {
                type: "string",
                name: "lang_ref",
                label: "Language Reference",
              },
            ],
      },
    ],
  },
});
