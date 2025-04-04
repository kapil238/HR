"use client";
import LoginForm from "@/components/Form";
import Link from "next/link";
import Background from "@/components/Background";
import CardWrapper from "@/components/CardWrapper";  

export default function SignupPage() {
  return (
    <Background>
      <CardWrapper>
        <LoginForm
          loginTitle="Signup"
          loginButtonText="Sign up"
          emailLinkButtonText="Login with Email Link"
        />

        <p className="text-sm text-white/90 pt-4 pb-2" 
           style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
          Already have an account?{" "}
          <Link
            href="/Login"
            className="font-semibold hover:underline hover:text-white transition-colors"
            style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            Login
          </Link>
        </p>
      </CardWrapper>
    </Background>
  );
}
