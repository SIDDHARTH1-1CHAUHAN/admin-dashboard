"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"
import { Button } from "@/components/ui/button"

const initialData = [
  {
    id: "1",
    rollNo: "21001",
    name: "KAMAL SINGH",
    fatherName: "KAMAL KUMAR",
    dob: "10/01/2005",
    gender: "Male",
    category: "OBC",
    pwd: "No",
    photo: "/placeholder.svg?height=100&width=100",
    signature: "/placeholder.svg?height=30&width=60",
    idProof: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    rollNo: "21002",
    name: "SANDEEP KUMAR",
    fatherName: "SANDEEP",
    dob: "21/11/2006",
    gender: "Male",
    category: "EWS",
    pwd: "Yes",
    photo: "/placeholder.svg?height=100&width=100",
    signature: "/placeholder.svg?height=30&width=60",
    idProof: "/placeholder.svg?height=200&width=300",
  },
  // Add more sample data to demonstrate scrolling
  ...[...Array(20)].map((_, index) => ({
    id: `${index + 3}`,
    rollNo: `210${String(index + 3).padStart(2, "0")}`,
    name: `Student ${index + 3}`,
    fatherName: `Father ${index + 3}`,
    dob: "01/01/2000",
    gender: index % 2 === 0 ? "Male" : "Female",
    category: ["General", "OBC", "SC", "ST", "EWS"][index % 5],
    pwd: index % 7 === 0 ? "Yes" : "No",
    photo: "/placeholder.svg?height=100&width=100",
    signature: "/placeholder.svg?height=30&width=60",
    idProof: "/placeholder.svg?height=200&width=300",
  })),
]

export default function DashboardPage() {
  const [data, setData] = useState(initialData)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addStudent = (newStudent: any) => {
    setData([...data, { id: (data.length + 1).toString(), ...newStudent }])
  }

  const deleteStudent = (studentId: string) => {
    setData(data.filter((student) => student.id !== studentId))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-8 h-full">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-gray-900">Students List</h2>
          <Button onClick={() => setIsDialogOpen(true)} className="text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200 ease-in-out flex items-center px-4 py-2 rounded-md">
            Submit
          </Button>
        </div>
        <div className="rounded-lg border bg-white shadow-sm overflow-hidden h-full">
          <DataTable columns={columns} data={data} onDelete={deleteStudent} />
        </div>
      </div>
    </div>
  )
}
