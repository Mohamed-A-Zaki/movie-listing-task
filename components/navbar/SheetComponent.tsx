"use client";

import { openSheetAtom } from "@/atoms/open-sheet-atom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

export default function SheetComponent() {
  /***
   * Get the value of the openSheetAtom
   */
  const isOpened = openSheetAtom.useValue();

  /***
   * toggle sheet atom
   */
  const onOpenChang = () => {
    openSheetAtom.update(!isOpened);
  };

  return (
    <Sheet open={isOpened} onOpenChange={onOpenChang}>
      <SheetContent>
        <SheetTitle></SheetTitle>
        <SheetHeader>
          <SheetDescription className="flex flex-col gap-5 mt-10">
            <SearchBar />
            <FilterBar />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
