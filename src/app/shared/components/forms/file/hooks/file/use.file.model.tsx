import {
  ChangeHandler,
  FieldValues,
  UseFormSetValue,
  UseFormTrigger
} from 'react-hook-form'

import { IFile } from '../../file.model'

export interface IUseFile {
  name: IFile['name']
  multiple: IFile['multiple']
  onChange: ChangeHandler
  setValue: UseFormSetValue<FieldValues>
  trigger: UseFormTrigger<FieldValues>
}
