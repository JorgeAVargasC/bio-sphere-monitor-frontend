import { Accordion, AccordionItem } from '@nextui-org/react'

import { ExampleForm } from '..'

export const Content = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1>H1 - Content</h1>
      <h2>H2 - Content</h2>
      <h3>H3 - Content</h3>
      <h4>H4 - Content</h4>
      <h5>H5 - Content</h5>
      <h6>H6 - Content</h6>

      <p>
        Paragraph - Content Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Unde fugit iure ab deserunt voluptates reiciendis magnam ad minus
        labore aliquam dignissimos aspernatur ipsa quia quod doloribus dolorem,
        distinctio maxime officia! Paragraph - Content Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Unde fugit iure ab deserunt
        voluptates reiciendis magnam ad minus labore aliquam dignissimos
        aspernatur ipsa quia quod doloribus dolorem, distinctio maxime officia!
        Paragraph - Content Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Unde fugit iure ab deserunt voluptates reiciendis magnam ad minus
        labore aliquam dignissimos aspernatur ipsa quia quod doloribus dolorem,
        distinctio maxime officia!
      </p>

      <label>Label - Content</label>

      <button>Button - Content</button>

      <small>
        Small - Content Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Unde fugit iure ab deserunt voluptates reiciendis magnam ad minus
        labore aliquam dignissimos aspernatur ipsa quia quod doloribus dolorem,
        distinctio maxime officia! Content Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Unde fugit iure ab deserunt voluptates
        reiciendis magnam ad minus labore aliquam dignissimos aspernatur ipsa
        quia quod doloribus dolorem, distinctio maxime officia!
      </small>

      <Accordion
        selectionMode='multiple'
        variant='bordered'
        keepContentMounted={true}
      >
        <AccordionItem
          key={1}
          title='Example Form'
          aria-label='Example Form'
        >
          <ExampleForm />
        </AccordionItem>
        <AccordionItem
          key={2}
          title='Example Table'
          aria-label='Example Table'
        >
          <h1>Tables</h1>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
