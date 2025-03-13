"use client"
import React from "react";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/actions/sendEmail";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const ContactMe = () => {
    const [isSending, setIsSending] = React.useState(false);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        if (isSending) return;

        setIsSending(true);
        e.preventDefault();
        const formElement = e.currentTarget;
        const formData = new FormData(formElement);

        const data = {
            firstname: formData.get("firstname") as string,
            lastname: formData.get("lastname") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        }
        console.log(data);

        //email it to the owner email
        sendEmail(data)
            .then(() => {
                toast("✅ Message sent successfully", {
                    description: "I will get back to you soon.",
                    dismissible: true,
                    duration: 4000,
                    style: {
                        backgroundColor: "#222", // Darker background
                        color: "#0FDF74", // Green text for success
                        border: "1px solid #0FDF74",
                    },
                });
            })
            .catch((err) => {
                toast("❌ Error sending message", {
                    description: "Please try again later.",
                    dismissible: true,
                    duration: 4000,
                    style: {
                        backgroundColor: "#2A1E1E", // Dark red background
                        color: "#FF6B6B", // Red text
                        border: "1px solid #FF6B6B",
                    },
                });
            })
            .finally(() => {
                setIsSending(false);
                formElement.reset();
            })
    };

    return (
        <section className="py-16 px-6 bg-transparent text-white max-w-7xl mx-auto">
            <div className="w-full max-w-2xl mx-auto text-white">
                <h2 className="text-4xl font-bold text-center mb-6">Contact Me</h2>
                <p className="text-center text-lg dark:text-neutral-300">
                    Whether you are a recruiter looking to hire or a developer looking for collaboration, I'm always happy to have the conversation.
                </p>
                <form className="mt-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <LabelInputContainer>
                            <Label htmlFor="firstname" className="text-white">First Name</Label>
                            <Input id="firstname" name="firstname" placeholder="Tyler" type="text" className="bg-[#161320ec] text-input" />
                        </LabelInputContainer>
                        <LabelInputContainer>
                            <Label htmlFor="lastname" className="text-white">Last Name</Label>
                            <Input id="lastname" name="lastname" placeholder="Durden" type="text" className="bg-[#161320ec] text-input" />
                        </LabelInputContainer>
                    </div>
                    <LabelInputContainer className="mt-4">
                        <Label htmlFor="email" className="text-white">Email</Label>
                        <Input id="email" name="email" placeholder="projectmayhem@fc.com" type="email" className="bg-[#161320ec] text-input" />
                    </LabelInputContainer>
                    <LabelInputContainer className="mt-4">
                        <Label htmlFor="message" className="text-white">Message</Label>
                        <textarea
                            id="message"
                            name="message"
                            className="h-32 w-full border-none bg-[#161320ec] text-input text-white rounded-md px-3 py-2 text-sm"
                            placeholder="Hi, I like your profile and would like to connect with you."
                        />
                    </LabelInputContainer>
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 w-full text-white rounded-md h-10 font-medium mt-6 flex items-center justify-center"
                        type="submit"
                    >
                        {isSending ? <Loader2 className="animate-spin w-5 h-5" /> : <div>Send Message &rarr;</div>}
                        <BottomGradient />
                    </button>
                </form>
            </div>
        </section>
    );
};

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

export default ContactMe;