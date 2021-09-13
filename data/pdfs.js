var { v4: uuid } = require('uuid');

var pdfs = [
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Aspect',
        location_name: 'indication',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.i',
        subdivision: 'Southeast Sub',
        location_type: 'indication',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'a02500.p',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
];

const pdfAttributes = [
    {
        title: "Plan Type",
        field: "plan_type",
    },
    {
        title: "Location Name",
        field: "location_name",
    },
    {
        title: "Prefix",
        field: "prefix",
    },
    {
        title: "MP",
        field: "mp",
    },
    {
        title: "File Name",
        field: "file_name",
    },
    {
        title: "Subdivision",
        field: "subdivision",
    },
    {
        title: "Location Type",
        field: "location_type",
    },
    {
        title: "Sheet Order",
        field: "sheet_order",
    },
];

export const getPdfRecords = () => [...pdfs];

export const getPdfRecordsByType = (type) => {
    const allRecords = getPdfRecords();
    if (type === "all") {
        return allRecords;
    }
    return allRecords.filter((rec) => rec.plan_type === type);
}

export const addPdf = (pdf) => {
    pdfs.push(pdf);
}

export const getPdfAttributes = () => [...pdfAttributes];

export const deletePdf = (id) => {
    pdfs = pdfs.filter((pdf) => pdf.id !== id);
}