import { GetQueryInterface } from 'interfaces';

export interface SubjectInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SubjectGetQueryInterface extends GetQueryInterface {
  id?: string;
}
