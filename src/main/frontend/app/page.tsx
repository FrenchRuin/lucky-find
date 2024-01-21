import NavBar from '@/components/NavBar'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<NavBar />
			<div className="flex justify-center mt-20">
				<div className="text-3xl px-8 py-8  rounded-lg uppercase hover:bg-indigo-300 transition-all">
					Welcome to Lucky Find 😀
				</div>
			</div>

			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						<div className="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt className="text-base leading-7 text-gray-600">
								<div className="mb-3">Announcement</div>
								<button className="bg-indigo-500 px-3 rounded-md hover:bg-indigo-700 transition-all text-white">
									<Link href={'/notice'}>Click Here!</Link>
								</button>
							</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								Notice
							</dd>
						</div>
						<div className="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt className="text-base leading-7 text-gray-600">Assets under holding</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								$119 trillion
							</dd>
						</div>
						<div className="mx-auto flex max-w-xs flex-col gap-y-4">
							<dt className="text-base leading-7 text-gray-600">New users annually</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
								46,000
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	)
}
