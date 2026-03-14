import type { Collection } from "tinacms";

export const schema = {
  collections: [
    
    // ==========================================
    // SITE SETTINGS
    // ==========================================
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
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "primaryColor",
          label: "Primary Color",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          name: "secondaryColor",
          label: "Secondary Color",
          ui: {
            component: "color",
          },
        },
        {
          type: "string",
          name: "contactEmail",
          label: "Contact Email",
        },
      ],
    } as Collection,

    // ==========================================
    // EBOOKS
    // ==========================================
    {
      name: "ebook",
      label: "Ebooks",
      path: "content/products/ebooks",
      format: "json",
      fields: [
        {
          type: "string",
          name: "id",
          label: "Product ID",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "number",
          name: "price",
          label: "Price ($)",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          required: true,
          options: ["Business", "Creative", "Wellness", "Guides"],
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "emoji",
          label: "Emoji",
        },
        {
          type: "boolean",
          name: "featured",
          label: "Featured",
        },
      ],
    } as Collection,

    // ==========================================
    // JOURNALS
    // ==========================================
    {
      name: "journal",
      label: "Journals",
      path: "content/products/journals",
      format: "json",
      fields: [
        {
          type: "string",
          name: "id",
          label: "Product ID",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "number",
          name: "price",
          label: "Price ($)",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          required: true,
          options: ["Mindfulness", "Gratitude", "Creative", "Travel"],
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "emoji",
          label: "Emoji",
        },
        {
          type: "boolean",
          name: "featured",
          label: "Featured",
        },
      ],
    } as Collection,

    // ==========================================
    // PLANNERS
    // ==========================================
    {
      name: "planner",
      label: "Planners",
      path: "content/products/planners",
      format: "json",
      fields: [
        {
          type: "string",
          name: "id",
          label: "Product ID",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "number",
          name: "price",
          label: "Price ($)",
          required: true,
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          required: true,
          options: ["Daily", "Weekly", "Monthly", "Goal Setting"],
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
          ui: {
            component: "textarea",
          },
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "string",
          name: "emoji",
          label: "Emoji",
        },
        {
          type: "boolean",
          name: "featured",
          label: "Featured",
        },
      ],
    } as Collection,

    // ==========================================
    // BUNDLES
    // ==========================================
    {
      name: "bundle",
      label: "Bundles",
      path: "content/products/bundles",
      format: "json",
      fields: [
        {
          type: "string",
          name: "id",
          label: "Bundle ID",
          required: true,
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "number",
          name: "price",
          label: "Price ($)",
          required: true,
        },
        {
          type: "number",
          name: "originalPrice",
          label: "Original Price ($)",
          required: true,
        },
        {
          type: "number",
          name: "savings",
          label: "Savings %",
          required: true,
        },
        {
          type: "string",
          name: "description",
          label: "Description",
          required: true,
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          name: "items",
          label: "Items",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "Item Name",
            },
          ],
        },
        {
          type: "image",
          name: "image",
          label: "Image",
        },
        {
          type: "boolean",
          name: "featured",
          label: "Featured",
        },
      ],
    } as Collection,

    // ==========================================
    // BLOG POSTS
    // ==========================================
    {
      name: "blog",
      label: "Blog",
      path: "content/blog",
      format: "mdx",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
          isTitle: true,
        },
        {
          type: "string",
          name: "excerpt",
          label: "Excerpt",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "category",
          label: "Category",
          options: ["Productivity", "Wellness", "Personal Growth", "Creativity"],
        },
        {
          type: "datetime",
          name: "date",
          label: "Date",
        },
        {
          type: "rich-text",
          name: "body",
          label: "Content",
          isBody: true,
        },
      ],
    } as Collection,

    // ==========================================
    // PAGES
    // ==========================================
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
          required: true,
          isTitle: true,
        },
        {
          type: "rich-text",
          name: "body",
          label: "Content",
          isBody: true,
        },
      ],
    } as Collection,
    
  ] as Collection[],
};
