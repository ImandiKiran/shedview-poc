import Image from "next/image";
import React from "react";
import { BiArrowBack, BiDownload } from "react-icons/bi";
import { BsShare } from "react-icons/bs";

const MenuBanner = () => {
	return (
		<div className="flex flex-row menuColor justify-between shadow-2xl">
			<section className="flex flex-row self-center gap-2 items-center pl-2">
				<BiArrowBack className="menuTextColor" />
				<p className="flex flex-row text-sm  menuTextColor">Back</p>
			</section>
			<section>
				<button className="btn btn-link text-xs menuTextColor no-underline ">
					New Project
				</button>
			</section>
			<section className="flex flex-row justify-between gap-2 items-center pr-4">
				<button className="btn btn-sm btn-outline text-xs">
					<BsShare />
					Share
				</button>
				<button className="btn btn-sm btn-outline text-xs">
					<BiDownload />
					Download
				</button>
				<button className="btn btn-sm btn-neutral text-xs">
					<Image src="/tick-circle.svg" width={20} height={20} />
					Submit for Quote
				</button>
			</section>
		</div>
	);
};

export default MenuBanner;
