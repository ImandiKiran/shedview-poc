"use client";
import { useState } from "react";
import AccordionItem from "@/components/AccordionItem";
import MenuBanner from "@/components/MenuBanner";

export default function Home() {
	const [open, setOpen] = useState(false);

	const toggle = (index) => {
		if (open === index) {
			return setOpen(null);
		}
		setOpen(index);
	};
	return (
		<main className="flex w-full flex-col  justify-between ">
			<MenuBanner />
			<div class="flex flex-wrap  h-screen">
				<div className="w-4/5 bg-[#D9D9D9] shadow-sm">
					<h2>3D Preview</h2>
				</div>
				<div className="w-1/5 bg-[#E4E7EC] p-4 border-2">
					{[0, 1, 2, 3, 4].map((index) => (
						<AccordionItem
							key={index}
							open={index === open}
							toggle={() => toggle(index)}
							index={index}
						/>
					))}
				</div>
			</div>
		</main>
	);
}
