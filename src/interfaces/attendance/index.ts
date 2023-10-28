import { StudentInterface } from 'interfaces/student';
import { RenamedclassInterface } from 'interfaces/renamedclass';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  student_id: string;
  class_id: string;
  date: any;
  status: string;
  reason?: string;
  created_at?: any;
  updated_at?: any;

  student?: StudentInterface;
  Renamedclass?: RenamedclassInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  student_id?: string;
  class_id?: string;
  status?: string;
  reason?: string;
}
