/** Best example for In Operator */

type empDetails = {
  empId: string;
  firstname?: string;
  lastname?: string;
  designation?: string;
};

type vendorDetails = {
  vendorId?: string;
  name?: string;
  address?: string;
};

const parseEmpDetails = (doc: empDetails) => {
  console.log("parseEmpDetails");
  console.log(doc);
};

const parseVendorDetails = (doc: vendorDetails) => {
  console.log("parseVendorDetails");
  console.log(doc);
};

const serverResponse = {
  vendorId: "05ah068",
  occupation: "Peter",
  lastname: "Mark",
};

const printOutput = (serverResponse: empDetails | vendorDetails) => {
  console.log("printOutput");
  if ("empId" in serverResponse) {
    console.log("success");
    parseEmpDetails(serverResponse);
  } else {
    parseVendorDetails(serverResponse);
    console.log("Failure");
  }
};

printOutput(serverResponse);

/******** Is Operator *******/

type FinalInvoice = {
  __typename: "FinalInvoice";
};

type DraftInvoice = {
  __typename: "DraftInvoice";
};

type Invoice = FinalInvoice | DraftInvoice;

export const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === "FinalInvoice";
};

export const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === "DraftInvoice";
};

const invoiceObj = <Invoice>{
  __typename: "FinalInvoice",
};

console.log("status of invoice " + isFinalInvoice(invoiceObj));

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

enum TaskType {
  feature = "feature",
  bug = "bug",
}

type Task<T = TaskType> = {
  name: string;
  type: T;
};

const featureTask = <Task>{ name: "SSO", type: TaskType.feature };
featureTask.type = TaskType.bug;

type FeatureTask = Task<TaskType.feature>;

const onlyFeature = <FeatureTask>{ name: "sso", type: TaskType.feature };

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

type Trip =
  | {
    origin: {
      uuid: string;
      city: string;
    };
  }
  | {
    newOrigin: {
      originUUid: string;
    };
  };

type TripWithNewOrigin = Extract<Trip, { newOrigin: any }>;

type TripWithOrigin = Extract<
  Trip,
  {
    origin: {
      uuid: string;
    };
  }
>;

const hasOriginRef = (trip: Trip): trip is TripWithOrigin => {
  console.log("hasOriginRef");
  console.log(trip);
  return "origin['uuid']" in trip;
};

const hasNewOriginRef = (trip: Trip): trip is TripWithNewOrigin => {
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

type PersonPartial = {
  empno: string;
  name: string;
  occupation: string;
};

type PersonReadonly = {
  empno: string;
  name: string;
};

// Partial will helps to alter or add the response
const updateReseUsingPartial = (
  uuid: number,
  person?: Partial<PersonPartial>
) => {
  return {
    uuid: uuid,
    person: person,
  };
};

type PersonPickOnly = Pick<PersonPartial, "name">;

const pickRes = <PersonPickOnly>JSON.parse(JSON.stringify(personResponse));

console.log(updateReseUsingPartial(12332, personResponse));

console.log("***** PICK Example *******");
console.log(pickRes);

console.log("*****  *******");

// Readonly example
const readOnlyPerson: Readonly<PersonReadonly> = personResponse;

// Readonly Response can't alter
//readOnlyPerson.empno ='sdfsdf'
console.log(readOnlyPerson);

/// PICK Example & OMIT Example

type Consumable = {
  size: "large" | "medium" | "small";
  caloriesPerServing: number;
  millilitresPerServing: number;
  gramsPerServing: number;
};

type Pizza = Pick<Consumable, "size" | "caloriesPerServing">;

const customPizza: Pizza = {
  size: "large",
  caloriesPerServing: 30.0,
};

interface BurgerPizza extends Pick<Consumable, "size" | "caloriesPerServing"> {
  toppings: string[];
}
const custBurgerPizza: BurgerPizza = {
  size: "large",
  caloriesPerServing: undefined,
  toppings: [],
};

interface EmployeeDetails {
  empID: string;
  empName: string;
  doj: Date;
  dependantDetails: string[];
  workAnniversary: Date;
}

type empDetailsOnly = Omit<
  EmployeeDetails,
  "dependantDetails" | "workAnniversary"
>;

const employee: empDetailsOnly = {
  empID: "01222",
  empName: "Praveen",
  doj: new Date("31/03/2012"),
};

interface empBranchDetails
  extends Omit<EmployeeDetails, "dependantDetails" | "workAnniversary"> {
  workbranch: string;
}

type exmpBranchDetailType = Omit<EmployeeDetails, "dependantDetails" | "workAnniversary"> & {
  workbranch: string;
}


const employeBranch: exmpBranchDetailType = {
  workbranch: "KL Sentral",
  empID: "01222",
  empName: "Praveen",
  doj: new Date("31/03/2013"),
};
