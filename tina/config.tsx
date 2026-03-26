import { defineConfig } from "tinacms";

const branch = "main";

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
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      
      // ==========================================
      // SITE SETTINGS COLLECTION
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
          router: () => "/",
        },
        fields: [
          {
            type: "string",
            name: "siteName",
            label: "Site Name",
            required: true,
            description: "The name of your website",
          },
          {
            type: "string",
            name: "siteDescription",
            label: "Site Description",
            ui: {
              component: "textarea",
            },
            description: "Short description for SEO and homepage",
          },
          {
            type: "string",
            name: "primaryColor",
            label: "Primary Color (Green)",
            ui: {
              component: "color",
            },
            description: "Main brand color (currently #7CB342)",
          },
          {
            type: "string",
            name: "secondaryColor",
            label: "Secondary Color (Yellow)",
            ui: {
              component: "color",
            },
            description: "Accent color (currently #FFB300)",
          },
          {
            type: "string",
            name: "contactEmail",
            label: "Contact Email",
            description: "Email for customer support",
          },
          {
            type: "string",
            name: "socialFacebook",
            label: "Facebook URL",
          },
          {
            type: "string",
            name: "socialTwitter",
            label: "Twitter URL",
          },
          {
            type: "string",
            name: "socialInstagram",
            label: "Instagram URL",
          },
          {
            type: "string",
            name: "socialLinkedIn",
            label: "LinkedIn URL",
          },
        ],
      },

      // ==========================================
      // EBOOKS COLLECTION
      // ==========================================
      {
        name: "ebook",
        label: "Ebooks",
        path: "content/products/ebooks",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-') || 'new-ebook'}`;
            },
          },
          router: () => "/ebooks",
        },
        fields: [
          {
            type: "string",
            name: "id",
            label: "Product ID",
            required: true,
            description: "Unique identifier (e.g., ebook-1)",
          },
          {
            type: "string",
            name: "title",
            label: "Product Title",
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
            options: [
              "Business",
              "Creative",
              "Wellness",
              "Guides",
              "Productivity",
            ],
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
            label: "Product Image",
            description: "Upload ebook cover image",
          },
          {
            type: "string",
            name: "emoji",
            label: "Emoji Icon",
            description: "Emoji to show if no image (e.g., 📚)",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Product",
            description: "Show on homepage",
          },
          {
            type: "datetime",
            name: "date",
            label: "Release Date",
          },
        ],
      },

      // ==========================================
      // JOURNALS COLLECTION
      // ==========================================
      {
        name: "journal",
        label: "Journals",
        path: "content/products/journals",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-') || 'new-journal'}`;
            },
          },
          router: () => "/journals",
        },
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
            label: "Product Title",
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
            options: [
              "Mindfulness",
              "Gratitude",
              "Creative",
              "Travel",
              "Productivity",
            ],
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
            label: "Product Image",
          },
          {
            type: "string",
            name: "emoji",
            label: "Emoji Icon",
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

      // ==========================================
      // PLANNERS COLLECTION
      // ==========================================
      {
        name: "planner",
        label: "Planners",
        path: "content/products/planners",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-') || 'new-planner'}`;
            },
          },
          router: () => "/planners",
        },
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
            label: "Product Title",
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
            options: [
              "Daily",
              "Weekly",
              "Monthly",
              "Goal Setting",
              "Project Management",
            ],
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
            label: "Product Image",
          },
          {
            type: "string",
            name: "emoji",
            label: "Emoji Icon",
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

      // ==========================================
      // BUNDLES COLLECTION
      // ==========================================
      {
        name: "bundle",
        label: "Bundles",
        path: "content/products/bundles",
        format: "json",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-') || 'new-bundle'}`;
            },
          },
          router: () => "/bundles",
        },
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
            label: "Bundle Title",
            required: true,
            isTitle: true,
          },
          {
            type: "number",
            name: "price",
            label: "Bundle Price ($)",
            required: true,
          },
          {
            type: "number",
            name: "originalPrice",
            label: "Original Price ($)",
            required: true,
            description: "Total if bought separately",
          },
          {
            type: "number",
            name: "savings",
            label: "Savings Percentage",
            required: true,
            description: "Discount percentage (e.g., 35 for 35% off)",
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
            label: "Bundle Items",
            list: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.name || "New Item" };
              },
            },
            fields: [
              {
                type: "string",
                name: "name",
                label: "Item Name",
                required: true,
              },
            ],
          },
          {
            type: "image",
            name: "image",
            label: "Bundle Image",
          },
          {
            type: "string",
            name: "emoji",
            label: "Emoji Icon",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured Bundle",
          },
        ],
      },

      // ==========================================
      // BLOG POSTS COLLECTION
      // ==========================================
      {
        name: "blog",
        label: "Blog Posts",
        path: "content/blog",
        format: "mdx",
        ui: {
          filename: {
            slugify: (values) => {
              return `${values?.title?.toLowerCase().replace(/ /g, '-') || 'new-post'}`;
            },
          },
          router: () => "/blog",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Post Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: {
              component: "textarea",
            },
            description: "Short summary for blog listing",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [
              "Productivity",
              "Wellness",
              "Personal Growth",
              "Creativity",
              "Business",
            ],
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish Date",
            required: true,
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time",
            description: "e.g., '5 min read'",
          },
          {
            type: "image",
            name: "image",
            label: "Featured Image",
          },
          {
            type: "string",
            name: "emoji",
            label: "Emoji Icon",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Post Content",
            isBody: true,
          },
        ],
      },

      // ==========================================
      // COUPONS COLLECTION
      // ==========================================
      {
        name: "coupon",
        label: "Coupons",
        path: "content/coupons",
        format: "json",
        ui: {
          router: () => "/cart",
        },
        fields: [
          {
            type: "string",
            name: "code",
            label: "Coupon Code",
            required: true,
            isTitle: true,
            description: "Uppercase code (e.g., SAVE20)",
          },
          {
            type: "string",
            name: "type",
            label: "Discount Type",
            required: true,
            options: ["percentage", "fixed"],
          },
          {
            type: "number",
            name: "value",
            label: "Discount Value",
            required: true,
            description: "Percentage (20) or Fixed amount (100)",
          },
          {
            type: "boolean",
            name: "active",
            label: "Active",
            description: "Enable/disable this coupon",
          },
          {
            type: "datetime",
            name: "expiryDate",
            label: "Expiry Date",
          },
        ],
      },

      // ==========================================
      // PAGES COLLECTION (About, Contact, etc.)
      // ==========================================
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "mdx",
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "about") return "/about";
            if (document._sys.filename === "contact") return "/contact";
            if (document._sys.filename === "faq") return "/faq";
            return `/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            required: true,
            isTitle: true,
          },
          {
            type: "string",
            name: "description",
            label: "Page Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
