"use client";

import Image from "next/image";
import { Input } from "./ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMemo } from "react";

const EventOptions = ["All Events", "Upcoming Events", "Past Events"];
const SeriesOptions = [
  "All Series",
  "AI Impact Series",
  "AI Master & Guest Speaker Series",
  "Change Maker Tour and Learn",
];

export default function EventFilter({
  filterType,
  onChange,
}: {
  filterType: "events" | "series";
  onChange: (filter: { search: string; category: string }) => void;
}) {
  const [seachStr, setSeachStr] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const options = useMemo(() => {
    if (filterType === "events") {
      setSelectValue("All Events");
      return EventOptions;
    } else {
      setSelectValue("All Series");
      return SeriesOptions;
    }
  }, [filterType]);

  return (
    <div className="flex gap-3 self-end text-base leading-6 max-md:flex-wrap max-md:mt-10">
      <div className="flex items-center rounded-3xl border border-[#00335F] overflow-hidden">
        <Search size={20} className="ml-3" color="#00335F" />
        <Input
          placeholder="Search"
          className="outline-none !ring-0 border-none w-56 text-[#00335F]"
          value={seachStr}
          onChange={(e) => setSeachStr(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChange({ search: seachStr, category: selectValue });
            }
          }}
        />
      </div>
      <Select value={selectValue} onValueChange={(val) => {
        setSelectValue(val)
        onChange({ search: seachStr, category: val });
      }}>
        <SelectTrigger className="w-56 rounded-3xl border-[#00335F] text-[#00335F] !ring-0 !ring-offset-0">
          <SelectValue placeholder="filter" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
