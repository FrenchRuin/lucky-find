import Link from 'next/link'

const NavBar = () => {
	return (
		<nav className="bg-gray-600 border-b-4">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="relative flex h-16 items-center justify-between">
					<div className="text-white font-semibold "></div>
					<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
						<div className="flex flex-shrink-0 items-center"></div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<Link href={'/'}>
									<div className=" text-white rounded-md  py-2 text-sm font-medium">Lucky Find</div>
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-1 items-center justify-center  sm:justify-between">
						<div className="flex flex-shrink-0 items-center"></div>
						<div className="hidden sm:ml-6 sm:block">
							<div className="flex space-x-4">
								<Link href={'/auth'}>
									<div className="bg-white text-black rounded-md px-3 py-2 text-sm font-medium hover:bg-black hover:text-white transition-all">
										Login
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
