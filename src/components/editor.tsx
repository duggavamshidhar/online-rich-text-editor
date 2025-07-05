'use client'

import { Image } from '@tiptap/extension-image'
import { Table } from '@tiptap/extension-table'
import { TableCell } from '@tiptap/extension-table-cell'
import { TableHeader } from '@tiptap/extension-table-header'
import { TableRow } from '@tiptap/extension-table-row'
import { TaskItem } from '@tiptap/extension-task-item'
import { TaskList } from '@tiptap/extension-task-list'
import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { ImageResize } from 'tiptap-extension-resize-image'

export default function Editor() {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: 'padding-left: 56px; padding-right: 56px;',
        class:
          'flex min-h-[1054px] w-[816px] cursor-text flex-col border border-[#C7C7C7] bg-white py-10 pr-14 focus:outline-none'
      }
    },
    extensions: [
      StarterKit,
      TaskList,
      TaskItem.configure({
        nested: true
      }),
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      TableCell,
      Image,
      ImageResize
    ],
    immediatelyRender: false,
    content: ''
  })
  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4">
      <div className="mx-auto flex w-[816px] min-w-max justify-center py-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
