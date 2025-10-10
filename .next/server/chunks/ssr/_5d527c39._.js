module.exports = [
"[project]/constans/tags.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tags",
    ()=>tags
]);
const tags = [
    "All",
    "Todo",
    "Work",
    "Personal",
    "Meeting",
    "Shopping"
];
}),
"[project]/components/SidebarNotes/SidebarNotes.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "menuItem": "SidebarNotes-module__2FOKBa__menuItem",
  "menuLink": "SidebarNotes-module__2FOKBa__menuLink",
  "menuList": "SidebarNotes-module__2FOKBa__menuList",
});
}),
"[project]/app/notes/filter/@sidebar/default.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constans$2f$tags$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constans/tags.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarNotes$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/SidebarNotes/SidebarNotes.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
const SidebarNotes = ()=>{
    // const { notes } = await fetchNotes();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: "/notes/action/create",
                children: "Create note"
            }, void 0, false, {
                fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarNotes$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuList,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$constans$2f$tags$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["tags"].map((tag)=>{
                    const url = tag === "All" ? "/notes/filter/All" : `/notes/filter/${tag}`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarNotes$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuItem,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: url,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SidebarNotes$2f$SidebarNotes$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].menuLink,
                            children: tag
                        }, void 0, false, {
                            fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                            lineNumber: 28,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, tag, false, {
                        fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                        lineNumber: 27,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/notes/filter/@sidebar/default.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = SidebarNotes;
}),
];

//# sourceMappingURL=_5d527c39._.js.map