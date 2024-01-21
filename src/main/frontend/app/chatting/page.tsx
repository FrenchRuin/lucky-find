import NavBar from '@/components/NavBar'
import Link from 'next/link'
import NoticeTable from './[components]/notice-table'

const page = () => {
	return (
		<div>
			<NavBar />
			<div className="flex justify-evenly mt-20">
				<div className="text-3xl px-8 py-8 font-bold rounded-lg uppercase">Notice 💡</div>
				<div className="text-2xl px-8 py-8  rounded-lg  ">
					You should know what you are looking for!
				</div>
			</div>
			<div className="bg-white py-24 sm:py-32">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-1">
						<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
							<NoticeTable />
						</div>
					</dl>
				</div>
			</div>
		</div>
	)
}

export default page
