import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { NoticeDtoProps } from './notice-table'
import { Textarea } from '@/components/ui/textarea'
import NoticeDeleteButton from './notice-delete-button'
import { useState } from 'react'

interface NoticeInfoProps {
	id: string
	data: NoticeDtoProps | undefined
	getNoticeList: () => {}
}

const NoticeInfo = ({ data, getNoticeList }: NoticeInfoProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	async function onDelete(id?: string) {
		await fetch(`http://localhost:8080/api/v1/notices/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})

		setIsOpen(false)
		getNoticeList()
	}

	return (
		<div>
			<Drawer open={isOpen} onOpenChange={setIsOpen}>
				<DrawerTrigger className="bg-gray-100 py-2 px-2 overflow-hidden w-[120px] rounded-lg hover:bg-gray-800 transition-all hover:text-white ">
					{data?.title}
				</DrawerTrigger>
				<DrawerContent className="grid place-items-center ">
					<div className="px-1">
						<DrawerHeader>
							<DrawerTitle>{data?.title}</DrawerTitle>
							<DrawerDescription>{data?.category}</DrawerDescription>
						</DrawerHeader>
						<div className="p-4 pb-0 h-full">
							<div className="flex items-center justify-center space-x-2 w-full">
								{data?.content}
							</div>
							<div className="mt-3 min-h-[200px]"></div>
						</div>
					</div>
					<DrawerFooter>
						<div className="flex justify-center w-full space-x-3">
							<DrawerClose asChild>
								<Button variant="outline">Cancel</Button>
							</DrawerClose>
							<Button variant={'ghost'} className="bg-slate-200 hover:bg-slate-500 transition-all">
								{' '}
								Modify
							</Button>
							<NoticeDeleteButton
								onDelete={() => {
									onDelete(data?.id)
								}}
							/>
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default NoticeInfo
