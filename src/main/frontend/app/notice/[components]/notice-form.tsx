import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import * as z from 'zod'

const formSchema = z.object({
	title: z.string().min(10),
	contents: z.string(),
	category: z.string(),
	username: z.string()
})

const NoticeForm = ({ onSubmit }: { onSubmit: Function }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			contents: '',
			category: '',
			username: ''
		}
	})

	return (
		<Form {...form}>
			<FormField
				name="title"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Title</FormLabel>
						<FormControl>
							<Input {...field} />
						</FormControl>
					</FormItem>
				)}
			/>
			<FormField
				name="contents"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Content</FormLabel>
						<FormControl>
							<Textarea placeholder="Please write contents" {...field} />
						</FormControl>
						<FormDescription>This is your public display name.</FormDescription>
					</FormItem>
				)}
			/>
			<FormField
				name="category"
				control={form.control}
				render={({ field }) => (
					<FormItem>
						<FormLabel>Category</FormLabel>
						<FormControl>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<SelectTrigger className="w-[280px]">
									<SelectValue placeholder="Choose Category" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Category</SelectLabel>
										<SelectItem value="NOTICE">Notice</SelectItem>
										<SelectItem value="INFO">Info</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</FormControl>
					</FormItem>
				)}
			/>
			<Button
				onClick={() => {
					onSubmit({
						title: form.watch('title') as string,
						contents: form.watch('contents') as string,
						category: form.watch('category') as string,
						username: form.watch('username') as string
					})
				}}
			>
				Submit
			</Button>
		</Form>
	)
}

export default NoticeForm
