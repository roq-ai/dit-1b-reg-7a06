import { GetQueryInterface } from 'interfaces';

export interface TeacherInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TeacherGetQueryInterface extends GetQueryInterface {
  id?: string;
}
