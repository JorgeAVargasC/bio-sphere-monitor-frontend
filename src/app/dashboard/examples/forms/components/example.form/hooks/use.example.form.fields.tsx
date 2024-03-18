import { IFormFields, IFormValues } from '../models'
import { UseFormReturn } from 'react-hook-form'

type Props = {
  methods: UseFormReturn<IFormValues, any, undefined>
}

export const useExampleFormFields = ({ methods }: Props) => {
  const form: IFormFields = {
    fullName: {
      name: 'fullName',
      label: 'Full Name',
      placeholder: 'Enter your full name',
      variant: 'faded'
    },
    age: {
      name: 'age',
      label: 'Age',
      placeholder: 'Enter your age',
      variant: 'faded',
      inputMode: 'numeric'
    },
    email: {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter your email',
      variant: 'faded',
      inputMode: 'email'
    },
    gender: {
      name: 'gender',
      label: 'Gender',
      placeholder: '',
      variant: 'faded',
      options: [
        {
          value: '1',
          label: 'Male'
        },
        {
          value: '2',
          label: 'Female'
        }
      ]
    },
    description: {
      name: 'description',
      label: 'Description',
      placeholder: 'Enter your description',
      variant: 'faded',
      inputMode: 'text'
    },
    skills: {
      name: 'skills',
      label: 'Skills',
      placeholder: 'Enter your skills',
      variant: 'faded',
      selectionMode: 'multiple',
      options: [
        {
          value: '1',
          label: 'React'
        },
        {
          value: '2',
          label: 'Vue'
        }
      ],
      inputMode: 'text'
    },
    tel: {
      name: 'tel',
      label: 'Tel',
      placeholder: 'Enter your tel',
      variant: 'faded',
      inputMode: 'tel'
    },
    accept: {
      name: 'accept',
      label: 'Accept',
      placeholder: 'Accept'
    },
    amenities: {
      name: 'amenities',
      label: 'Amenities',
      options: [
        {
          value: '1',
          label: 'Pool'
        },
        {
          value: '2',
          label: 'Gym'
        }
      ],
      inputMode: 'text'
    },
    plan: {
      name: 'plan',
      label: 'Plan',
      options: [
        {
          value: '1',
          label: 'Basic'
        },
        {
          value: '2',
          label: 'Pro'
        },
        {
          value: '3',
          label: 'Enterprise'
        }
      ]
    }
  }

  return {
    form
  }
}
