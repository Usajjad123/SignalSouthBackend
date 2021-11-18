var { v4: uuid } = require('uuid');

var pdfs = [
    {
        id: uuid(),
        plan_type: 'Profile',
        location_name: 'Profile',
        prefix: 'A',
        mp: 25.10,
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
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
        file_name: 'activity.pdf',
        pathname: 'activity.pdf',
        subdivision: 'Southeast Sub',
        location_type: 'Profile',
        sheet_order: 1,
    },
];

var pdfAttributes = [
    {
        title: "Plan Type",
        field: "plan_type",
        type: "SELECT",
        options: [
            "Profile", "Aspect", "Asset"
        ]
    },
    {
        title: "Location Name",
        field: "location_name",
    },
    {
        title: "Prefix",
        field: "prefix",
        type: "SELECT",
        options: ["A"]
    },
    {
        title: "MP",
        field: "mp",
        type: "NUMBER"
    },
    {
        title: "File Name",
        field: "file_name",
    },
    {
        title: "Subdivision",
        field: "subdivision",
        type: "SELECT",
        options: ["Southeast Sub"]
    },
    {
        title: "Location Type",
        field: "location_type",
        type: "SELECT",
        options: [
            "Crossing",
            "Signal",
            "Interlocking",
            "Profile",
            "Indication",
        ]
    },
    {
        title: "Sheet Order",
        field: "sheet_order",
    },
];

module.exports.getPdfRecords = () => [...pdfs];

module.exports.getPdfRecordsByType = (type) => {
    if (type === "all") {
        return pdfs;
    }
    return pdfs.filter((rec) => rec.plan_type === type);
}

module.exports.addPdf = (pdf) => {
    pdfs.push(pdf);
}

module.exports.deletePdf = (id) => {
    pdfs = pdfs.filter((pdf) => pdf.id !== id);
}

module.exports.getPdfAttributes = () => [...pdfAttributes];

module.exports.addPdfAttribute = async (attribute) => {
    pdfAttributes.push(attribute);
};
