import { GetQueryInterface } from 'interfaces';

export interface HomeworkInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface HomeworkGetQueryInterface extends GetQueryInterface {
  id?: string;
}
