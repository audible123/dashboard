import {
	HiOutlineViewGrid,
} from 'react-icons/hi'
import { CgProfile } from "react-icons/cg";
import { IoIosStats } from "react-icons/io";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'profile',
		label: 'Profile',
		path: '/profile',
		icon: <CgProfile />
	},
	{
		key: 'stats',
		label: 'Stats',
		path: '/stats',
		icon: <IoIosStats />
	},
	
	
	
]


