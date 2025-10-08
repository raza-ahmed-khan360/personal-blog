(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_206ae1._.js", {

"[project]/app/data/projects.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Breadcrumbs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Breadcrumbs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
function Breadcrumbs({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex py-4 px-2 bg-gray-50 border-b border-gray-200 rounded-lg shadow-sm mb-6",
        "aria-label": "Breadcrumb",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "inline-flex items-center space-x-1 md:space-x-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "inline-flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-purple-600",
                        children: "Home"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Breadcrumbs.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Breadcrumbs.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                items.map((item, index)=>{
                    const isLast = index === items.length - 1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-gray-400 mx-2",
                                    "aria-hidden": "true",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 6 10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        stroke: "currentColor",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "m1 9 4-4-4-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Breadcrumbs.tsx",
                                        lineNumber: 27,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Breadcrumbs.tsx",
                                    lineNumber: 26,
                                    columnNumber: 17
                                }, this),
                                isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-1 text-sm font-semibold text-black md:ml-2",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Breadcrumbs.tsx",
                                    lineNumber: 30,
                                    columnNumber: 19
                                }, this) : item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "ml-1 text-sm font-medium text-gray-700 hover:text-purple-600 md:ml-2",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Breadcrumbs.tsx",
                                    lineNumber: 34,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-1 text-sm font-medium text-gray-500 md:ml-2",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Breadcrumbs.tsx",
                                    lineNumber: 38,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Breadcrumbs.tsx",
                            lineNumber: 25,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "[project]/app/components/Breadcrumbs.tsx",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Breadcrumbs.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Breadcrumbs.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Breadcrumbs;
var _c;
__turbopack_refresh__.register(_c, "Breadcrumbs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projects/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProjectsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/data/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Breadcrumbs.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
function ProjectsPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const navigateToProject = (slug)=>{
        router.push(`/projects/${slug}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Breadcrumbs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                items: [
                    {
                        label: 'Projects',
                        href: '/projects'
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-gray-900 mb-8 mt-4",
                children: "Projects"
            }, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer",
                        onClick: ()=>navigateToProject(project.slug),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-48 w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: project.coverImage,
                                    alt: project.title,
                                    fill: true,
                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                    className: "object-cover group-hover:scale-105 transition-transform duration-300",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/app/projects/page.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 mb-4",
                                        children: project.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-0.5 rounded-2xl text-sm font-medium",
                                                style: {
                                                    backgroundColor: tag.bgColor,
                                                    color: tag.color
                                                },
                                                children: tag.label
                                            }, index, false, {
                                                fileName: "[project]/app/projects/page.tsx",
                                                lineNumber: 41,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 mb-4 line-clamp-2",
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: project.demoUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-purple-600 hover:text-purple-700",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                },
                                                children: "Live Demo"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: project.githubUrl,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-gray-600 hover:text-gray-700",
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                },
                                                children: "GitHub"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.id, true, {
                        fileName: "[project]/app/projects/page.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(ProjectsPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectsPage;
var _c;
__turbopack_refresh__.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projects/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_206ae1._.js.map