/** Best example for In Operator */
/******** Is Operator *******/
declare type FinalInvoice = {
    __typename: "FinalInvoice";
};
declare type DraftInvoice = {
    __typename: "DraftInvoice";
};
declare type Invoice = FinalInvoice | DraftInvoice;
export declare const isFinalInvoice: (invoice: Invoice) => invoice is FinalInvoice;
export declare const isDraftInvoice: (invoice: Invoice) => invoice is DraftInvoice;
export {};
