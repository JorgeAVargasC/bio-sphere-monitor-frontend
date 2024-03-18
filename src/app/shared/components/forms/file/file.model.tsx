type FileStyle = 'small' | 'medium' | 'large'
export interface IFile {
  name: string
  label: string
  isVisible?: boolean
  disabled?: boolean
  styleType?: FileStyle
  multiple?: boolean
  accept?: string
}

export type TypeFileValues = string[]
