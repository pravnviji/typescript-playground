"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
const johnson = {};
const peter = {
    identityDocuments: [],
};
const carl = {
    identityDocuments: [
        {
            name: "Carl",
        },
    ],
};
const mark = {
    identityDocuments: [
        {
            name: "Mark",
            validateName: () => "Print validdateName function spectre Spectre",
        },
    ],
};
const people = [johnson, peter, carl, mark];
people.forEach((person) => {
    var _a, _b, _c;
    const firstIfExist = (_a = person === null || person === void 0 ? void 0 : person.identityDocuments) === null || _a === void 0 ? void 0 : _a[0];
    const name = (_c = (_b = firstIfExist === null || firstIfExist === void 0 ? void 0 : firstIfExist.validateName) === null || _b === void 0 ? void 0 : _b.call(firstIfExist)) !== null && _c !== void 0 ? _c : firstIfExist === null || firstIfExist === void 0 ? void 0 : firstIfExist.name;
    const SCREAM = name === null || name === void 0 ? void 0 : name.toLocaleUpperCase();
    if (SCREAM != null)
        console.log(SCREAM);
});
/** Easy example for Nullish*/
console.log(0 || "Zero");
console.log(0 !== null && 0 !== void 0 ? 0 : "Zero");
console.log("" || "Empty String");
console.log("" !== null && "" !== void 0 ? "" : "Empty String");
/** Example for Optional Chaining */
exports.x = JSON.parse(JSON.stringify({
    y: {
        name: "value",
    },
}));
console.log((_a = exports.x.y) === null || _a === void 0 ? void 0 : _a.z);
