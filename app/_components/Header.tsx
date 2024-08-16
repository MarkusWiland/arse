import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="sticky top-0 backdrop-blur-md z-10">
      <div className="flex justify-center items-center py-3 bg-black gap-4 text-white/70 ">
        <p>Lyssna på det senaste podd avsnittet</p>
        <div className="btn bg-white text-black px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight cursor-pointer hover:bg-white/80">
          <p>Lyssna här</p>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-3xl">
              Arsenal <span className="font-light">Göteborg</span>
            </h1>
            <span className="md:hidden">iCon menu</span>
            <nav className="hidden md:flex gap-6 items-center">
              <Link
                href="/"
                className="text-opacity-60 text-black hover:text-opacity-100"
              >
                Medlemskap
              </Link>
              <Link
                href="/"
                className="text-opacity-60 text-black hover:text-opacity-100"
              >
                Biljetter
              </Link>
              <Link
                href="/"
                className="text-opacity-60 text-black hover:text-opacity-100"
              >
                Shopen
              </Link>
              <Link
                href="/"
                className="text-opacity-60 text-black hover:text-opacity-100"
              >
                Om oss
              </Link>
              <Link
                href="/"
                className="text-opacity-60 text-black hover:text-opacity-100"
              >
                Kontakt
              </Link>
              {user && (
                <Link
                  href="/"
                  className="text-opacity-60 text-black hover:text-opacity-100"
                >
                  Add piost
                </Link>
              )}

              <SignedOut>
                <SignInButton>
                    <button className="btn btn-primary">Logga in</button>
                    </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
