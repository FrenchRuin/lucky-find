'use client'

import NavBar from '@/components/NavBar'
import NoticeTable from './_components/notice-table'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTrigger,
	DialogHeader,
	DialogTitle
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const NoticePage = () => {
	return (
		<div className="grid grid-cols-1 items-center px-96 space-y-2">
			<div className="pt-8">
				<h4 className="text-3xl font-bold rounded-lg uppercase ">Team Recuirt Service</h4>
				<p className="text-sm text-muted-foreground">다양한 사이드 프로젝트를 지원합니다. </p>
			</div>
			<NoticeTable />
		</div>
	)
}

export default NoticePage
