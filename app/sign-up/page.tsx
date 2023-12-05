"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
 
const signUpSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(5).max(30),

})

export default function SignUp() {

    const signUpForm = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      })

    function onSubmit(data: z.infer<typeof signUpSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <div>
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                    This is a demo only website.
                </div>
            ),
        })
    }

    return (
        <div className="container py-3">
            <Form {...signUpForm}>
            <form onSubmit={signUpForm.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                control={signUpForm.control}
                name="username"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                        <Input placeholder="friendly_dog_owner" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                    control={signUpForm.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="Secure and memorable password goes here" {...field} type="password"/>
                        </FormControl>
                        <FormDescription>
                            Enter a secure password, minimum of 5 characters
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
            </Form>
        </div>
    )
}