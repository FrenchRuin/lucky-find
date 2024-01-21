interface notice {
	id: string
	title: string
	contents: string
	category: string
	username: string
}

const NoticeTable = async () => {
	const response = await fetch('http://localhost:8080/api/v1/notices', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const noticeList: notice[] = await response.json()

	return (
		<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
			<thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-indigo-100 dark:text-black-400">
				<tr>
					<th scope="col" className="px-6 py-3">
						No.
					</th>
					<th scope="col" className="px-6 py-3">
						Title
					</th>
					<th scope="col" className="px-6 py-3">
						Category
					</th>
					<th scope="col" className="px-6 py-3">
						Writer
					</th>
					<th scope="col" className="px-6 py-3">
						created at
					</th>
					<th scope="col" className="px-6 py-3">
						<span className="sr-only">Edit</span>
					</th>
				</tr>
			</thead>
			<tbody>
				{noticeList.map((notice) => (
					<tr
						className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
						key={notice.id}
					>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{notice.id}
						</th>
						<th
							scope="row"
							className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
						>
							{notice.title}
						</th>
						<td className="px-6 py-4">{notice.category}</td>
						<td className="px-6 py-4">{notice.username}</td>
						<td className="px-6 py-4"></td>
						<td className="px-6 py-4 text-right">
							<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
								Edit
							</a>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default NoticeTable
