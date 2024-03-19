import { useState } from 'react'

import { IUseFile } from './use.file.model'

export const useFile = ({
  name,
  multiple,
  onChange,
  setValue,
  trigger
}: IUseFile) => {
  const [dragging, setDragging] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [newInput, setNewInput] = useState(false) //* to solve the problem of the input type file, that does not allow to upload the same file twice

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setDragging(false)
    if (e.dataTransfer) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles([...files, ...newFiles])
      setValue(name, [...files, ...newFiles])
      trigger(name)
    }
  }

  const handleFileRemove = (indexToRemove: number) => {
    const newFiles = files.filter((_, index) => index !== indexToRemove)
    setFiles(newFiles)
    setValue(name, newFiles)
    setNewInput(!newInput)
    trigger(name)
  }

  const handleFileAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
    if (e.target && e.target.files) {
      const newFiles = Array.from(e.target.files)
      if (multiple) {
        setFiles([...files, ...newFiles])
        setValue(name, [...files, ...newFiles])
      } else {
        setFiles([...newFiles])
        setValue(name, [...newFiles])
      }
      trigger(name)
      setNewInput(!newInput)
    }
  }

  return {
    dragging,
    newInput,
    files,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileRemove,
    handleFileAdd
  }
}
