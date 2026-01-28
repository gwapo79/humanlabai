import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-2 space-y-4">
                        <span className="text-xl font-bold tracking-tighter text-white">
                            HUMANLAB <span className="text-gray-400">AI</span>
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            단순한 광고 대행사가 아닙니다.<br />
                            우리는 당신의 브랜드가 살아 숨 쉬게 만드는 운영 파트너입니다.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-sm">EXPLORE</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/live" className="hover:text-white transition-colors">LIVE Activity</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition-colors">Our Projects</Link></li>
                            <li><Link href="/ad-stories" className="hover:text-white transition-colors">Ad Stories</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white font-bold text-sm">COMPANY</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 HumanLab AI. All logic & emotions reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">개인정보 처리방침</Link>
                        <Link href="#" className="hover:text-white">이용약관</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
