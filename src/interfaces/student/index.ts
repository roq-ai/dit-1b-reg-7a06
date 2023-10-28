import { AttendanceInterface } from 'interfaces/attendance';
import { RenamedclassInterface } from 'interfaces/renamedclass';
import { SchoolInterface } from 'interfaces/school';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  first_name: string;
  last_name: string;
  date_of_birth: any;
  gender: string;
  class_id: string;
  school_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  Renamedclass?: RenamedclassInterface;
  school?: SchoolInterface;
  _count?: {
    attendance?: number;
  };
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  class_id?: string;
  school_id?: string;
}
