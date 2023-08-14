"use client"

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'
import LogoutButton from '../components/LogoutButton'
import SupabaseLogo from '../components/SupabaseLogo'
import NextJsLogo from '../components/NextJsLogo'
import React, { useState } from 'react'

export default async function Index() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm text-foreground">
          <div className="flex gap-8 justify-center items-center">
            <Link href="https://supabase.com/" target="_blank">
              <SupabaseLogo />
            </Link>
            <span className="border-l rotate-45 h-6" />
            <NextJsLogo />
          </div>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
                Hey, {user.email}!
                <LogoutButton />
              </div>
            ) : (
              <Link
                href="/login"
                className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center mt-20 w-full max-w-md p-6 bg-white border rounded shadow">
        <div className="display mb-4 border rounded p-4">{input}</div>
        <div className="buttons grid grid-cols-4 gap-2 w-full">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].map((num) => (
            <button key={num} onClick={() => setInput(prev => prev + num)} className="py-2 px-4 rounded-md border hover:bg-gray-200">
              {num}
            </button>
          ))}
          {['+', '-', '*', '/', '%', '√', '^'].map((op) => (
            <button key={op} onClick={() => setInput(prev => prev + " " + op + " ")} className="py-2 px-4 rounded-md border hover:bg-gray-200">
              {op}
            </button>
          ))}
          <button className="col-span-2 py-2 px-4 rounded-md border hover:bg-gray-200" onClick={() => console.log(history)}>
            History
          </button>
        </div>
      </div>
    </div>
  );
}