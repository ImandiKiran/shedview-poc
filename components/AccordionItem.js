"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { WallColors } from "@/app/Colors";

const AccordionItem = ({ open, toggle, index }) => {
	const [selectedColor, setSelectedColor] = useState();

	const handleSetColor = (color) => {
		setSelectedColor(color);
	};

	return (
		<>
			{index === 0 ? (
				<div className="pt-1 bg-white mb-2 p-2 shadow-sm rounded-m border-1 border-gray-600">
					<div
						className="rounded-sm  py-[2px] px-[5px] flex justify-between items-center cursor-pointer"
						onClick={toggle}
					>
						<p className="text-xs font-sans text-[#26333D] font-semibold">
							Size
						</p>
						<div className="text-lg text-gray-400">
							{open ? (
								<BsChevronUp className="text-black text-sm" />
							) : (
								<BsChevronDown className="text-black text-sm" />
							)}
						</div>
					</div>
					<Collapse isOpened={open}>
						<section>
							<p className="text-[10px] pl-1 pb-2 menuTextColor">
								Choose your preferred size below
							</p>
							<select className="select select-secondary w-full max-w-full select-xs">
								<option>10 x 14 x 8</option>
								<option>10 x 14 x 8</option>
								<option>10 x 14 x 8</option>
								<option>10 x 14 x 8</option>
								<option>10 x 14 x 8</option>
								<option>10 x 14 x 8</option>
								<option>10 x 14 x 8</option>
								<option>10 x 14 x 8</option>
							</select>
							<p className="text-[10px] pl-1 pb-2 menuTextColor">
								width x height x length
							</p>
						</section>
					</Collapse>
				</div>
			) : index === 1 ? (
				<div className="pt-1 bg-white mb-2 p-2 shadow-sm rounded-m border-1 border-gray-600">
					<div
						className="rounded-sm  py-[2px] px-[5px] flex justify-between items-center cursor-pointer"
						onClick={toggle}
					>
						<p className="text-xs font-sans text-[#26333D] font-semibold">
							Roof-Style
						</p>
						<div className="text-lg text-gray-400">
							{open ? (
								<BsChevronUp className="text-black text-sm" />
							) : (
								<BsChevronDown className="text-black text-sm" />
							)}
						</div>
					</div>
					<Collapse isOpened={open}>
						<section>
							<p className="text-[10px] pl-1 pb-2 menuTextColor">
								Choose your roof style for your shed.
							</p>
							<section className="flex flex-row flex-wrap w-full gap-2">
								<Image
									src="/slope.svg"
									width={60}
									height={60}
									className="cursor-pointer"
								/>
								<Image
									src="/traingle.svg"
									width={60}
									height={60}
									className="cursor-pointer"
								/>
							</section>
						</section>
					</Collapse>
				</div>
			) : index === 2 ? (
				<div className="pt-1 bg-white mb-2 p-2 shadow-sm rounded-m border-1 border-gray-600">
					<div
						className="rounded-sm  py-[2px] px-[5px] flex justify-between items-center cursor-pointer"
						onClick={toggle}
					>
						<p className="text-xs font-sans text-[#26333D] font-semibold">
							Door, Window, Vent
						</p>
						<div className="text-lg text-gray-400">
							{open ? (
								<BsChevronUp className="text-black text-sm" />
							) : (
								<BsChevronDown className="text-black text-sm" />
							)}
						</div>
					</div>
					<Collapse isOpened={open}>
						<section>
							<p className="text-[10px] pl-1 pb-2 menuTextColor">
								Choose your style for your shed.
							</p>
							<section className="flex flex-row flex-wrap w-full gap-2">
								<Image
									src="/door.svg"
									width={60}
									height={60}
									className="cursor-pointer"
								/>
								<Image
									src="/window.svg"
									width={60}
									height={60}
									className="cursor-pointer"
								/>
								<Image
									src="/vent.svg"
									width={60}
									height={60}
									className="cursor-pointer"
								/>
							</section>
						</section>
					</Collapse>
				</div>
			) : index === 3 ? (
				<div className="pt-1 bg-white mb-2 p-2 shadow-sm rounded-m border-1 border-gray-600">
					<div
						className="rounded-sm  py-[2px] px-[5px] flex justify-between items-center cursor-pointer"
						onClick={toggle}
					>
						<p className="text-xs font-sans text-[#26333D] font-semibold">
							Materials
						</p>
						<div className="text-lg text-gray-400">
							{open ? (
								<BsChevronUp className="text-black text-sm" />
							) : (
								<BsChevronDown className="text-black text-sm" />
							)}
						</div>
					</div>
					<Collapse isOpened={open}>
						<section>
							<p className="text-[10px] pl-1 pb-2 menuTextColor">
								Choose your materials for your shed.
							</p>
							<div className="flex flex-row justify-between">
								<p className="text-[10px] font-sans text-[#26333D] pl-1 pb-2  font-bold">
									Wall Colors
								</p>
								<p className="text-[10px] font-sans text-[#26333D] pl-1 pb-2 ">
									{selectedColor}
								</p>
							</div>
							<section className="flex flex-row flex-wrap w-full gap-2">
								{WallColors.map((color, index) => (
									<div
										key={index}
										style={{
											backgroundColor: color,
											width: 20,
											height: 20,
											cursor: "pointer",
										}}
										onClick={() => handleSetColor(color)}
									></div>
								))}
							</section>
							<div className="flex flex-col justify-between pt-2">
								<div className="flex flex-row justify-between">
									<p className="text-[10px] font-sans text-[#26333D] pl-1 pb-2  font-bold">
										Roof:
									</p>
									<p className="text-[10px] font-sans text-[#26333D] pl-1 pb-2 ">
										Charcoal Gray
									</p>
								</div>
								<section className="flex flex-row flex-wrap w-full gap-2">
									<Image
										src="/DarkGreyTerrazzo.svg"
										width={20}
										height={20}
										className="cursor-pointer"
									/>
									<Image
										src="/DarkHoneycombPattern.svg"
										width={20}
										height={20}
										className="cursor-pointer"
									/>
									<Image
										src="/OrientalTilespattern.svg"
										width={20}
										height={20}
										className="cursor-pointer"
									/>
									<Image
										src="/GraphPaper.svg"
										width={20}
										height={20}
										className="cursor-pointer"
									/>
								</section>
							</div>
						</section>
					</Collapse>
				</div>
			) : index === 4 ? (
				<div className=" bg-[#F7E7CB]">
					{index === 3 && !open ? (
						<p className="ml-4 text-xs font-sans text-[#26333D] font-semibold">
							BIM Details
						</p>
					) : (
						<p className="ml-4 text-xs font-sans text-[#26333D] font-semibold">
							View BIM Details
						</p>
					)}
				</div>
			) : null}
		</>
	);
};

export default AccordionItem;
