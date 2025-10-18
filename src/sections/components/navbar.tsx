"use client";

import { Button } from "@/components/ui/button";
import { Blocks, House, MessagesSquare, Moon, Wrench } from "lucide-react";
import React from "react";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-6 py-11 sm:py-15 flex justify-between items-center bg-background/1 backdrop-blur-md shadow-sm">
			<div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-85 sm:w-full max-w-7xl px-4 sm:px-6 py-1 sm:py-4 flex justify-between items-center bg-background/50 backdrop-blur-sm border border-background/10 shadow-md rounded-lg">
				{/* Logo + Typing Text */}
				<div className="ml-[-7px] flex items-center space-x-2 overflow-hidden">
					<img
						src="./logo-dark-1.png"
						alt="logo"
						className="h-12 w-12 object-contain rounded-full hover:animate-in"
					/>
					<span className="text-primary/60 text-base sm:text-xl font-semibold typing whitespace-nowrap truncate max-w-[225px] sm:max-w-none">
						Hey there, how's it going?
					</span>
				</div>

				{/* Nav Links - hidden on mobile */}
				<div className="hidden sm:flex gap-2 bg-background/30 rounded-full px-4 py-2 shadow-inner backdrop-blur-sm">
					<NavItem
						icon={<Moon size={18} />}
						onClick={() => document.documentElement.classList.toggle("dark")}
					/>
					<NavItem icon={<House size={18} />} label="Home" />
					<NavItem icon={<Blocks size={18} />} label="Projects" />
					<NavItem icon={<Wrench size={18} />} label="Skills" />
					<NavItem icon={<MessagesSquare size={18} />} label="Let's Chat" />
				</div>
			</div>
		</nav>
	);
};

// Reusable Nav Item
const NavItem = ({
	icon,
	label,
	onClick,
}: {
	icon: React.ReactNode;
	label?: string;
	onClick?: () => void;
}) => (
	<Button
		variant="ghost"
		onClick={onClick}
		className="flex items-center gap-2 text-primary hover:bg-background px-4 py-2 rounded-full transition"
	>
		{icon}
		{label && <span className="text-sm">{label}</span>}
	</Button>
);

export default Navbar;
