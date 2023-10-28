import { GetQueryInterface } from 'interfaces';

export interface ExamInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ExamGetQueryInterface extends GetQueryInterface {
  id?: string;
}
