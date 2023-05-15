import { IDataForm } from 'lib/types';

export const hasEmptyValues = (obj: Partial<IDataForm>) => !Object.values(obj).every((val) => val);
