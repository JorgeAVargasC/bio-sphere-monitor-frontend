import { Add, Cards } from './components'

const ColmenasPage = () => {
  return (
    <div className='flex flex-col gap-5'>
      {/* <Filter /> */}
      <div className='flex items-center justify-between'>
        <Add />
        {/* <ViewButton /> */}
      </div>
      <Cards />
    </div>
  )
}

export default ColmenasPage
