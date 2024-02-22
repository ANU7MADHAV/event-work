"use client";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Navbar from "./Navbar";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent" asChild>
        <Button variant="outline" className="text-white">
          Open
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="h-screen py-2">
          <Navbar />
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
