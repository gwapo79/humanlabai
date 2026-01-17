import { prisma } from "@/lib/prisma";
import { LiveFeedClient } from "./live-feed-client";

export async function LiveFeed() {
    // 1. Fetch from DB
    // 2. If failure or empty, handle gracefully (Component handles empty array)

    let activities = [];
    try {
        const logs = await prisma.activityLog.findMany({
            orderBy: { publishedAt: 'desc' },
            take: 10,
            include: {
                entity: true
            }
        });

        // Transform for client
        activities = logs.map(log => ({
            id: log.id,
            source: log.source,
            date: log.publishedAt.toISOString().split('T')[0].replace(/-/g, '.'), // YYYY.MM.DD
            title: log.title,
            description: log.description || "",
            image: log.imageUrl,
            tags: log.tags ? log.tags.split(',') : [],
            entityName: log.entity.name
        }));

    } catch (e) {
        console.error("LiveFeed DB Error:", e);
        // Fallback to empty, client will show "No recent activity" or skeleton
    }

    return <LiveFeedClient initialActivities={activities} />;
}
