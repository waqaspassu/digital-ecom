import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import signupImage from "./../../../../assets/signup.jpg";

const SignUp = () => {
  return (
    <div className="flex h-screen gap-4 items-center">
      <div className="flex-1">
        <Image src={signupImage} alt="Landscape picture" />
      </div>
      <div className="flex-1 ">
        <h1 className="font-medium text-4xl">Register</h1>
        <p className="text-muted-foreground text-xs mt-3">
          Lets Sign Up fist for enter into FlexUI Website. Uh She Up!
        </p>
        <div className="flex gap-4 mt-5">
          <div className="">
            <label htmlFor="firstname" className="text-sm font-medium">
              First Name
            </label>
            <Input id="firstname" />
          </div>
          <div className="">
            <label htmlFor="lastname" className="text-sm font-medium">
              Last Name
            </label>
            <Input id="lastname" />
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Your Email
            </label>
            <Input id="email" />
          </div>
          <div>
            <label className="text-sm font-medium">Your country</label>
            <Select />
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input id="password" />
          </div>
          <div>
            <label htmlFor="confirmpassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <Input id="confirmpassword" />
          </div>
        </div>
        <div className="mt-5">
          <label htmlFor="about" className="text-sm font-medium">
            Tell us about yourself
          </label>
          <Textarea id="about" />
        </div>
        <div className="mt-5 flex  flex-row items-center">
          <Checkbox id="terms" />
          <label htmlFor="terms" className="text-sm">
            By creating an account, you agree to our terms & Conditions
          </label>
        </div>

        <Button className="mt-5">Sign Up</Button>
      </div>
    </div>
  );
};

export default SignUp;
