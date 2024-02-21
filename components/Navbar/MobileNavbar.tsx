"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "postcss";
import Navbar from "./Navbar";
import { Button } from "../ui/button";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent" asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="h-screen">
          <Navbar />
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
