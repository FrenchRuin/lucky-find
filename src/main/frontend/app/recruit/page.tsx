import React from 'react'
import RecruitList from './_components/recruit-list'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus } from 'lucide-react'
const RecruitPage = () => {
	return (
		<>
			<div className="grid grid-cols-1 px-96 py-8 w-full">
				<div>
					<h4 className="text-3xl font-bold rounded-lg uppercase ">Team Recuirt Service</h4>
					<p className="text-sm text-muted-foreground">다양한 사이드 프로젝트를 지원합니다. </p>
				</div>
				<Separator className="my-4" />
				<Tabs defaultValue="recruit">
					<TabsList className="grid grid-cols-4">
						<TabsTrigger value="recruit" className="hover:bg-gray-200">
							<div className="text-black">모집 공고</div>
						</TabsTrigger>
						<TabsTrigger value="favorite" className="hover:bg-gray-200">
							<div className="text-black">나의 찜</div>
						</TabsTrigger>
						<TabsTrigger value="joining" className="hover:bg-gray-200">
							<div className="text-black">참여중인 프로젝트</div>
						</TabsTrigger>
						<TabsTrigger value="chat" className="hover:bg-gray-200">
							<div className="text-black">프로젝트 채팅방</div>
						</TabsTrigger>
					</TabsList>
					<TabsContent value="recruit">
						<Button
							variant={'ghost'}
							className="mb-2 bg-slate-100 hover:bg-slate-300 transition-all"
						>
							<Plus />
						</Button>
						<div className="hidden items-start justify-center gap-6 rounded-lg  md:grid  grid-cols-3">
							<RecruitList />
						</div>
					</TabsContent>
					<TabsContent value="favorite">
						<Button className="mb-2">나의 찜</Button>
						<div className="hidden items-start justify-center gap-6 rounded-lg  md:grid  grid-cols-3">
							<RecruitList />
						</div>
					</TabsContent>
					<TabsContent value="joining">
						<Button className="mb-2">참여중인 프로젝트</Button>
						<div className="hidden items-start justify-center gap-6 rounded-lg  md:grid  grid-cols-3">
							<RecruitList />
						</div>
					</TabsContent>
					<TabsContent value="chat">
						<Button className="mb-2">참여중인 프로젝트</Button>
						<div className="hidden items-start justify-center gap-6 rounded-lg  md:grid  grid-cols-3">
							<RecruitList />
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}

export default RecruitPage
