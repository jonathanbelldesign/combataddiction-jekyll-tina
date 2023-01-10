import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "a3b75634-9816-4aad-a731-61c3221fc7bc", // Get this from tina.io
  token: "a2ec76af7df32904e6244eabe199cf691b376136", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "assets",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "assets",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "pages",
        templates: [
          {
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
                name: "lang-ref",
                label: "Language Reference",
              },
            ],
            label: "page-sectioned",
            name: "page_sectioned",
          },
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "lang/es/pages",
        templates: [
          {
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
                name: "lang-ref",
                label: "Language Reference",
              },
            ],
            label: "page-sectioned",
            name: "page_sectioned",
          },
        ],
      },
    ],
  },
});