"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 2135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G9: () => (/* binding */ addToHistory),
/* harmony export */   ek: () => (/* binding */ removeFromFavourites),
/* harmony export */   l9: () => (/* binding */ removeFromHistory),
/* harmony export */   my: () => (/* binding */ addToFavourites),
/* harmony export */   on: () => (/* binding */ getFavourites),
/* harmony export */   s1: () => (/* binding */ getHistory)
/* harmony export */ });
/* harmony import */ var _authenticate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);

async function addToFavourites(id) {
    const res = await fetch(`${"https://scary-earmuffs-ant.cyclic.app/api/user"}/favourites/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `JWT ${(0,_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function removeFromFavourites(id) {
    const res = await fetch(`${"https://scary-earmuffs-ant.cyclic.app/api/user"}/favourites/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `JWT ${(0,_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function getFavourites() {
    const res = await fetch(`${"https://scary-earmuffs-ant.cyclic.app/api/user"}/favourites`, {
        method: "GET",
        headers: {
            "Authorization": `JWT ${(0,_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function addToHistory(id) {
    const res = await fetch(`${"https://scary-earmuffs-ant.cyclic.app/api/user"}/history/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `JWT ${(0,_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function removeFromHistory(id) {
    const res = await fetch(`${"https://scary-earmuffs-ant.cyclic.app/api/user"}/history/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `JWT ${(0,_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}
async function getHistory() {
    const res = await fetch(`${"https://scary-earmuffs-ant.cyclic.app/api/user"}/history`, {
        method: "GET",
        headers: {
            "Authorization": `JWT ${(0,_authenticate__WEBPACK_IMPORTED_MODULE_0__/* .getToken */ .LP)()}`
        }
    });
    const data = await res.json();
    if (res.status === 200) {
        return data;
    } else {
        return [];
    }
}


/***/ }),

/***/ 9475:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fH: () => (/* binding */ searchHistoryAtom),
/* harmony export */   p5: () => (/* binding */ favoritesAtom),
/* harmony export */   tA: () => (/* binding */ tokenAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const favoritesAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)();
const searchHistoryAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)([]);
const tokenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;