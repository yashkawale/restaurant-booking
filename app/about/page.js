import { Playwrite_AU_SA } from "next/font/google";
import Link from "next/link";

const pw = Playwrite_AU_SA({
	weight: ["400"],
	subsets: ["latin"],
});

export default function Page() {
	return (
		<div className="pl-4 lg:pl-16 mt-24 mb-28 lg:mb-0">
			<h1 className="text-4xl lg:text-6xl font-bold text-light-golden text-shadow-lg">
				About Us
			</h1>
			<div className={`${pw.className} mt-4 pl-4 lg:pl-8 lg:mt-8 flex flex-col gap-2 lg:gap-4 text-gray-300 mr-8 lg:mr-20`}>
				<section className="">
					<h2 className="text-xl font-semibold mb-2 text-shadow">Who We Are</h2>
					<p className="text-sm text-gray-400">
						Welcome to Spice & Bloom, where we bring people
						together through exceptional food and a warm, inviting
						atmosphere. Located in the heart of Springfield, we’ve
						been serving our community with passion and dedication
						since 2010.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-2 text-shadow">Our Mission</h2>
					<p className="text-sm text-gray-400">
						Our mission is simple: to create unforgettable dining
						experiences by combining high-quality ingredients,
						innovative recipes, and outstanding customer service.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-2 text-shadow">Our Story</h2>
					<p className="text-sm text-gray-400">
						It all started in a small kitchen, where our founder,
						Jane Doe, envisioned a restaurant that celebrates the
						rich culinary traditions of our region. Over the years,
						we’ve grown into a beloved dining destination, but our
						commitment to authenticity and community has never
						wavered.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-2 text-shadow">
						Meet the Team
					</h2>
					<p className="text-sm text-gray-400">
						At Spice & Bloom, our team is our greatest
						asset. From our talented chefs to our friendly service
						staff, each member is dedicated to making your visit
						memorable.
					</p>
				</section>

				<section>
					<h2 className="text-xl font-semibold mb-2 text-shadow">Contact Us</h2>
					<p className="text-sm text-gray-400">
						We’d love to hear from you! Feel free to reach out via
						our{" "}
						<Link href="/contact" className="text-light-golden">Contact Us </Link>
						page or stop by for a visit.
					</p>
				</section>
			</div>
		</div>
	);
}
