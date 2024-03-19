import { TbTrash } from 'react-icons/tb'
import { IFileListPreview } from './file.list-preview.model'
import {
  LeftSide,
  RightSide,
  StyledFileListPreview
} from './file.list-preview.styles'

export const FileListPreview = ({
  file,
  index,
  handleFileRemove
}: IFileListPreview) => {
  const fileSizes = {
    KB: `${(file.size / 1024).toFixed(1)} KB`,
    MB: `${(file.size / 1024000).toFixed(1)} MB`,
    GB: `${(file.size / 1024000000).toFixed(1)} GB`
  }

  const fileSize =
    file.size < 1024000
      ? fileSizes.KB
      : file.size < 1024000000
        ? fileSizes.MB
        : fileSizes.GB

  return (
    <StyledFileListPreview>
      <LeftSide>
        <small className='text-right min-w-[27px] border-r pr-2 select-none'>
          {index + 1}.
        </small>
        <p>{file.name}</p>
      </LeftSide>

      {/* File size in KB or MB */}
      <RightSide>
        <small className='text-right min-w-[50px] border-r pr-2 select-none'>
          {fileSize}
        </small>
        <div onClick={() => handleFileRemove(index)}>
          <TbTrash />
        </div>
      </RightSide>
    </StyledFileListPreview>
  )
}
