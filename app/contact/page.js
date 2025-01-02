import { Playwrite_AU_SA } from "next/font/google";

const pw = Playwrite_AU_SA({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Page() {
	return (
		<div className="pl-4 lg:pl-16 mt-24 w-full">
			<h1 className="text-4xl lg:text-6xl font-bold text-light-golden text-shadow-lg">Contact Us</h1>
			<div className={`${pw.className} mt-4 pl-4 lg:pl-8 lg:mt-8 flex flex-col gap-4 text-gray-400 mr-4`}>
				<p>
					<strong className="text-gray-300 text-shadow">Address:</strong> 123 Main Street, Opposite City Mall, Springfield, USA
				</p>
				<p>
					<strong className="text-gray-300 text-shadow">Email:</strong>{" "}
					<a href="mailto:spiceandbloom@next.com" className="">
                    spiceandbloom@next.com
					</a>
				</p>
				<p>
					<strong className="text-gray-300 text-shadow">Phone:</strong>{" "}
					<a href="tel:+919834494697" className="">
						+91 9834494697
					</a>
				</p>
				<p>
					<strong className="text-gray-300 text-shadow">Working Hours:</strong> Tue - Sun, 11 AM - 8 PM
				</p>
			</div>
		</div>
	);
}
