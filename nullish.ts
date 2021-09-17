type Person = {
    identityDocuments?: Array<{
        name?: string;
        validateName?: () => string;
    }>;
}

const johnson:Person = {

};

const peter: Person = {
    identityDocuments: []
}

const carl: Person = {
    identityDocuments:[{
        name: 'Carl'
    }]
}

const mark: Person = {
    identityDocuments:[{
        name: 'Mark',
        validateName: () => 'Spectre'
    }]
}

const people = [johnson,peter,carl,mark];

people.forEach((person) =>{
    const firstIfExist = person?.identityDocuments?.[0]; 
    const name = firstIfExist?.validateName?.() ?? firstIfExist?.name;
    const SCREAM = name?.toLocaleUpperCase();

    if(SCREAM != null ) console.log(SCREAM);
});