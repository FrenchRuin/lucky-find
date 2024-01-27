import Link from 'next/link'
import MenuList from './_components/menu-list'

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
						<MenuList />
					</dl>
				</div>
			</div>
		</div>
	)
}
