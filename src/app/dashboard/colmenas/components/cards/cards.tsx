import { Skeleton } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useToastify } from '@hooks/toastify'
import {
  IGetColmenasRes,
  getColmenasService
} from '@services/dashboard/colmenas/get.colmenas'
import { Pagination } from '@components/ui/pagination'
import { ColmenaCard } from './components'

export const Cards: React.FC = () => {
  const [data, setData] = useState<IGetColmenasRes | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchParams, setSearchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const toastify = useToastify()

  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page') || '1')
    : 1
  const limit = searchParams.get('limit')
    ? parseInt(searchParams.get('limit') || '10')
    : 10

  const fetchData = async () => {
    setLoading(true)
    getColmenasService({
      page,
      limit
    })
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => {
        console.error(error)
        toastify('error', error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return (
    <div className='flex flex-col gap-3'>
      <div className='grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,1fr))]'>
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <Skeleton
                key={i}
                className='w-full h-[240px] rounded-2xl'
              />
            ))
          : data?.results.map((colmena) => (
              <ColmenaCard
                key={colmena.id}
                {...colmena}
              />
            ))}
      </div>

      <Pagination
        totalPages={data?.meta.totalPages || 1}
        initialPage={page}
        limit={limit}
        onChangeLimit={(e) =>
          setSearchParams(
            new URLSearchParams({
              ...Object.fromEntries(params),
              limit: e.target.value
            })
          )
        }
        onChangePage={(page) =>
          setSearchParams(
            new URLSearchParams({
              ...Object.fromEntries(params),
              page: page.toString()
            })
          )
        }
      />
    </div>
  )
}
