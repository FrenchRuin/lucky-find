'use client'

import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

const signInFormSchema = z.object({
	username: z.string().min(10),
	password: z.string()
})

const signUpFormSchema = z.object({
	username: z.string().min(10),
	password: z.string(),
	email: z.string()
})

const AuthPage = () => {
	const router = useRouter()

	const signInForm = useForm<z.infer<typeof signInFormSchema>>({
		resolver: zodResolver(signInFormSchema),
		defaultValues: {
			username: '',
			password: ''
		}
	})

	const signUpForm = useForm<z.infer<typeof signUpFormSchema>>({
		resolver: zodResolver(signUpFormSchema),
		defaultValues: {
			username: '',
			password: '',
			email: ''
		}
	})

	const onSignIn = async () => {
		const username = signInForm.watch('username') as string
		const password = signInForm.watch('password') as string
		await fetch('http://localhost:8080/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password
			})
		}).then((response) => {
			if (response.status === 200) {
				toast.info('환영합니다 😀')
				router.push('/')
			} else {
				toast.error('아이디가 존재하지 않거나 비밀번호가 일치하지 않습니다.')
			}
		})
	}

	const onSignUp = async () => {
		const username = signUpForm.watch('username') as string
		const password = signUpForm.watch('password') as string
		const email = signUpForm.watch('email') as string
		await fetch('http://localhost:8080/api/v1/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username,
				password,
				email
			})
		}).then((response) => {
			if (response.status === 200) {
				toast.info('회원가입이 완료되었습니다.')
			} else {
				toast.error('이미 존재하는 유저입니다.')
			}
		})
	}

	return (
		<div className="grid grid-cols-1 place-items-center mt-20">
			<div className="flex justify-center">
				<div className="text-3xl  py-8  rounded-lg uppercase font-bold">
					Welcome to Lucky Find 😀
				</div>
			</div>
			<div className="flex justify-center">
				<div className="text-lg">럭키파인드는 개인프로젝트로 진행되는 서비스에요</div>
			</div>
			<div className="flex justify-center mb-10">
				<div className="text-lg">세상에서 제일 간편하게 팀 사이드 프로젝트를 진행할 수 있어요.</div>
			</div>
			<div className="flex flex-1 justify-start">
				<Tabs defaultValue="signin" className="w-[400px]">
					<TabsList className="grid w-full grid-cols-2 bg-gray-300">
						<TabsTrigger
							value="signin"
							onClick={() => {
								signUpForm.reset()
							}}
						>
							<div className="text-black">로그인</div>
						</TabsTrigger>
						<TabsTrigger
							value="signup"
							onClick={() => {
								signInForm.reset()
							}}
						>
							<div className="text-black">회원가입</div>
						</TabsTrigger>
					</TabsList>
					<TabsContent value="signin">
						<Card>
							<CardHeader>
								<CardTitle>Sign In</CardTitle>
								<CardDescription>이름과 비밀번호를 입력해주세요</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<Separator></Separator>
								<div className="grid grid-cols-2 gap-3">
									<Button variant={'outline'}> Git Hub</Button>
									<Button variant={'outline'}>Google</Button>
								</div>
								<Separator></Separator>
								<Form {...signInForm}>
									<FormField
										name="username"
										control={signInForm.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="password"
										control={signInForm.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
								</Form>
							</CardContent>
							<CardFooter>
								<Button
									onClick={onSignIn}
									className="w-full text-black bg-gray-200 hover:bg-black hover:text-white transition-all"
								>
									Login
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value="signup">
						<Card>
							<CardHeader>
								<CardTitle>Sign Up</CardTitle>
								<CardDescription>이름과 비밀번호를 입력해주세요</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<Form {...signUpForm}>
									<FormField
										name="username"
										control={signUpForm.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Username</FormLabel>
												<FormControl>
													<Input placeholder="luckyfind" {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="password"
										control={signUpForm.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Password</FormLabel>
												<FormControl>
													<Input placeholder="1111" {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
									<FormField
										name="email"
										control={signUpForm.control}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Email</FormLabel>
												<FormControl>
													<Input placeholder="luckyfind@gmail.com" {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
								</Form>
							</CardContent>
							<CardFooter>
								<Button
									onClick={onSignUp}
									className="w-full text-black bg-gray-200 hover:bg-black hover:text-white transition-all"
								>
									Submit
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	)
}

export default AuthPage
