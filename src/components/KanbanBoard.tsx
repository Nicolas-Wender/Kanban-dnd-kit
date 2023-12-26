'use client'

import { Column } from '@/types/Column'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import ColumnContainer from './ColumnContainer'

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([])
  function createNewColumn() {
    const columnToAdd: Column = {
      id: Math.floor(Math.random() * 10001),
      title: `Column ${columns.length + 1}`
    }

    setColumns([...columns, columnToAdd])
  }

  function deleteColumn(id: string | number) {
    const filteredColumns = columns.filter(column => column.id !== id)
    setColumns(filteredColumns)
  }

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto flex gap-4">
        <div className="flex gap-4">
          {columns.map(column => (
            <ColumnContainer
              key={column.id}
              id={column.id}
              title={column.title}
              deleteColumn={deleteColumn}
            />
          ))}
        </div>
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
