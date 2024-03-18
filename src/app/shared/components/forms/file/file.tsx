import { useFormContext } from 'react-hook-form'

import { FileListPreview } from './components'

import { useFile } from './hooks'

import { IFile } from './file.model'
import { StyledFileInput, StyledFileListPreviewContainer } from './file.styles'
import { StyledFile } from './file.styles'

export const File = ({
  name = 'file',
  label = 'File',
  isVisible = true,
  disabled = false,
  multiple = false,
  styleType = 'small',
  accept,
  ...rest
}: IFile) => {
  const {
    register,
    formState: { errors },
    setValue,
    trigger
  } = useFormContext()

  const { onChange, ...restRegister } = register(name)

  const {
    dragging,
    newInput,
    files,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleFileRemove,
    handleFileAdd
  } = useFile({ name, multiple, onChange, setValue, trigger })

  const fileInputProps = {
    onChange: handleFileAdd,
    multiple,
    disabled,
    type: 'file',
    className: 'sr-only',
    accept,
    ...rest
  }

  return (
    <>
      {isVisible && (
        <div className='grid'>
          <StyledFile
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className='border'
          >
            <div className='grid'>
              <input
                type='hidden'
                {...restRegister}
              />
              <StyledFileInput styleType={styleType}>
                <label>
                  <span>{`${dragging ? 'Drop Here' : `${label}`}`}</span>
                  {newInput && <input {...fileInputProps} />}
                  {!newInput && <input {...fileInputProps} />}
                </label>
                {files.length > 0 && (
                  <div className='w-full border-x border-b animate-appearance-in'>
                    <h6 className='text-end'>Files: {files.length}</h6>
                    <StyledFileListPreviewContainer>
                      {files.map((file, index) => (
                        <FileListPreview
                          key={index}
                          file={file}
                          index={index}
                          handleFileRemove={() => {
                            handleFileRemove(index)
                            trigger(name)
                          }}
                        />
                      ))}
                    </StyledFileListPreviewContainer>
                  </div>
                )}
              </StyledFileInput>
            </div>
          </StyledFile>
          {errors.error?.message && (
            <small className='text-danger-500'>{`${errors?.error.message}`}</small>
          )}
        </div>
      )}
    </>
  )
}
