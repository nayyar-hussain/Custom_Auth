import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Login } from './server.login'

function page() {
  return (
       <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <form className="space-y-7" action={Login}>
      
      <div>
      <Label>Email</Label>
      <Input name="email" type="email" placeholder="Enter your email"/>
      </div>
      <div>
      <Label>Password</Label>
      <Input name="password" type="text" placeholder="Enter your password"/>
      </div>
      <div>
     <Button className="cursor-pointer">Register</Button>
      </div>
     </form>
    </div>

  )
}

export default page