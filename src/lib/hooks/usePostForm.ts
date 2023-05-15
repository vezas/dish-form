import { useMutation } from 'react-query';
import { formInstance } from 'lib/services';
import { IDataForm } from 'lib/types';
import { useNavigate } from 'react-router-dom';
import { paths } from 'lib/constants';
import { useContext } from 'react';
import { FormContext } from 'lib/store';

const postDataFn = async (data: Partial<IDataForm>) => {
  const formData = JSON.stringify(data);
  return formInstance.post('dishes', formData, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const usePostForm = () => {
  const { setFormData } = useContext(FormContext);
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useMutation(postDataFn, {
    onSuccess: () => {
      setFormData({ name: '', type: '', preparation_time: '' });
      navigate(paths.success);
    }
  });

  return { mutate, isLoading, isError, error };
};
