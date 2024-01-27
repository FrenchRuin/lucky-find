import Link from 'next/link'

export default function Home() {
	return (
		<div>
			<div className="flex justify-center mt-20">
				<div className="text-3xl px-8 py-8  rounded-lg uppercase font-bold">
					Welcome to Lucky Find 😀
				</div>
			</div>
			<div className="flex justify-center">
				<div className="text-xl px-8 py-8 ">
					럭키파인드는 사이드 프로젝트 팀원을 손쉽게 모집할 수 있습니다.
				</div>
			</div>
			<div className="bg-white py-10 sm:py-10">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
						<Link
							href={'/notice'}
							className=" py-10 bg-indigo-50 rounded-lg hover:bg-indigo-200 transition-all"
						>
							<div className="mx-auto flex max-w-xs flex-col gap-y-4">
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
									Notice
								</dd>
								<dt className="text-base leading-7 text-gray-600">
									<div className="w-[450px]"></div>
									<div className="font-medium">공지사항</div>
								</dt>
							</div>
						</Link>

						<Link href={'/notice'} className="bg-black py-10">
							<div className="mx-auto flex max-w-xs flex-col gap-y-4">
								<dt className="text-base leading-7 text-gray-600">Assets under holding</dt>
								<dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
									$119 trillion
								</dd>
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
					</dl>
				</div>
			</div>
		</div>
	)
}
