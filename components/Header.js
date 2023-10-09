import React from "react";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

const Header = () => {
	return (
		<div className="navbar bg-base-100 pt-0 shadow-sm pb-0">
			<div className="navbar-start">
				<div className="flex flex-row gap-3">
					<Image src="/Menu.svg" width={24} height={24} />
					<Image src="/Logo.svg" width={70} height={70} />
				</div>
			</div>
			<div className="navbar-end flex flex-row">
				<p className="text-sm cursor-pointer">? Help</p>
				<button className="btn btn-ghost btn-circle">
					<Image src="/Bell.svg" width={16} height={24} />
				</button>
				<div className="w-10 rounded-full">
					<Image src="/Profile.svg" width={24} height={24} />
				</div>
				<BiChevronDown />
			</div>
		</div>
	);
};

export default Header;
