import { DashboardNav } from "@/components/dashboard-nav"
import { UserNav } from "@/components/user-nav"
import type React from "react" // Added import for React

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="border-b bg-white dark:bg-gray-800 shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center space-x-6">
            <UserNav />
          </div>
        </div>
      </header>

      <main className="flex flex-col lg:flex-row bg-gray-50 dark:bg-gray-800 py-6 px-4 lg:px-8">
        <aside className="lg:w-1/4 w-full lg:min-w-[250px] bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md mb-6 lg:mb-0">
          <DashboardNav />
        </aside>

        <section className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md overflow-auto">
          {children}
        </section>
      </main>
    </div>
  )
}
