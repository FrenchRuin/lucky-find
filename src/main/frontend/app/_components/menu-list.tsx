import Link from 'next/link'
import React from 'react'

const MenuList = () => {
	return (
		<>
			<Link
				href={'/notice'}
				className=" py-10 bg-indigo-50 rounded-lg hover:bg-indigo-200 transition-all hover:shadow-sky-700 shadow-lg"
			>
				<div className="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Notice
					</dd>
					<dt className="text-base leading-7 text-gray-600">
						<div className="w-[450px]"></div>
						<div className="font-medium text-black">공지사항</div>
					</dt>
				</div>
			</Link>

			<Link
				href={'/recruit'}
				className=" py-10 bg-indigo-50 rounded-lg hover:bg-indigo-200 transition-all hover:shadow-sky-700 shadow-lg"
			>
				<div className="mx-auto flex max-w-xs flex-col gap-y-4">
					<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						Recruit
					</dd>
					<dt className="text-base leading-7 text-gray-600">
						<div className="w-[450px]"></div>
						<div className="font-medium text-black">팀원모집</div>
					</dt>
				</div>
			</Link>
			<Link href={'/notice'} className="bg-black py-10">
				<div className="mx-auto flex max-w-xs flex-col gap-y-4">
					<dt className="text-base leading-7 text-gray-600">New users annually</dt>
					<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						46,000
					</dd>
				</div>
			</Link>
		</>
	)
}

export default MenuList
