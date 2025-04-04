"use client";
import Link from "next/link";
import InputField from "./InputField";
import Button from "./Button";
import Logo from "./Logo";

export default function ForgotPassword({ loginButtonText }) {
    return (
        <div className="w-full max-w-md flex flex-col items-center">
            <Logo />

            <p className="text-white font-roboto font-medium text-2xl sm:text-3xl tracking-wide mb-6 text-center" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Login With Email Link
            </p>

            <h3 className="text-white font-roboto font-semibold text-xl sm:text-2xl mb-6 text-center" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Forgot Password
            </h3>

            <form className="w-full space-y-6">
                <InputField type="email" placeholder="Email" id="email" />
                <Button type="submit" text={loginButtonText} />
            </form>

            <div className="w-full flex justify-center mt-4">
                <Link href="/Login" className="text-sm text-white font-medium hover:underline" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    Back to Login
                </Link>
            </div>
        </div>
    );
}
