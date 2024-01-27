import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { CircleIcon, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const RecruitList = () => {
	return (
		<>
			<div className="col-span-1 grid items-start gap-6 lg:col-span-1">
				<Link
					href="#"
					className="rounded-lg shadow-sm hover:shadow-lg transition-all hover:shadow-slate-400"
				>
					<Card>
						<CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
							<div className="space-y-1">
								<CardTitle>아주 기쁜 서비스</CardTitle>
								<CardDescription>아주 실시간으로 들어가는 문제입니다.</CardDescription>
							</div>
							<div className="flex items-center justify-between rounded-md bg-secondary text-secondary-foreground">
								<Button variant="secondary" className="px-3 shadow-none">
									Progress
								</Button>
								<CircleIcon className="w-4 h-4 bg-green-500 rounded-lg text-transparent mr-2" />
							</div>
						</CardHeader>
						<CardContent>
							<div className="flex space-x-4 text-sm text-muted-foreground">
								<div className="flex items-center">
									<CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
									TypeScript
								</div>
								<div className="flex items-center">
									<StarIcon className="mr-1 h-3 w-3" />
									20k
								</div>
								<div>2024.01.28 ~ 2024.01.29</div>
							</div>
						</CardContent>
					</Card>
				</Link>
			</div>
		</>
	)
}

export default RecruitList
