'use client'

import { PlusCircle } from 'lucide-react'
import { useState } from 'react'

export default function KanbanBoard() {
  const [columns, setColumns] = useState([])
  function createNewColumn() {
    console.log('create column')
  }

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto">
        <button
          onClick={() => createNewColumn()}
          className=" h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg border-2 p-4 ring-rose-500 hover:ring-2 bg-mainBackgroundColor border-columnBackgroundColor flex gap-2"
        >
          <PlusCircle />
          Add Column
        </button>
      </div>
    </div>
  )
}
