// components/live/live-feed.tsx
// [Prisma 제거 및 정적 데이터로 대체]

export default function LiveFeed() {
    // 임시 더미 데이터 (빌드 에러 방지용)
    const logs = [
        { id: 1, title: 'HumanLab AI Server Initialized', category: 'SYSTEM', date: '2026-01-20' },
        { id: 2, title: 'LUMINA Project Data Sync Complete', category: 'DATA', date: '2026-01-19' },
        { id: 3, title: 'New Lab Note: Sora vs Gen-3 Posted', category: 'CONTENT', date: '2026-01-19' },
        { id: 4, title: 'Global CDN Connected (Cloudflare)', category: 'INFRA', date: '2026-01-18' },
        { id: 5, title: 'AdStory Database Migration Success', category: 'DB', date: '2026-01-18' },
    ];

    return (
        <div className="space-y-4">
            {logs.map((log) => (
                <div key={log.id} className="border-b border-gray-800 pb-4 mb-4">
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-humanlab-neon text-xs font-bold tracking-widest uppercase">
                            [{log.category}]
                        </span>
                        <span className="text-gray-600 text-xs font-mono">{log.date}</span>
                    </div>
                    <h3 className="text-lg text-gray-300 font-medium">
                        {log.title}
                    </h3>
                </div>
            ))}
        </div>
    );
}
