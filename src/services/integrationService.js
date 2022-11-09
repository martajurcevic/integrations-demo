export default {
    getIntegrations
}

async function getIntegrations() {
    var result = {
        data: [
                {
                title: "Pipedrive",
                status: 1,
                statusName: "Disabled",
                category: "CRM",
                tags: ["Tag1", "Tag2"],
                lastModified: "16.05.2023.",
            },
            {
                title: "Salesforce",
                status: 1,
                statusName: "Disabled",
                category: "CRM",
                tags: ["Tag1", ],
                lastModified: "16.05.2023.",
            },
            {
                title: "Pipedrive",
                status: 2,
                statusName: "Enabled",
                category: "CRM",
                tags: ["Tag1", "Tag2", "Tag3"],
                lastModified: "16.05.2023.",
            },
        ],
        status: 200
    };

    return result;
}