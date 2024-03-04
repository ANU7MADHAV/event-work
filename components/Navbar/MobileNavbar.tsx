"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import Routes from "./Routes";
import SocialNetworks from "./SocialNetworks";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger className="bg-[#164e63]" asChild>
        <Button variant="outline" className="text-white">
          Open
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#164e63]">
        <SheetHeader className="h-screen pb-4">
          <div className="flex h-full  w-full flex-col justify-around overflow-y-scroll  px-8 text-center">
            <section className="w-full">
              <Link href="/" className="flex justify-center">
                <Image src={logo} alt="logo" width={150} />
              </Link>
              <p className="text-[#A2783A]">events and weddings</p>
            </section>
            <section>
              <Routes />
            </section>
            <section>
              <Link href="tel:+917907613290">
                <p>+91 7907613290</p>
              </Link>
              <Link href="mailto:anumadhavan7@gmail.com">
                <p>anumadhavan7@gmail.com</p>
              </Link>
            </section>
            <section className="flex w-full justify-center ">
              <SocialNetworks />
            </section>
          </div>
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
