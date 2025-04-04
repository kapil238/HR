"use client";
import Link from "next/link";
import InputField from "./InputField";
import Button from "./Button";
import Logo from "./Logo";

export default function Form({ loginTitle, loginButtonText, emailLinkButtonText }) {
    return (
        <div className="w-full max-w-md flex flex-col items-center">
            <Logo />

            <p className="text-white font-roboto font-medium text-xl sm:text-2xl tracking-wide mb-6 text-center"
                style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                Welcome to HRMS
            </p>


            <h2 className="text-white font-roboto font-semibold text-xl sm:text-2xl mb-6 text-center" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                {loginTitle}
            </h2>

            <form className="w-full space-y-6">
                <InputField type="email" placeholder="Email" id="email" />
                <InputField type="password" placeholder="Password" id="password" />

                <Button type="submit" text={loginButtonText} />
            </form>

            <div className="w-full flex justify-end mt-4">
                <p className="text-sm text-white/90 hover:text-white transition-colors" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    <Link href="/ForgotPassword" className="font-medium hover:underline">
                        Forgot Password?
                    </Link>
                </p>
            </div>

            <div className="relative w-full my-4">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/30"></div>
                </div>
                <div className="relative flex justify-center">
                    <span className="px-3 bg-transparent text-white/90 text-lg sm:text-xl font-semibold"
                        style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                        or
                    </span>
                </div>
            </div>


            <Link
                href="/ForgotPassword"
                className="w-full py-3 px-4 text-white/90 font-medium rounded-md hover:bg-white/10 transition-colors border border-white/20 text-center"
                style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
                {emailLinkButtonText}
            </Link>
        </div>
    );
}
