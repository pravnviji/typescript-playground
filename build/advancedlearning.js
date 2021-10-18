"use strict";
/** Best example for In Operator */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDraftInvoice = exports.isFinalInvoice = void 0;
const parseEmpDetails = (doc) => {
    console.log("parseEmpDetails");
    console.log(doc);
};
const parseVendorDetails = (doc) => {
    console.log("parseVendorDetails");
    console.log(doc);
};
const serverResponse = {
    vendorId: "05ah068",
    occupation: "Peter",
    lastname: "Mark",
};
const printOutput = (serverResponse) => {
    console.log("printOutput");
    if ("empId" in serverResponse) {
        console.log("success");
        parseEmpDetails(serverResponse);
    }
    else {
        parseVendorDetails(serverResponse);
        console.log("Failure");
    }
};
printOutput(serverResponse);
const isFinalInvoice = (invoice) => {
    return invoice.__typename === "FinalInvoice";
};
exports.isFinalInvoice = isFinalInvoice;
const isDraftInvoice = (invoice) => {
    return invoice.__typename === "DraftInvoice";
};
exports.isDraftInvoice = isDraftInvoice;
const invoiceObj = {
    __typename: "FinalInvoice",
};
console.log("status of invoice " + (0, exports.isFinalInvoice)(invoiceObj));
/*
 
Assert Function
 
function assertIsNumber(val: any): asserts val is number {
    if(typeof val !== "number"){
        throw new AssertionError({message:"Assertion Error"});
    }
}
 
assertIsNumber("sdfsdf");
 
*/
/** Generics Example with Enum */
var TaskType;
(function (TaskType) {
    TaskType["feature"] = "feature";
    TaskType["bug"] = "bug";
})(TaskType || (TaskType = {}));
const featureTask = { name: "SSO", type: TaskType.feature };
featureTask.type = TaskType.bug;
const onlyFeature = { name: "sso", type: TaskType.feature };
/** Extact Utility Function */
const backEndRespons = {
    origin: {
        uuid: "@sdf222",
        city: "Chennai",
    },
    newOrigin: {
        originUUid: "$sd222",
    },
};
const hasOriginRef = (trip) => {
    console.log("hasOriginRef");
    console.log(trip);
    return "origin['uuid']" in trip;
};
const hasNewOriginRef = (trip) => {
    console.log("hasNewOriginRef");
    console.log(trip);
    return "originUUid" in trip;
};
const result = [backEndRespons].filter(hasNewOriginRef);
console.table(result);
/** Example for Partial*/
const personResponse = {
    empno: "dsnfdf",
    name: "Vinay",
    designation: "sdfsfdsfd",
};
// Partial will helps to alter or add the response
const updateReseUsingPartial = (uuid, person) => {
    return {
        uuid: uuid,
        person: person,
    };
};
const pickRes = JSON.parse(JSON.stringify(personResponse));
console.log(updateReseUsingPartial(12332, personResponse));
console.log("***** PICK Example *******");
console.log(pickRes);
console.log("*****  *******");
// Readonly example
const readOnlyPerson = personResponse;
// Readonly Response can't alter
//readOnlyPerson.empno ='sdfsdf'
console.log(readOnlyPerson);
const customPizza = {
    size: "large",
    caloriesPerServing: 30.0,
};
const custBurgerPizza = {
    size: "large",
    caloriesPerServing: undefined,
    toppings: [],
};
const employee = {
    empID: "01222",
    empName: "Praveen",
    doj: new Date("31/03/2012"),
};
const employeBranch = {
    workbranch: "KL Sentral",
    empID: "01222",
    empName: "Praveen",
    doj: new Date("31/03/2013"),
};
