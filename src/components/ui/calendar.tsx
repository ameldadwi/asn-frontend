"use client"

import * as React from "react"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"
import { cn } from "./utils"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-xl p-6">
        <DayPicker
          showOutsideDays={showOutsideDays}
          className={cn("w-full", className)}
          classNames={{
            months: "grid grid-cols-1 w-full",
            month: "space-y-4",
            caption: "flex justify-between items-center",
            caption_label: "text-3xl font-bold",
            nav: "flex items-center gap-4",
            nav_button: "text-2xl text-blue-600 hover:text-blue-800",
            table: "w-full border-collapse",
            head_row: "grid grid-cols-7",
            head_cell:
              "text-center text-lg font-semibold text-gray-700 py-2",
            row: "grid grid-cols-7",
            cell:
              "w-full aspect-square border border-gray-200 flex items-center justify-center",
            day: "text-xl w-full h-full flex items-center justify-center hover:bg-blue-100 rounded-lg",
            day_selected:
              "bg-blue-500 text-white font-bold rounded-lg",
            day_today:
              "border-2 border-blue-500 font-bold rounded-lg",
            day_outside: "text-gray-400",
            ...classNames,
          }}
          {...props}
        />
      </div>
    </div>
  )
}

export { Calendar }
