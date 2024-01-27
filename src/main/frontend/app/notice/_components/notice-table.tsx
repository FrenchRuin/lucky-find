'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'

import React, { useEffect, useState } from 'react'
import NoticeForm from './notice-form'
import NoticeInfo from './notice-Info'
import { toast } from 'sonner'

export interface NoticeDtoProps {
	id: string
	title: string
	content: string
	category: string
	username: string
	createdAt: string
}

const NoticeTable = () => {
	// useState
	const [noticeList, setNoticeList] = useState<NoticeDtoProps[] | undefined>()

	const [mounted, setMounted] = useState<boolean>(false)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)
		getNoticeList()
	}, [])

	async function onSubmit(noticeDto: NoticeDtoProps) {
		const { title, content, category, username } = noticeDto

		await fetch('http://localhost:8080/api/v1/notices', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				content,
				category,
				username
			})
		})

		toast.info('공지사항이 등록되었습니다.')

		getNoticeList()
		setIsOpen(false)
	}

	const getNoticeList = async () => {
		const response = await fetch('http://localhost:8080/api/v1/notices', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await response.json()
		setNoticeList(data)
	}

	return (
		<>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogTrigger asChild>
					<Button
						variant={'ghost'}
						className="border  hover:bg-gray-700 hover:text-white transition-all w-[100px]"
					>
						Add +
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Notice Add</DialogTitle>
						<DialogDescription>You should Write All contents</DialogDescription>
					</DialogHeader>
					<NoticeForm onSubmit={onSubmit} />
				</DialogContent>
			</Dialog>
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-white uppercase bg-gray-700 dark:bg-gray-900 dark:text-white">
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
						</tr>
					</thead>
					<tbody>
						{noticeList?.map((noticeDto, index) => (
							<tr
								className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
								key={noticeDto.id}
							>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									{index + 1}
								</th>
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									<NoticeInfo
										id={noticeDto.id}
										data={noticeDto}
										getNoticeList={getNoticeList}
									></NoticeInfo>
								</th>
								<td className="px-6 py-4">{noticeDto.category}</td>
								<td className="px-6 py-4">{noticeDto.username}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default NoticeTable
