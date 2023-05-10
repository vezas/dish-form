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
    type: ''
  }
});

interface FormContextProviderProps {
  children: ReactNode;
}

export const FormContextProvider: FC<FormContextProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<IDataForm>({
    name: '',
    preparation_time: '',
    type: ''
  });

  const value: IFormContext = { formData, setFormData };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
