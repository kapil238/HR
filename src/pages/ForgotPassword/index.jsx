"use client";
import ForgotPassword from "@/components/ForgotPasswod";
import Background from "@/components/Background";
import CardWrapper from "@/components/CardWrapper";  

export default function ForgotPasswordPage() {
    return (
        <Background>
            <CardWrapper>
                <ForgotPassword loginButtonText="Submit" />
            </CardWrapper>
        </Background>
    );
}
