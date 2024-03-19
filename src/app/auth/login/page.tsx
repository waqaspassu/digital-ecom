import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import signupImage from "./../../../../assets/signup.jpg";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex h-screen gap-4 items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h1 className="font-medium text-2xl text-center">Login</h1>
        <p className="text-muted-foreground text-xs mt-3 text-center">Lets Sign in here!</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <Input id="email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input id="password" type="password" />
          </div>
          <div className="flex justify-center w-full">
            <Button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">Sign In</Button>
          </div>
          <p>If you are not  registered please < Link className="text-blue-500" href="/auth/signup">Signup</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
