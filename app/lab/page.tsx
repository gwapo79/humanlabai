import { supabase } from '@/utils/supabase';

const getStatusBadge = (status: string) => {
    // DB에 저장된 텍스트와 정확히 일치해야 함 (대소문자 주의)
    const s = status ? status.toUpperCase() : 'BETA';
    if (s === 'PRODUCTION_READY') return <span className="bg-green-500/20 text-green-400 border border-green-500/50 px-2 py-1 rounded text-xs font-bold">PRODUCTION READY</span>;
    if (s === 'EXPERIMENTAL') return <span className="bg-purple-500/20 text-purple-400 border border-purple-500/50 px-2 py-1 rounded text-xs font-bold">EXPERIMENTAL</span>;
    return <span className="bg-gray-500/20 text-gray-400 border border-gray-500/50 px-2 py-1 rounded text-xs font-bold">{s}</span>;
};

export default async function LabPage() {
    const { data: labs, error } = await supabase
        .from('lab_notes')
        .select('*');

    if (error) {
        console.error("Lab Fetch Error:", error);
        return <div className="text-white">Lab Data Error: {error.message}</div>;
    }

    return (
        <main className="min-h-screen bg-black pt-24 px-6 pb-20">
            <div className="max-w-5xl mx-auto">
                <header className="mb-16 border-b border-gray-800 pb-8">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        HumanLab <span className="text-humanlab-neon">R&D</span>
                    </h1>
                    <p className="text-gray-400">Engineering Log & AI Tech Benchmarks</p>
                </header>

                <div className="space-y-6">
                    {labs?.map((note) => (
                        <div key={note.id} className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-humanlab-neon/50 transition-colors">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                {getStatusBadge(note.status || 'BETA')}
                                <span className="text-humanlab-neon text-sm font-mono">[{note.category}]</span>
                                <span className="text-gray-500 text-xs ml-auto">
                                    {note.created_at ? note.created_at.split('T')[0] : ''}
                                </span>
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">{note.title}</h2>
                            <p className="text-gray-400 mb-4">{note.summary}</p>

                            <details className="group">
                                <summary className="text-humanlab-neon text-sm font-bold cursor-pointer hover:underline list-none">
                                    View Technical Report &rarr;
                                </summary>
                                <div className="mt-6 pt-6 border-t border-gray-800 animate-fadeIn text-gray-300">
                                    <div
                                        className="prose prose-invert max-w-none"
                                        dangerouslySetInnerHTML={{ __html: note.content }}
                                    />
                                </div>
                            </details>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
