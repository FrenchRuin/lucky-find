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
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel
} from '@/components/ui/form'
import { NoticeDtoProps } from './notice-table'
import { Textarea } from '@/components/ui/textarea'
import NoticeDeleteButton from './notice-delete-button'
import { useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Separator } from '@/components/ui/separator'

interface NoticeInfoProps {
	id: string
	data: NoticeDtoProps | undefined
	getNoticeList: () => {}
}

const NoticeInfo = ({ data, getNoticeList }: NoticeInfoProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isReadOnly, setIsReadOnly] = useState<boolean>(true)

	const form = useForm()

	const titleRef = useRef<HTMLInputElement>(null)
	const contentRef = useRef<HTMLTextAreaElement>(null)

	async function onDelete(id?: string) {
		await fetch(`http://localhost:8080/api/v1/notices/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		})
		setIsOpen(false)
		getNoticeList()
		toast.info('삭제되었습니다 😊')
	}

	async function onSave(id?: string) {
		const title = titleRef.current?.value
		const content = contentRef.current?.value

		await fetch(`http://localhost:8080/api/v1/notices/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title,
				content
			})
		})
		getNoticeList()
		setIsReadOnly(true)
		toast.info('저장되었습니다 😊')
	}

	return (
		<div>
			<Drawer open={isOpen} onOpenChange={setIsOpen}>
				<DrawerTrigger className="bg-gray-100 py-2 px-2 overflow-hidden w-[120px] rounded-lg hover:bg-gray-800 transition-all hover:text-white text-muted-foreground ">
					{data?.title}
				</DrawerTrigger>
				<DrawerContent className="grid place-items-center ">
					<div className="px-1">
						<DrawerHeader>
							<DrawerDescription className="py-2">{data?.category}</DrawerDescription>
						</DrawerHeader>
						<div className="py-2">
							<Label className="mb-2">Title</Label>
							<Input
								ref={titleRef}
								defaultValue={data?.title}
								readOnly={isReadOnly}
								className={cn({ 'border-transparent': isReadOnly })}
							/>
						</div>
						<Separator />
						<div className="py-2">
							<Label>Content</Label>
							<Textarea
								ref={contentRef}
								defaultValue={data?.content}
								className={cn('h-96 w-96', { 'border-transparent': isReadOnly })}
								readOnly={isReadOnly}
							/>
						</div>
					</div>
					<DrawerFooter>
						<div className="flex justify-center w-full space-x-3">
							<DrawerClose asChild>
								<Button
									variant="outline"
									onClick={() => {
										setIsReadOnly(true)
									}}
								>
									Cancel
								</Button>
							</DrawerClose>
							<Button
								variant={'ghost'}
								className="bg-sky-200 hover:bg-slate-500 transition-all"
								onClick={() => {
									setIsReadOnly(false)
								}}
							>
								Modify
							</Button>
							<NoticeDeleteButton
								onDelete={() => {
									onDelete(data?.id)
								}}
							/>
							<Button
								variant={'outline'}
								className={cn('bg-black text-white hover:bg-slate-200 transition-all', {
									hidden: isReadOnly
								})}
								onClick={() => {
									onSave(data?.id)
								}}
							>
								Save
							</Button>
						</div>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	)
}

export default NoticeInfo
