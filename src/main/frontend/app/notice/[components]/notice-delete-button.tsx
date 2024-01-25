import React, { useState } from 'react'

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { boolean } from 'zod'
import { Button } from '@/components/ui/button'

interface NoticeDeleteButtonProps {
	onDelete: () => void
}

const NoticeDeleteButton = ({ onDelete }: NoticeDeleteButtonProps) => {
	return (
		<>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<Button variant={'ghost'} className="h-auto bg-rose-400 text-black">
						Del
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Alert</AlertDialogTitle>
						<AlertDialogDescription>삭제하시실건가요??</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancel</AlertDialogCancel>
						<AlertDialogAction
							onClick={() => {
								onDelete()
							}}
						>
							Confirm
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</>
	)
}

export default NoticeDeleteButton
