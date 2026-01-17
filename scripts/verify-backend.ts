import { prisma } from "@/lib/prisma";

async function verify() {
    console.log("--- Starting Verification ---");

    // 1. Relation Check
    const projects = await prisma.project.findMany({
        include: {
            entity: true
        }
    });

    console.log(`Found ${projects.length} projects.`);
    let orphanCount = 0;

    projects.forEach((p: any) => {
        if (!p.entity) {
            console.error(`[FAIL] Orphan Project Found: ${p.title} (ID: ${p.id})`);
            orphanCount++;
        } else {
            console.log(`[PASS] Project '${p.title}' relates to Entity '${p.entity.name}' (Type: ${p.entity.type})`);
        }
    });

    if (orphanCount === 0) {
        console.log("Relationship Integrity: OK (No Orphans)");
    }

    // 2. Status Integrity Check
    const allowedStatuses = ["ACTIVE", "GROWING", "DEVELOPING"];
    let invalidStatusCount = 0;

    projects.forEach((p: any) => {
        if (!allowedStatuses.includes(p.status)) {
            console.error(`[FAIL] Invalid Status Found: ${p.status} in Project '${p.title}'`);
            invalidStatusCount++;
        } else {
            console.log(`[PASS] Project '${p.title}' has valid status: ${p.status}`);
        }
    });

    if (invalidStatusCount === 0) {
        console.log("Status Integrity: OK");
    }

    console.log("--- Verification Complete ---");
}

verify();
