"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Student = {
  id: string
  rollNo: string
  name: string
  fatherName: string
  dob: string
  gender: string
  category: string
  pwd: string
  photo: string
  signature: string
  idProof: string
}

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "rollNo",
    header: "Roll No",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "fatherName",
    header: "Father's Name",
  },
  {
    accessorKey: "dob",
    header: "DOB",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "pwd",
    header: "PwD",
  },
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Image
            src={row.getValue("photo") || "/placeholder.svg"}
            alt={`Photo of ${row.getValue("name")}`}
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "signature",
    header: "Candidate's Signature",
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <Image
            src={row.getValue("signature") || "/placeholder.svg"}
            alt={`Signature of ${row.getValue("name")}`}
            width={60}
            height={30}
            className="rounded"
          />
        </div>
      )
    },
  },
  {
    accessorKey: "idProof",
    header: "ID Proof",
    cell: ({ row }) => {
      return (
        <Button variant="link" className="p-0 h-auto">
          View ID
        </Button>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const student = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(student.id)}>
              Copy student ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit details</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">Delete student</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

