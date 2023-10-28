import { RenamedclassInterface } from 'interfaces/renamedclass';
import { StudentInterface } from 'interfaces/student';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface SchoolInterface {
  id?: string;
  description?: string;
  number_of_students?: number;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  Renamedclass?: RenamedclassInterface[];
  student?: StudentInterface[];
  user?: UserInterface;
  _count?: {
    Renamedclass?: number;
    student?: number;
  };
}

export interface SchoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
