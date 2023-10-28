/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';
import {
  FileCategoriesQuery,
  FileCategoriesQueryVariables,
  FileCategoryContentGroupQuery,
  FileCategoryContentGroupQueryVariables,
  FileCategoryContentGroupsQuery,
  FileCategoryContentGroupsQueryVariables,
  FileCategoryContentTypesQuery,
  FileCategoryContentTypesQueryVariables,
  FileCategoryQuery,
  FileCategoryQueryVariables,
  FileQuery,
  FileQueryVariables,
  FilesQuery,
  FilesQueryVariables,
  RoleQuery,
  RoleQueryVariables,
  RolesQuery,
  RolesQueryVariables,
  TenantQuery,
  TenantQueryVariables,
  UserInviteQuery,
  UserInviteQueryVariables,
  UserInvitesQuery,
  UserInvitesQueryVariables,
  UserProfileQuery,
  UserProfileQueryVariables,
  UserProfilesQuery,
  UserProfilesQueryVariables,
} from '@roq/client';

export function useAttendanceFindMany<
  T extends Prisma.attendanceFindManyArgs,
  R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAttendanceCount<T extends Prisma.attendanceCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAttendanceFindManyWithCount<
  T extends Prisma.attendanceFindManyArgs,
  R extends { data: GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useAttendanceFindFirst<
  T extends Prisma.attendanceFindFirstArgs,
  R extends GetFindResult<Prisma.$attendancePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.attendanceFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useAttendanceFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.attendance.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRenamedclassFindMany<
  T extends Prisma.RenamedclassFindManyArgs,
  R extends GetFindResult<Prisma.$RenamedclassPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.RenamedclassFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRenamedclassFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.Renamedclass.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRenamedclassCount<T extends Prisma.RenamedclassCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.RenamedclassCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRenamedclassCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.Renamedclass.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRenamedclassFindManyWithCount<
  T extends Prisma.RenamedclassFindManyArgs,
  R extends { data: GetFindResult<Prisma.$RenamedclassPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.RenamedclassFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRenamedclassFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.Renamedclass.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRenamedclassFindFirst<
  T extends Prisma.RenamedclassFindFirstArgs,
  R extends GetFindResult<Prisma.$RenamedclassPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.RenamedclassFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRenamedclassFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.Renamedclass.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCourseFindMany<
  T extends Prisma.courseFindManyArgs,
  R extends GetFindResult<Prisma.$coursePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.courseFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCourseFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.course.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCourseCount<T extends Prisma.courseCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.courseCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCourseCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.course.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCourseFindManyWithCount<
  T extends Prisma.courseFindManyArgs,
  R extends { data: GetFindResult<Prisma.$coursePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.courseFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCourseFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.course.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCourseFindFirst<
  T extends Prisma.courseFindFirstArgs,
  R extends GetFindResult<Prisma.$coursePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.courseFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCourseFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.course.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useExamFindMany<
  T extends Prisma.examFindManyArgs,
  R extends GetFindResult<Prisma.$examPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.examFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useExamFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.exam.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useExamCount<T extends Prisma.examCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.examCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useExamCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.exam.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useExamFindManyWithCount<
  T extends Prisma.examFindManyArgs,
  R extends { data: GetFindResult<Prisma.$examPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.examFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useExamFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.exam.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useExamFindFirst<
  T extends Prisma.examFindFirstArgs,
  R extends GetFindResult<Prisma.$examPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.examFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useExamFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.exam.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeworkFindMany<
  T extends Prisma.homeworkFindManyArgs,
  R extends GetFindResult<Prisma.$homeworkPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.homeworkFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeworkFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.homework.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeworkCount<T extends Prisma.homeworkCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.homeworkCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeworkCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.homework.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeworkFindManyWithCount<
  T extends Prisma.homeworkFindManyArgs,
  R extends { data: GetFindResult<Prisma.$homeworkPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.homeworkFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeworkFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.homework.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHomeworkFindFirst<
  T extends Prisma.homeworkFindFirstArgs,
  R extends GetFindResult<Prisma.$homeworkPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.homeworkFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHomeworkFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.homework.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useScheduleFindMany<
  T extends Prisma.scheduleFindManyArgs,
  R extends GetFindResult<Prisma.$schedulePayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.scheduleFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useScheduleFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.schedule.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useScheduleCount<T extends Prisma.scheduleCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.scheduleCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useScheduleCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.schedule.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useScheduleFindManyWithCount<
  T extends Prisma.scheduleFindManyArgs,
  R extends { data: GetFindResult<Prisma.$schedulePayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.scheduleFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useScheduleFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.schedule.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useScheduleFindFirst<
  T extends Prisma.scheduleFindFirstArgs,
  R extends GetFindResult<Prisma.$schedulePayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.scheduleFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useScheduleFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.schedule.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSchoolFindMany<
  T extends Prisma.schoolFindManyArgs,
  R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.schoolFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSchoolFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.school.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSchoolCount<T extends Prisma.schoolCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.schoolCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSchoolCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.school.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSchoolFindManyWithCount<
  T extends Prisma.schoolFindManyArgs,
  R extends { data: GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.schoolFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSchoolFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.school.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSchoolFindFirst<
  T extends Prisma.schoolFindFirstArgs,
  R extends GetFindResult<Prisma.$schoolPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.schoolFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSchoolFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.school.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSemesterFindMany<
  T extends Prisma.semesterFindManyArgs,
  R extends GetFindResult<Prisma.$semesterPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.semesterFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSemesterFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.semester.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSemesterCount<T extends Prisma.semesterCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.semesterCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSemesterCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.semester.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSemesterFindManyWithCount<
  T extends Prisma.semesterFindManyArgs,
  R extends { data: GetFindResult<Prisma.$semesterPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.semesterFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSemesterFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.semester.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSemesterFindFirst<
  T extends Prisma.semesterFindFirstArgs,
  R extends GetFindResult<Prisma.$semesterPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.semesterFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSemesterFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.semester.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStudentFindMany<
  T extends Prisma.studentFindManyArgs,
  R extends GetFindResult<Prisma.$studentPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.studentFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStudentFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.student.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStudentCount<T extends Prisma.studentCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.studentCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStudentCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.student.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStudentFindManyWithCount<
  T extends Prisma.studentFindManyArgs,
  R extends { data: GetFindResult<Prisma.$studentPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.studentFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStudentFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.student.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStudentFindFirst<
  T extends Prisma.studentFindFirstArgs,
  R extends GetFindResult<Prisma.$studentPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.studentFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStudentFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.student.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSubjectFindMany<
  T extends Prisma.subjectFindManyArgs,
  R extends GetFindResult<Prisma.$subjectPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.subjectFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSubjectFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.subject.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSubjectCount<T extends Prisma.subjectCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.subjectCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSubjectCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.subject.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSubjectFindManyWithCount<
  T extends Prisma.subjectFindManyArgs,
  R extends { data: GetFindResult<Prisma.$subjectPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.subjectFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSubjectFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.subject.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSubjectFindFirst<
  T extends Prisma.subjectFindFirstArgs,
  R extends GetFindResult<Prisma.$subjectPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.subjectFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSubjectFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.subject.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeacherFindMany<
  T extends Prisma.teacherFindManyArgs,
  R extends GetFindResult<Prisma.$teacherPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.teacherFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeacherFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.teacher.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeacherCount<T extends Prisma.teacherCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.teacherCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeacherCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.teacher.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeacherFindManyWithCount<
  T extends Prisma.teacherFindManyArgs,
  R extends { data: GetFindResult<Prisma.$teacherPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.teacherFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeacherFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.teacher.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTeacherFindFirst<
  T extends Prisma.teacherFindFirstArgs,
  R extends GetFindResult<Prisma.$teacherPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.teacherFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTeacherFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.teacher.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfiles(
  args?: UserProfilesQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfilesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfiles', args || {}]);
  return useSWR<UserProfilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfiles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfile(
  args?: UserProfileQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfileQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfile', args || {}]);
  return useSWR<UserProfileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfile(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRoles(args?: RolesQueryVariables, swrOptions?: SWRRequestOptions<RolesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRoles', args || {}]);
  return useSWR<RolesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.roles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRole(args?: RoleQueryVariables, swrOptions?: SWRRequestOptions<RoleQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRole', args || {}]);
  return useSWR<RoleQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.role(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvites(
  args?: UserInvitesQueryVariables,
  swrOptions?: SWRRequestOptions<UserInvitesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvites', args || {}]);
  return useSWR<UserInvitesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvites(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvite(
  args?: UserInviteQueryVariables,
  swrOptions?: SWRRequestOptions<UserInviteQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvite', args || {}]);
  return useSWR<UserInviteQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvite(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFiles(args?: FilesQueryVariables, swrOptions?: SWRRequestOptions<FilesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFiles', args || {}]);
  return useSWR<FilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.files(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFile(args?: FileQueryVariables, swrOptions?: SWRRequestOptions<FileQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFile', args || {}]);
  return useSWR<FileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.file(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentTypes(
  args?: FileCategoryContentTypesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentTypesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentTypes', args || {}]);
  return useSWR<FileCategoryContentTypesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentTypes(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroup(
  args?: FileCategoryContentGroupQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroup', args || {}]);
  return useSWR<FileCategoryContentGroupQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroup(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroups(
  args?: FileCategoryContentGroupsQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupsQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroups', args || {}]);
  return useSWR<FileCategoryContentGroupsQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroups(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategories(
  args?: FileCategoriesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoriesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategories', args || {}]);
  return useSWR<FileCategoriesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategories(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategory(
  args?: FileCategoryQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategory', args || {}]);
  return useSWR<FileCategoryQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategory(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformTenant(args?: TenantQueryVariables, swrOptions?: SWRRequestOptions<TenantQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformTenant', args || {}]);
  return useSWR<TenantQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.tenant(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
