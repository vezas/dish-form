import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';
import { IDataForm } from 'lib/types';

interface IFormContext {
  setFormData: Dispatch<SetStateAction<IDataForm>>;
  formData: IDataForm;
}

export const FormContext = createContext<IFormContext>({
  setFormData: () => {
    return;
  },
  formData: {
    name: '',
    preparation_time: '',
    type: '',
    no_of_slices: 0,
    diameter: '',
    spiciness_scale: '',
    slices_of_bread: '',
    id: 1
  }
});

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContextProvider: FC<FormContextProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    preparation_time: '',
    type: '',
    no_of_slices: 0,
    diameter: '',
    spiciness_scale: '',
    slices_of_bread: '',
    id: 1
  });

  const value = { formData, setFormData };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
