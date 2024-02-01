'use client'

import NoticeTable from './_components/notice-table'
import { Separator } from '@/components/ui/separator'

const NoticePage = () => {
	return (
		<div className="grid grid-cols-1 items-center px-96 space-y-2">
			<div className="pt-8">
				<h4 className="text-3xl font-bold rounded-lg uppercase ">Notice</h4>
				<p className="text-sm text-muted-foreground">럭키파인드 공지사항</p>
			</div>
			<Separator className="my-4" />
			<NoticeTable />
		</div>
	)
}

export default NoticePage
