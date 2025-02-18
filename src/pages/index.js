"use client";
import HomeDesign from "@/components/HomeDesign";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();
  const handleSignIn = () => {
    console.log("Sign In Clicked");
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
    // router.push("/dashboard");
  };
  return (
    <div className="bg-dark-secondary h-screen flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="font-light tracking-wider mb-2 text-4xl text-white">
              welcome to &nbsp;
            </h1>
            <h1
              className="font-chakra-petch mb-2 text-5xl text-[#f7f7f7] text-shadow-lg"
              style={{
                textShadow:
                  "0 0 5px #215a70, 0 0 15px #215a70, 0 0 20px #215a70, 0 0 40px #215a70, 0 0 60px #215a70, 0 0 10px #215a70, 0 0 98px #215a70",
              }}
            >
              Callback Coding
            </h1>
            <br />
            <button
              onClick={handleSignIn}
              className="bg-[#215a70] text-white py-2 px-4 rounded-lg text-lg"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
      <HomeDesign />
    </div>
  );
}

export default Home;
