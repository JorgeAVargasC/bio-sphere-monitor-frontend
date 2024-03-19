import {
  Select,
  Pagination as PaginationNextUI,
  SelectItem
} from '@nextui-org/react'
import React from 'react'

export type PaginationProps = {
  totalPages: number
  initialPage: number
  onChangePage: (page: number) => void
  limit: number
  onChangeLimit: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage,
  limit,
  onChangePage,
  onChangeLimit
}) => {
  return (
    <div className='flex flex-col gap-3 md:flex-row items-center justify-center'>
      <PaginationNextUI
        isCompact
        showControls
        size='sm'
        radius='sm'
        siblings={0}
        total={totalPages}
        aria-label='pagination'
        initialPage={initialPage}
        onChange={onChangePage}
      />

      <Select
        variant='flat'
        labelPlacement='outside'
        aria-label='limit'
        size='sm'
        radius='md'
        className='max-w-[80px]'
        value={limit}
        onChange={onChangeLimit}
        selectionMode='single'
        classNames={{
          trigger: ['data-[focus=true]:border-default-400']
        }}
        selectedKeys={[limit.toString() || '10']}
      >
        {['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'].map(
          (option) => (
            <SelectItem
              key={option}
              value={option}
            >
              {option}
            </SelectItem>
          )
        )}
      </Select>
    </div>
  )
}
