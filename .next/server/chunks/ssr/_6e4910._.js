module.exports = {

"[project]/app/data/projects.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "projects": (()=>projects)
});
const projects = [
    {
        id: '1',
        slug: 'next-js-ecommerce',
        title: 'Next.js E-commerce Platform',
        description: 'A full-stack e-commerce solution built with Next.js 14, TypeScript, and Tailwind CSS.',
        content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Built a modern e-commerce platform using Next.js 14, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.
        </p>

        <h2 class="text-lg font-bold">Key Features</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Server-side rendering for optimal performance</li>
          <li>Stripe payment integration</li>
          <li>Real-time inventory tracking</li>
          <li>Admin dashboard with analytics</li>
          <li>Responsive design for all devices</li>
        </ul>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/projects/ecommerce.png" 
            alt="E-commerce Platform" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
        </div>

        <h2 class="text-lg font-bold">Technologies Used</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Next.js 14</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Prisma</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
    `,
        coverImage: '/b1.png',
        demoUrl: 'https://demo-ecommerce.example.com',
        githubUrl: 'https://github.com/yourusername/next-ecommerce',
        tags: [
            {
                label: 'Next.js',
                color: '#000000',
                bgColor: '#f1f5f9'
            },
            {
                label: 'TypeScript',
                color: '#3178c6',
                bgColor: '#e6f6ff'
            },
            {
                label: 'E-commerce',
                color: '#16a34a',
                bgColor: '#f0fdf4'
            }
        ]
    },
    {
        id: '2',
        slug: 'ai-image-generator',
        title: 'AI Image Generation App',
        description: 'An AI-powered image generation application using DALL-E API and React.',
        content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Created an AI image generation application that allows users to create unique images from text descriptions using OpenAI's DALL-E API.
        </p>

        <h2 class="text-lg font-bold">Features</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Text-to-image generation</li>
          <li>Image variation creation</li>
          <li>Gallery of generated images</li>
          <li>Social sharing capabilities</li>
        </ul>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/projects/ai-generator.png" 
            alt="AI Image Generator" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
        </div>

        <h2 class="text-lg font-bold">Tech Stack</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>React</li>
          <li>OpenAI API</li>
          <li>Node.js</li>
          <li>MongoDB</li>
        </ul>
      </div>
    `,
        coverImage: '/b2.png',
        demoUrl: 'https://ai-generator.example.com',
        githubUrl: 'https://github.com/yourusername/ai-generator',
        tags: [
            {
                label: 'React',
                color: '#61dafb',
                bgColor: '#f0f9ff'
            },
            {
                label: 'AI',
                color: '#ef4444',
                bgColor: '#fef2f2'
            },
            {
                label: 'Node.js',
                color: '#16a34a',
                bgColor: '#f0fdf4'
            }
        ]
    },
    {
        id: '3',
        slug: 'social-media-dashboard',
        title: 'Social Media Analytics Dashboard',
        description: 'A comprehensive analytics dashboard for social media management.',
        content: `
      <div class="flex flex-col gap-6 text-[#c0c5d0]">
        <p class="text-base leading-normal">
          Developed a real-time social media analytics dashboard that aggregates data from multiple platforms and provides actionable insights.
        </p>

        <h2 class="text-lg font-bold">Core Features</h2>
        <ul class="list-disc pl-6 space-y-4">
          <li>Real-time data visualization</li>
          <li>Multi-platform integration</li>
          <li>Customizable dashboards</li>
          <li>Automated reporting</li>
        </ul>

        <div class="flex flex-col items-center gap-3">
          <img 
            src="/projects/dashboard.png" 
            alt="Analytics Dashboard" 
            class="w-full max-w-[778px] h-auto rounded-lg"
          />
        </div>

        <h2 class="text-lg font-bold">Technologies</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>Vue.js</li>
          <li>D3.js</li>
          <li>Firebase</li>
          <li>Social Media APIs</li>
        </ul>
      </div>
    `,
        coverImage: '/b3.png',
        demoUrl: 'https://dashboard.example.com',
        githubUrl: 'https://github.com/yourusername/social-dashboard',
        tags: [
            {
                label: 'Vue.js',
                color: '#42b883',
                bgColor: '#f0fdf4'
            },
            {
                label: 'Analytics',
                color: '#6366f1',
                bgColor: '#eef2ff'
            },
            {
                label: 'Firebase',
                color: '#f59e0b',
                bgColor: '#fffbeb'
            }
        ]
    }
];
}}),
"[project]/app/projects/[slug]/ProjectContent.tsx (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/projects/[slug]/ProjectContent.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/projects/[slug]/ProjectContent.tsx <module evaluation>", "default");
}}),
"[project]/app/projects/[slug]/ProjectContent.tsx (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/app/projects/[slug]/ProjectContent.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/app/projects/[slug]/ProjectContent.tsx", "default");
}}),
"[project]/app/projects/[slug]/ProjectContent.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f5b$slug$5d2f$ProjectContent$2e$tsx__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/app/projects/[slug]/ProjectContent.tsx (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f5b$slug$5d2f$ProjectContent$2e$tsx__$28$client__proxy$29$__ = __turbopack_import__("[project]/app/projects/[slug]/ProjectContent.tsx (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f5b$slug$5d2f$ProjectContent$2e$tsx__$28$client__proxy$29$__);
}}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProjectPage),
    "generateMetadata": (()=>generateMetadata),
    "generateStaticParams": (()=>generateStaticParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/data/projects.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f5b$slug$5d2f$ProjectContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/projects/[slug]/ProjectContent.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === resolvedParams.slug);
    if (!project) {
        return {
            title: 'Project Not Found'
        };
    }
    return {
        title: `${project.title} | NxtDev`,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            images: [
                project.coverImage
            ]
        }
    };
}
async function ProjectPage({ params }) {
    const resolvedParams = await params;
    const project = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].find((p)=>p.slug === resolvedParams.slug);
    if (!project) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$projects$2f5b$slug$5d2f$ProjectContent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        project: project
    }, void 0, false, {
        fileName: "[project]/app/projects/[slug]/page.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["projects"].map((project)=>({
            slug: project.slug
        }));
}
}}),
"[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
__turbopack_export_namespace__(__turbopack_import__("[project]/app/projects/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/projects/[slug]/page/actions.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=_6e4910._.js.map