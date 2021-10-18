declare type Person = {
    identityDocuments?: Array<{
        name?: string;
        validateName?: () => string;
    }>;
};
declare const johnson: Person;
declare const peter: Person;
declare const carl: Person;
declare const mark: Person;
declare const people: Person[];
/** Example for Optional Chaining */
declare const x: any;
