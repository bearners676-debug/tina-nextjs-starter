import { defineConfig } from "tinacms";

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      // Products Collection
      {
        name: "product",
        label: "Products",
        path: "content/products",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-')}`;
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Product Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "type",
            label: "Product Type",
            required: true,
            options: ["ebook", "journal", "planner", "bundle"],
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
          },
          {
            type: "number",
            name: "price",
            label: "Price ($)",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Product Image",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Product",
          },
          {
            type: "datetime",
            name: "date",
            label: "Release Date",
          },
        ],
      },
      
      // Pages Collection
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },

      // Site Settings
      {
        name: "settings",
        label: "Site Settings",
        path: "content/settings",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true,
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
          },
          {
            type: "string",
            name: "primaryColor",
            label: "Primary Color",
            ui: {
              component: "color",
            },
          },
        ],
      },
    ],
  },
});
