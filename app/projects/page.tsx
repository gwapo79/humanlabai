import { supabase } from '@/utils/supabase';

export default async function ProjectsPage() {
    const { data: projects, error } = await supabase
        .from('projects')
        .select('*')
        // LUMINA(가장 큰 것)가 먼저 오도록 정렬 로직 필요하면 추가. 
        // 일단 created_at 순으로 하되, DB에서 순서 꼬이면 id 등으로 정렬.
        // Assuming 'created_at' gives a reasonable default order, or we can rely on 'id' if seeded sequentially.
        // Let's use 'created_at' in ascending order to match insertion order.
        ;

    if (error) {
        console.error("Projects Fetch Error:", error);
        return <div className="text-white">Project Loading Error: {error.message}</div>;
    }

    return (
        <main className="min-h-screen bg-black pt-24 px-4 md:px-8 pb-20">
            <h1 className="text-5xl font-bold text-white mb-16 text-center">
                Our <span className="text-humanlab-neon">Universe</span>
            </h1>

            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] max-w-7xl mx-auto">
                {projects?.map((project) => (
                    <div
                        key={project.id}
                        // DB에 저장된 grid_area 클래스 적용 (ex: md:col-span-2)
                        className={`relative group rounded-2xl overflow-hidden border border-gray-800 ${project.grid_area}`}
                    >
                        <img
                            src={project.image_url}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <span className="text-humanlab-neon text-xs font-bold tracking-widest mb-2 uppercase border border-humanlab-neon/50 w-fit px-2 py-1 rounded">
                                {project.type}
                            </span>
                            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
