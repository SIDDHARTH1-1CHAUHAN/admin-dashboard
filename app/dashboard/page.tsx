"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { DataTable } from "@/components/data-table"
import { columns } from "@/components/columns"
import { Button } from "@/components/ui/button"
import { AddStudentDialog } from "@/components/add-student-dialog"

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
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Students List</h2>
        <Button onClick={() => setIsDialogOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Student
        </Button>
      </div>
      <div className="rounded-md border">
        <DataTable columns={columns} data={data} onDelete={deleteStudent} />
      </div>
      <AddStudentDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} onSubmit={addStudent} />
    </div>
  )
}

