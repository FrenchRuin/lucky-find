'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import React, { useEffect, useRef, useState } from 'react'
interface notice {
	id: string
	title: string
	contents: string
	category: string
	username: string
	createdAt: string
}

const NoticeTable = () => {
	// useState
	const [noticeList, setNoticeList] = useState<notice[] | undefined>()

	const [mounted, setMounted] = useState<boolean>(false)

	const titleRef = useRef<HTMLInputElement>(null)
	const contentRef = useRef<HTMLTextAreaElement>(null)

	useEffect(() => {
		setMounted(true)
	}, [])

	async function onSubmit() {
		const title = titleRef.current?.value as string
		const content = contentRef.current?.value as string
		console.log(title)
		console.log(content)

		const response = await fetch('http://localhost:8080/api/v1/notices', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				content
			})
		})

		const data = await response.json()
		setNoticeList(data)

		console.log(response)
	}

	// get Notice List
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:8080/api/v1/notices', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const data = await response.json()
			setNoticeList(data)
			console.log(data)
		}
		fetchData()
	}, [])

	function onDelete(id: string) {
		// const fetchData = async () => {
		// 	const response = await fetch(`http://localhost:8080/api/v1/notices/${id}`, {
		// 		method: 'DELETE',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		}
		// 	})
		// 	const data = await response.json()
		// 	setNoticeList(data)
		// 	console.log(data)
		// }
		console.log(id)
	}

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button
						variant={'ghost'}
						className="border  hover:bg-gray-700 hover:text-white transition-all"
					>
						Add Notice
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Notice Add</DialogTitle>
						<DialogDescription>You should Write All contents</DialogDescription>
					</DialogHeader>
					<div className="grid gap-3 py-4">
						<div className="grid grid-cols-6 items-center gap-4">
							<Label htmlFor="title" className="text-right ">
								Title
							</Label>
							<Input ref={titleRef} placeholder="title" className="col-span-5" />
						</div>
						<div className="grid grid-cols-6 items-center gap-4">
							<Label htmlFor="contents" className="text-right ">
								Contents
							</Label>
							<Textarea
								className="col-span-5"
								id="contents"
								placeholder="Please write contents"
								ref={contentRef}
							/>
						</div>
						<div className="grid grid-cols-6 items-center gap-4">
							<Label htmlFor="category" className="text-right ">
								Category
							</Label>
							<Select name="category">
								<SelectTrigger className="col-span-5">
									<SelectValue placeholder="Select a Category" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Category</SelectLabel>
										<SelectItem value="notice">Notice</SelectItem>
										<SelectItem value="info">Info</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<DialogFooter>
						<DialogClose asChild>
							<div>
								<Button variant={'outline'} className=" text-black">
									Cancel
								</Button>
							</div>
						</DialogClose>
						<Button
							variant={'outline'}
							className="bg-black text-white hover:text-black transition-all"
							onClick={onSubmit}
						>
							Confirm
						</Button>
					</DialogFooter>
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
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{noticeList?.map((notice) => (
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
								<td className="px-6 py-4  text-right ">
									<Button variant={'ghost'} className="h-auto bg-sky-100 text-black mr-2">
										Edit
									</Button>
									<Button
										variant={'ghost'}
										className="h-auto bg-rose-400 text-black"
										onClick={() => {
											onDelete(notice.id)
										}}
									>
										Del
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

export default NoticeTable
