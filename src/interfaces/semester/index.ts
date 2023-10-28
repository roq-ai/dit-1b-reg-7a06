import { GetQueryInterface } from 'interfaces';

export interface SemesterInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SemesterGetQueryInterface extends GetQueryInterface {
  id?: string;
}
