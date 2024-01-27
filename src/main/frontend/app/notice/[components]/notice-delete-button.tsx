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
						Delete
					</Button>
				</AlertDialogTrigger>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Alert</AlertDialogTitle>
						<AlertDialogDescription>삭제하시겠습니까?</AlertDialogDescription>
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
