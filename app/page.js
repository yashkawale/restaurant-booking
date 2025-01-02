import { ArrowRight } from "lucide-react";
import { Dancing_Script, Playwrite_AU_SA } from "next/font/google";
import Link from "next/link";

const ds = Dancing_Script({
	weight: ["400", "700"],
	subsets: ["latin"],
});

const pw = Playwrite_AU_SA({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className="lg:flex lg:flex-col lg:items-center text-center mt-60 lg:mt-48 mx-auto">
			<h1
				className={`${ds.className} font-bold text-6xl lg:text-9xl text-light-golden text-shadow-lg`}
			>
				Shine & Bloom
			</h1>
			<div
				className={`${pw.className} font-semibold text-2xl mt-16 text-teal-50 text-shadow-lg`}
			>
				<p>Enjoy An Exceptional</p>
				<p>Journey Of Taste</p>
			</div>
			<Link href="/booking" className="w-fit flex gap-2 items-center mx-auto mt-12 font-semibold bg-light-golden px-5 py-3 rounded-lg border border-slate-200 shadow-light-golden shadow-sm">
				Book a Table <ArrowRight size={20} />
			</Link>
		</div>
	);
}
