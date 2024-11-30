"use client";

import { openSheetAtom } from "@/atoms/open-sheet-atom";
import { AlignJustify } from "lucide-react";

export default function BurgerIcon() {
  const openSheet = () => {
    openSheetAtom.update(true);
  };

  return (
    <AlignJustify color="#fff" className="cursor-pointer" onClick={openSheet} />
  );
}
