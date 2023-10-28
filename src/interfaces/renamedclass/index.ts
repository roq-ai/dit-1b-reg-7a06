import { AttendanceInterface } from 'interfaces/attendance';
import { StudentInterface } from 'interfaces/student';
import { SchoolInterface } from 'interfaces/school';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RenamedclassInterface {
  id?: string;
  name: string;
  school_id: string;
  teacher_id: string;
  class_subject: string;
  grade: number;
  room_number: number;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  student?: StudentInterface[];
  school?: SchoolInterface;
  user?: UserInterface;
  _count?: {
    attendance?: number;
    student?: number;
  };
}

export interface RenamedclassGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  school_id?: string;
  teacher_id?: string;
  class_subject?: string;
}
