"use client";
import * as React from "react";
import Head from "next/head";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { withAuth } from "@/middleware/withAuth";

function Dashboard() {
  const [userName, setUserName] = useState("ABC");
  const [userEmail, setUserEmail] = useState("abc@gmail.com");
  const [userImage, setUserImage] = useState(null);
  const { data: session } = useSession()

  useEffect(() => {
    if (session) {
      setUserName(session?.user.name)
      setUserEmail(session?.user.email)
      setUserImage(session?.user.image)
    }
  }, [session])


  const handleSignOut = () => {
    console.log("Signed out!!")
    signOut({callbackUrl:"http://localhost:3000"})
  }
  return (
    <>
      <Head>
        <title>Callback Coding</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-dark-secondary flex flex-col justify-center items-center h-screen text-3xl text-white">
        <p className="text-yellow-500 p-4 m-4">
          Dashboard Page
        </p>
        <table>
          <tbody>
            <tr>
              <th>Name: &nbsp;</th>
              <td>{userName}</td>
            </tr>
            <tr>
              <th>Email: &nbsp;</th>
              <td>{userEmail}</td>
            </tr>
            <tr>
              <th>Image: &nbsp;</th>
              <td>
                <img src={userImage} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
        <button className="bg-[#215a70] p-3 rounded-md text-2xl" onClick={handleSignOut}>Sign out</button>
      </div>
    </>
  );
}

export default withAuth(Dashboard)
