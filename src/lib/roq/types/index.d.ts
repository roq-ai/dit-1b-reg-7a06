/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model attendance
 *
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>;
/**
 * Model Renamedclass
 *
 */
export type Renamedclass = $Result.DefaultSelection<Prisma.$RenamedclassPayload>;
/**
 * Model course
 *
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>;
/**
 * Model exam
 *
 */
export type exam = $Result.DefaultSelection<Prisma.$examPayload>;
/**
 * Model homework
 *
 */
export type homework = $Result.DefaultSelection<Prisma.$homeworkPayload>;
/**
 * Model schedule
 *
 */
export type schedule = $Result.DefaultSelection<Prisma.$schedulePayload>;
/**
 * Model school
 *
 */
export type school = $Result.DefaultSelection<Prisma.$schoolPayload>;
/**
 * Model semester
 *
 */
export type semester = $Result.DefaultSelection<Prisma.$semesterPayload>;
/**
 * Model student
 *
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>;
/**
 * Model subject
 *
 */
export type subject = $Result.DefaultSelection<Prisma.$subjectPayload>;
/**
 * Model teacher
 *
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Attendances
 * const attendances = await prisma.attendance.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Attendances
   * const attendances = await prisma.attendance.findMany()
   * ```
   */
  get attendance(): Prisma.attendanceDelegate<ExtArgs>;

  /**
   * `prisma.renamedclass`: Exposes CRUD operations for the **Renamedclass** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Renamedclasses
   * const renamedclasses = await prisma.renamedclass.findMany()
   * ```
   */
  get renamedclass(): Prisma.RenamedclassDelegate<ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   */
  get course(): Prisma.courseDelegate<ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **exam** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Exams
   * const exams = await prisma.exam.findMany()
   * ```
   */
  get exam(): Prisma.examDelegate<ExtArgs>;

  /**
   * `prisma.homework`: Exposes CRUD operations for the **homework** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Homework
   * const homework = await prisma.homework.findMany()
   * ```
   */
  get homework(): Prisma.homeworkDelegate<ExtArgs>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **schedule** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schedules
   * const schedules = await prisma.schedule.findMany()
   * ```
   */
  get schedule(): Prisma.scheduleDelegate<ExtArgs>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **school** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   */
  get school(): Prisma.schoolDelegate<ExtArgs>;

  /**
   * `prisma.semester`: Exposes CRUD operations for the **semester** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Semesters
   * const semesters = await prisma.semester.findMany()
   * ```
   */
  get semester(): Prisma.semesterDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   */
  get student(): Prisma.studentDelegate<ExtArgs>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **subject** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Subjects
   * const subjects = await prisma.subject.findMany()
   * ```
   */
  get subject(): Prisma.subjectDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teachers
   * const teachers = await prisma.teacher.findMany()
   * ```
   */
  get teacher(): Prisma.teacherDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    attendance: 'attendance';
    Renamedclass: 'Renamedclass';
    course: 'course';
    exam: 'exam';
    homework: 'homework';
    schedule: 'schedule';
    school: 'school';
    semester: 'semester';
    student: 'student';
    subject: 'subject';
    teacher: 'teacher';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps:
        | 'attendance'
        | 'renamedclass'
        | 'course'
        | 'exam'
        | 'homework'
        | 'schedule'
        | 'school'
        | 'semester'
        | 'student'
        | 'subject'
        | 'teacher'
        | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>;
        fields: Prisma.attendanceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[];
          };
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>;
          };
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAttendance>;
          };
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AttendanceGroupByOutputType>[];
          };
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>;
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number;
          };
        };
      };
      Renamedclass: {
        payload: Prisma.$RenamedclassPayload<ExtArgs>;
        fields: Prisma.RenamedclassFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RenamedclassFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RenamedclassFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>;
          };
          findFirst: {
            args: Prisma.RenamedclassFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RenamedclassFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>;
          };
          findMany: {
            args: Prisma.RenamedclassFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>[];
          };
          create: {
            args: Prisma.RenamedclassCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>;
          };
          createMany: {
            args: Prisma.RenamedclassCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.RenamedclassDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>;
          };
          update: {
            args: Prisma.RenamedclassUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>;
          };
          deleteMany: {
            args: Prisma.RenamedclassDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.RenamedclassUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.RenamedclassUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RenamedclassPayload>;
          };
          aggregate: {
            args: Prisma.RenamedclassAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRenamedclass>;
          };
          groupBy: {
            args: Prisma.RenamedclassGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RenamedclassGroupByOutputType>[];
          };
          count: {
            args: Prisma.RenamedclassCountArgs<ExtArgs>;
            result: $Utils.Optional<RenamedclassCountAggregateOutputType> | number;
          };
        };
      };
      course: {
        payload: Prisma.$coursePayload<ExtArgs>;
        fields: Prisma.courseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[];
          };
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourse>;
          };
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseGroupByOutputType>[];
          };
          count: {
            args: Prisma.courseCountArgs<ExtArgs>;
            result: $Utils.Optional<CourseCountAggregateOutputType> | number;
          };
        };
      };
      exam: {
        payload: Prisma.$examPayload<ExtArgs>;
        fields: Prisma.examFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.examFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.examFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload>;
          };
          findFirst: {
            args: Prisma.examFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.examFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload>;
          };
          findMany: {
            args: Prisma.examFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload>[];
          };
          create: {
            args: Prisma.examCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload>;
          };
          createMany: {
            args: Prisma.examCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.examDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload>;
          };
          update: {
            args: Prisma.examUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload>;
          };
          deleteMany: {
            args: Prisma.examDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.examUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.examUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$examPayload>;
          };
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateExam>;
          };
          groupBy: {
            args: Prisma.examGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ExamGroupByOutputType>[];
          };
          count: {
            args: Prisma.examCountArgs<ExtArgs>;
            result: $Utils.Optional<ExamCountAggregateOutputType> | number;
          };
        };
      };
      homework: {
        payload: Prisma.$homeworkPayload<ExtArgs>;
        fields: Prisma.homeworkFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.homeworkFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.homeworkFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload>;
          };
          findFirst: {
            args: Prisma.homeworkFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.homeworkFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload>;
          };
          findMany: {
            args: Prisma.homeworkFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload>[];
          };
          create: {
            args: Prisma.homeworkCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload>;
          };
          createMany: {
            args: Prisma.homeworkCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.homeworkDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload>;
          };
          update: {
            args: Prisma.homeworkUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload>;
          };
          deleteMany: {
            args: Prisma.homeworkDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.homeworkUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.homeworkUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$homeworkPayload>;
          };
          aggregate: {
            args: Prisma.HomeworkAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHomework>;
          };
          groupBy: {
            args: Prisma.homeworkGroupByArgs<ExtArgs>;
            result: $Utils.Optional<HomeworkGroupByOutputType>[];
          };
          count: {
            args: Prisma.homeworkCountArgs<ExtArgs>;
            result: $Utils.Optional<HomeworkCountAggregateOutputType> | number;
          };
        };
      };
      schedule: {
        payload: Prisma.$schedulePayload<ExtArgs>;
        fields: Prisma.scheduleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.scheduleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.scheduleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findFirst: {
            args: Prisma.scheduleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.scheduleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          findMany: {
            args: Prisma.scheduleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>[];
          };
          create: {
            args: Prisma.scheduleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          createMany: {
            args: Prisma.scheduleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.scheduleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          update: {
            args: Prisma.scheduleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          deleteMany: {
            args: Prisma.scheduleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.scheduleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.scheduleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schedulePayload>;
          };
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchedule>;
          };
          groupBy: {
            args: Prisma.scheduleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleGroupByOutputType>[];
          };
          count: {
            args: Prisma.scheduleCountArgs<ExtArgs>;
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number;
          };
        };
      };
      school: {
        payload: Prisma.$schoolPayload<ExtArgs>;
        fields: Prisma.schoolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.schoolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.schoolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findFirst: {
            args: Prisma.schoolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.schoolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findMany: {
            args: Prisma.schoolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>[];
          };
          create: {
            args: Prisma.schoolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          createMany: {
            args: Prisma.schoolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.schoolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          update: {
            args: Prisma.schoolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          deleteMany: {
            args: Prisma.schoolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.schoolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.schoolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchool>;
          };
          groupBy: {
            args: Prisma.schoolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SchoolGroupByOutputType>[];
          };
          count: {
            args: Prisma.schoolCountArgs<ExtArgs>;
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number;
          };
        };
      };
      semester: {
        payload: Prisma.$semesterPayload<ExtArgs>;
        fields: Prisma.semesterFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.semesterFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.semesterFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>;
          };
          findFirst: {
            args: Prisma.semesterFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.semesterFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>;
          };
          findMany: {
            args: Prisma.semesterFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>[];
          };
          create: {
            args: Prisma.semesterCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>;
          };
          createMany: {
            args: Prisma.semesterCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.semesterDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>;
          };
          update: {
            args: Prisma.semesterUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>;
          };
          deleteMany: {
            args: Prisma.semesterDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.semesterUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.semesterUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$semesterPayload>;
          };
          aggregate: {
            args: Prisma.SemesterAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSemester>;
          };
          groupBy: {
            args: Prisma.semesterGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SemesterGroupByOutputType>[];
          };
          count: {
            args: Prisma.semesterCountArgs<ExtArgs>;
            result: $Utils.Optional<SemesterCountAggregateOutputType> | number;
          };
        };
      };
      student: {
        payload: Prisma.$studentPayload<ExtArgs>;
        fields: Prisma.studentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[];
          };
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudent>;
          };
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudentGroupByOutputType>[];
          };
          count: {
            args: Prisma.studentCountArgs<ExtArgs>;
            result: $Utils.Optional<StudentCountAggregateOutputType> | number;
          };
        };
      };
      subject: {
        payload: Prisma.$subjectPayload<ExtArgs>;
        fields: Prisma.subjectFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.subjectFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.subjectFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>;
          };
          findFirst: {
            args: Prisma.subjectFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.subjectFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>;
          };
          findMany: {
            args: Prisma.subjectFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[];
          };
          create: {
            args: Prisma.subjectCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>;
          };
          createMany: {
            args: Prisma.subjectCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.subjectDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>;
          };
          update: {
            args: Prisma.subjectUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>;
          };
          deleteMany: {
            args: Prisma.subjectDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.subjectUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.subjectUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>;
          };
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSubject>;
          };
          groupBy: {
            args: Prisma.subjectGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SubjectGroupByOutputType>[];
          };
          count: {
            args: Prisma.subjectCountArgs<ExtArgs>;
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number;
          };
        };
      };
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>;
        fields: Prisma.teacherFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[];
          };
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeacher>;
          };
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeacherGroupByOutputType>[];
          };
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>;
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type RenamedclassCountOutputType
   */

  export type RenamedclassCountOutputType = {
    attendance: number;
    student: number;
  };

  export type RenamedclassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | RenamedclassCountOutputTypeCountAttendanceArgs;
    student?: boolean | RenamedclassCountOutputTypeCountStudentArgs;
  };

  // Custom InputTypes

  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RenamedclassCountOutputType
     */
    select?: RenamedclassCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeCountAttendanceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: attendanceWhereInput;
  };

  /**
   * RenamedclassCountOutputType without action
   */
  export type RenamedclassCountOutputTypeCountStudentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: studentWhereInput;
  };

  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    Renamedclass: number;
    student: number;
  };

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | SchoolCountOutputTypeCountRenamedclassArgs;
    student?: boolean | SchoolCountOutputTypeCountStudentArgs;
  };

  // Custom InputTypes

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountRenamedclassArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RenamedclassWhereInput;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: studentWhereInput;
  };

  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attendance: number;
  };

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | StudentCountOutputTypeCountAttendanceArgs;
  };

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: attendanceWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Renamedclass: number;
    school: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | UserCountOutputTypeCountRenamedclassArgs;
    school?: boolean | UserCountOutputTypeCountSchoolArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRenamedclassArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RenamedclassWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
  };

  export type AttendanceMinAggregateOutputType = {
    id: string | null;
    student_id: string | null;
    class_id: string | null;
    date: Date | null;
    status: string | null;
    reason: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AttendanceMaxAggregateOutputType = {
    id: string | null;
    student_id: string | null;
    class_id: string | null;
    date: Date | null;
    status: string | null;
    reason: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AttendanceCountAggregateOutputType = {
    id: number;
    student_id: number;
    class_id: number;
    date: number;
    status: number;
    reason: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AttendanceMinAggregateInputType = {
    id?: true;
    student_id?: true;
    class_id?: true;
    date?: true;
    status?: true;
    reason?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AttendanceMaxAggregateInputType = {
    id?: true;
    student_id?: true;
    class_id?: true;
    date?: true;
    status?: true;
    reason?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AttendanceCountAggregateInputType = {
    id?: true;
    student_id?: true;
    class_id?: true;
    date?: true;
    status?: true;
    reason?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned attendances
     **/
    _count?: true | AttendanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AttendanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AttendanceMaxAggregateInputType;
  };

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>;
  };

  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput;
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[];
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum;
    having?: attendanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttendanceCountAggregateInputType | true;
    _min?: AttendanceMinAggregateInputType;
    _max?: AttendanceMaxAggregateInputType;
  };

  export type AttendanceGroupByOutputType = {
    id: string;
    student_id: string;
    class_id: string;
    date: Date;
    status: string;
    reason: string | null;
    created_at: Date;
    updated_at: Date;
    _count: AttendanceCountAggregateOutputType | null;
    _min: AttendanceMinAggregateOutputType | null;
    _max: AttendanceMaxAggregateOutputType | null;
  };

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AttendanceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
          : GetScalarType<T[P], AttendanceGroupByOutputType[P]>;
      }
    >
  >;

  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        student_id?: boolean;
        class_id?: boolean;
        date?: boolean;
        status?: boolean;
        reason?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>;
        student?: boolean | studentDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['attendance']
    >;

  export type attendanceSelectScalar = {
    id?: boolean;
    student_id?: boolean;
    class_id?: boolean;
    date?: boolean;
    status?: boolean;
    reason?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>;
    student?: boolean | studentDefaultArgs<ExtArgs>;
  };

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'attendance';
    objects: {
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>;
      student: Prisma.$studentPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        student_id: string;
        class_id: string;
        date: Date;
        status: string;
        reason: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['attendance']
    >;
    composites: {};
  };

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<
    Prisma.$attendancePayload,
    S
  >;

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    attendanceFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AttendanceCountAggregateInputType | true;
  };

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance']; meta: { name: 'attendance' } };
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends attendanceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Attendance that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends attendanceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__attendanceClient<
      $Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     *
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends attendanceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     *
     **/
    create<T extends attendanceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Attendances.
     *     @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     *     @example
     *     // Create many Attendances
     *     const attendance = await prisma.attendance.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends attendanceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     *
     **/
    delete<T extends attendanceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends attendanceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends attendanceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends attendanceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     **/
    upsert<T extends attendanceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>,
    ): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
     **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AttendanceAggregateArgs>(
      args: Subset<T, AttendanceAggregateArgs>,
    ): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>;

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the attendance model
     */
    readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Renamedclass<T extends RenamedclassDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RenamedclassDefaultArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<
      $Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    student<T extends studentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, studentDefaultArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the attendance model
   */
  interface attendanceFieldRefs {
    readonly id: FieldRef<'attendance', 'String'>;
    readonly student_id: FieldRef<'attendance', 'String'>;
    readonly class_id: FieldRef<'attendance', 'String'>;
    readonly date: FieldRef<'attendance', 'DateTime'>;
    readonly status: FieldRef<'attendance', 'String'>;
    readonly reason: FieldRef<'attendance', 'String'>;
    readonly created_at: FieldRef<'attendance', 'DateTime'>;
    readonly updated_at: FieldRef<'attendance', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` attendances.
     */
    skip?: number;
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>;
  };

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>;
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>;
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput;
  };

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput;
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>;
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>;
  };

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput;
  };

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput;
  };

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
  };

  /**
   * Model Renamedclass
   */

  export type AggregateRenamedclass = {
    _count: RenamedclassCountAggregateOutputType | null;
    _avg: RenamedclassAvgAggregateOutputType | null;
    _sum: RenamedclassSumAggregateOutputType | null;
    _min: RenamedclassMinAggregateOutputType | null;
    _max: RenamedclassMaxAggregateOutputType | null;
  };

  export type RenamedclassAvgAggregateOutputType = {
    grade: number | null;
    room_number: number | null;
  };

  export type RenamedclassSumAggregateOutputType = {
    grade: number | null;
    room_number: number | null;
  };

  export type RenamedclassMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    school_id: string | null;
    teacher_id: string | null;
    class_subject: string | null;
    grade: number | null;
    room_number: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RenamedclassMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    school_id: string | null;
    teacher_id: string | null;
    class_subject: string | null;
    grade: number | null;
    room_number: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RenamedclassCountAggregateOutputType = {
    id: number;
    name: number;
    school_id: number;
    teacher_id: number;
    class_subject: number;
    grade: number;
    room_number: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RenamedclassAvgAggregateInputType = {
    grade?: true;
    room_number?: true;
  };

  export type RenamedclassSumAggregateInputType = {
    grade?: true;
    room_number?: true;
  };

  export type RenamedclassMinAggregateInputType = {
    id?: true;
    name?: true;
    school_id?: true;
    teacher_id?: true;
    class_subject?: true;
    grade?: true;
    room_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RenamedclassMaxAggregateInputType = {
    id?: true;
    name?: true;
    school_id?: true;
    teacher_id?: true;
    class_subject?: true;
    grade?: true;
    room_number?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RenamedclassCountAggregateInputType = {
    id?: true;
    name?: true;
    school_id?: true;
    teacher_id?: true;
    class_subject?: true;
    grade?: true;
    room_number?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RenamedclassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renamedclass to aggregate.
     */
    where?: RenamedclassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RenamedclassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Renamedclasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Renamedclasses
     **/
    _count?: true | RenamedclassCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: RenamedclassAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: RenamedclassSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RenamedclassMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RenamedclassMaxAggregateInputType;
  };

  export type GetRenamedclassAggregateType<T extends RenamedclassAggregateArgs> = {
    [P in keyof T & keyof AggregateRenamedclass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRenamedclass[P]>
      : GetScalarType<T[P], AggregateRenamedclass[P]>;
  };

  export type RenamedclassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RenamedclassWhereInput;
    orderBy?: RenamedclassOrderByWithAggregationInput | RenamedclassOrderByWithAggregationInput[];
    by: RenamedclassScalarFieldEnum[] | RenamedclassScalarFieldEnum;
    having?: RenamedclassScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RenamedclassCountAggregateInputType | true;
    _avg?: RenamedclassAvgAggregateInputType;
    _sum?: RenamedclassSumAggregateInputType;
    _min?: RenamedclassMinAggregateInputType;
    _max?: RenamedclassMaxAggregateInputType;
  };

  export type RenamedclassGroupByOutputType = {
    id: string;
    name: string;
    school_id: string;
    teacher_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at: Date;
    updated_at: Date;
    _count: RenamedclassCountAggregateOutputType | null;
    _avg: RenamedclassAvgAggregateOutputType | null;
    _sum: RenamedclassSumAggregateOutputType | null;
    _min: RenamedclassMinAggregateOutputType | null;
    _max: RenamedclassMaxAggregateOutputType | null;
  };

  type GetRenamedclassGroupByPayload<T extends RenamedclassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RenamedclassGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RenamedclassGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RenamedclassGroupByOutputType[P]>
          : GetScalarType<T[P], RenamedclassGroupByOutputType[P]>;
      }
    >
  >;

  export type RenamedclassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        school_id?: boolean;
        teacher_id?: boolean;
        class_subject?: boolean;
        grade?: boolean;
        room_number?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        attendance?: boolean | Renamedclass$attendanceArgs<ExtArgs>;
        school?: boolean | schoolDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        student?: boolean | Renamedclass$studentArgs<ExtArgs>;
        _count?: boolean | RenamedclassCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['renamedclass']
    >;

  export type RenamedclassSelectScalar = {
    id?: boolean;
    name?: boolean;
    school_id?: boolean;
    teacher_id?: boolean;
    class_subject?: boolean;
    grade?: boolean;
    room_number?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type RenamedclassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | Renamedclass$attendanceArgs<ExtArgs>;
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    student?: boolean | Renamedclass$studentArgs<ExtArgs>;
    _count?: boolean | RenamedclassCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $RenamedclassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'Renamedclass';
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
      student: Prisma.$studentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        school_id: string;
        teacher_id: string;
        class_subject: string;
        grade: number;
        room_number: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['renamedclass']
    >;
    composites: {};
  };

  type RenamedclassGetPayload<S extends boolean | null | undefined | RenamedclassDefaultArgs> = $Result.GetResult<
    Prisma.$RenamedclassPayload,
    S
  >;

  type RenamedclassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    RenamedclassFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RenamedclassCountAggregateInputType | true;
  };

  export interface RenamedclassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Renamedclass']; meta: { name: 'Renamedclass' } };
    /**
     * Find zero or one Renamedclass that matches the filter.
     * @param {RenamedclassFindUniqueArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends RenamedclassFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RenamedclassFindUniqueArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<
      $Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Renamedclass that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {RenamedclassFindUniqueOrThrowArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends RenamedclassFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RenamedclassFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<
      $Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Renamedclass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindFirstArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends RenamedclassFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RenamedclassFindFirstArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<
      $Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Renamedclass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindFirstOrThrowArgs} args - Arguments to find a Renamedclass
     * @example
     * // Get one Renamedclass
     * const renamedclass = await prisma.renamedclass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends RenamedclassFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RenamedclassFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<
      $Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Renamedclasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Renamedclasses
     * const renamedclasses = await prisma.renamedclass.findMany()
     *
     * // Get first 10 Renamedclasses
     * const renamedclasses = await prisma.renamedclass.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const renamedclassWithIdOnly = await prisma.renamedclass.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends RenamedclassFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RenamedclassFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Renamedclass.
     * @param {RenamedclassCreateArgs} args - Arguments to create a Renamedclass.
     * @example
     * // Create one Renamedclass
     * const Renamedclass = await prisma.renamedclass.create({
     *   data: {
     *     // ... data to create a Renamedclass
     *   }
     * })
     *
     **/
    create<T extends RenamedclassCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RenamedclassCreateArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Renamedclasses.
     *     @param {RenamedclassCreateManyArgs} args - Arguments to create many Renamedclasses.
     *     @example
     *     // Create many Renamedclasses
     *     const renamedclass = await prisma.renamedclass.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends RenamedclassCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RenamedclassCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Renamedclass.
     * @param {RenamedclassDeleteArgs} args - Arguments to delete one Renamedclass.
     * @example
     * // Delete one Renamedclass
     * const Renamedclass = await prisma.renamedclass.delete({
     *   where: {
     *     // ... filter to delete one Renamedclass
     *   }
     * })
     *
     **/
    delete<T extends RenamedclassDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RenamedclassDeleteArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Renamedclass.
     * @param {RenamedclassUpdateArgs} args - Arguments to update one Renamedclass.
     * @example
     * // Update one Renamedclass
     * const renamedclass = await prisma.renamedclass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends RenamedclassUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RenamedclassUpdateArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Renamedclasses.
     * @param {RenamedclassDeleteManyArgs} args - Arguments to filter Renamedclasses to delete.
     * @example
     * // Delete a few Renamedclasses
     * const { count } = await prisma.renamedclass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends RenamedclassDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RenamedclassDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Renamedclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Renamedclasses
     * const renamedclass = await prisma.renamedclass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends RenamedclassUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RenamedclassUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Renamedclass.
     * @param {RenamedclassUpsertArgs} args - Arguments to update or create a Renamedclass.
     * @example
     * // Update or create a Renamedclass
     * const renamedclass = await prisma.renamedclass.upsert({
     *   create: {
     *     // ... data to create a Renamedclass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Renamedclass we want to update
     *   }
     * })
     **/
    upsert<T extends RenamedclassUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RenamedclassUpsertArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Renamedclasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassCountArgs} args - Arguments to filter Renamedclasses to count.
     * @example
     * // Count the number of Renamedclasses
     * const count = await prisma.renamedclass.count({
     *   where: {
     *     // ... the filter for the Renamedclasses we want to count
     *   }
     * })
     **/
    count<T extends RenamedclassCountArgs>(
      args?: Subset<T, RenamedclassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RenamedclassCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Renamedclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RenamedclassAggregateArgs>(
      args: Subset<T, RenamedclassAggregateArgs>,
    ): Prisma.PrismaPromise<GetRenamedclassAggregateType<T>>;

    /**
     * Group by Renamedclass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RenamedclassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RenamedclassGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RenamedclassGroupByArgs['orderBy'] }
        : { orderBy?: RenamedclassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, RenamedclassGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRenamedclassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Renamedclass model
     */
    readonly fields: RenamedclassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Renamedclass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RenamedclassClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attendance<T extends Renamedclass$attendanceArgs<ExtArgs> = {}>(
      args?: Subset<T, Renamedclass$attendanceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    student<T extends Renamedclass$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, Renamedclass$studentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Renamedclass model
   */
  interface RenamedclassFieldRefs {
    readonly id: FieldRef<'Renamedclass', 'String'>;
    readonly name: FieldRef<'Renamedclass', 'String'>;
    readonly school_id: FieldRef<'Renamedclass', 'String'>;
    readonly teacher_id: FieldRef<'Renamedclass', 'String'>;
    readonly class_subject: FieldRef<'Renamedclass', 'String'>;
    readonly grade: FieldRef<'Renamedclass', 'Int'>;
    readonly room_number: FieldRef<'Renamedclass', 'Int'>;
    readonly created_at: FieldRef<'Renamedclass', 'DateTime'>;
    readonly updated_at: FieldRef<'Renamedclass', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * Renamedclass findUnique
   */
  export type RenamedclassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * Filter, which Renamedclass to fetch.
     */
    where: RenamedclassWhereUniqueInput;
  };

  /**
   * Renamedclass findUniqueOrThrow
   */
  export type RenamedclassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * Filter, which Renamedclass to fetch.
     */
    where: RenamedclassWhereUniqueInput;
  };

  /**
   * Renamedclass findFirst
   */
  export type RenamedclassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * Filter, which Renamedclass to fetch.
     */
    where?: RenamedclassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Renamedclasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Renamedclasses.
     */
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[];
  };

  /**
   * Renamedclass findFirstOrThrow
   */
  export type RenamedclassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * Filter, which Renamedclass to fetch.
     */
    where?: RenamedclassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Renamedclasses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Renamedclasses.
     */
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[];
  };

  /**
   * Renamedclass findMany
   */
  export type RenamedclassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * Filter, which Renamedclasses to fetch.
     */
    where?: RenamedclassWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Renamedclasses to fetch.
     */
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Renamedclasses.
     */
    cursor?: RenamedclassWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Renamedclasses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Renamedclasses.
     */
    skip?: number;
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[];
  };

  /**
   * Renamedclass create
   */
  export type RenamedclassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * The data needed to create a Renamedclass.
     */
    data: XOR<RenamedclassCreateInput, RenamedclassUncheckedCreateInput>;
  };

  /**
   * Renamedclass createMany
   */
  export type RenamedclassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Renamedclasses.
     */
    data: RenamedclassCreateManyInput | RenamedclassCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Renamedclass update
   */
  export type RenamedclassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * The data needed to update a Renamedclass.
     */
    data: XOR<RenamedclassUpdateInput, RenamedclassUncheckedUpdateInput>;
    /**
     * Choose, which Renamedclass to update.
     */
    where: RenamedclassWhereUniqueInput;
  };

  /**
   * Renamedclass updateMany
   */
  export type RenamedclassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Renamedclasses.
     */
    data: XOR<RenamedclassUpdateManyMutationInput, RenamedclassUncheckedUpdateManyInput>;
    /**
     * Filter which Renamedclasses to update
     */
    where?: RenamedclassWhereInput;
  };

  /**
   * Renamedclass upsert
   */
  export type RenamedclassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * The filter to search for the Renamedclass to update in case it exists.
     */
    where: RenamedclassWhereUniqueInput;
    /**
     * In case the Renamedclass found by the `where` argument doesn't exist, create a new Renamedclass with this data.
     */
    create: XOR<RenamedclassCreateInput, RenamedclassUncheckedCreateInput>;
    /**
     * In case the Renamedclass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RenamedclassUpdateInput, RenamedclassUncheckedUpdateInput>;
  };

  /**
   * Renamedclass delete
   */
  export type RenamedclassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    /**
     * Filter which Renamedclass to delete.
     */
    where: RenamedclassWhereUniqueInput;
  };

  /**
   * Renamedclass deleteMany
   */
  export type RenamedclassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Renamedclasses to delete
     */
    where?: RenamedclassWhereInput;
  };

  /**
   * Renamedclass.attendance
   */
  export type Renamedclass$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    where?: attendanceWhereInput;
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    cursor?: attendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * Renamedclass.student
   */
  export type Renamedclass$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    where?: studentWhereInput;
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    cursor?: studentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * Renamedclass without action
   */
  export type RenamedclassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
  };

  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  export type CourseMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CourseMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned courses
     **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseMaxAggregateInputType;
  };

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>;
  };

  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput;
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[];
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum;
    having?: courseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
  };

  export type CourseGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: CourseCountAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CourseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
          : GetScalarType<T[P], CourseGroupByOutputType[P]>;
      }
    >
  >;

  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['course']
  >;

  export type courseSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'course';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['course']
    >;
    composites: {};
  };

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<
    Prisma.$coursePayload,
    S
  >;

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    courseFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CourseCountAggregateInputType | true;
  };

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course']; meta: { name: 'course' } };
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends courseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends courseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends courseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     **/
    create<T extends courseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, courseCreateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Courses.
     *     @param {courseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends courseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     **/
    delete<T extends courseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, courseDeleteArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends courseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends courseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends courseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     **/
    upsert<T extends courseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpsertArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
     **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CourseAggregateArgs>(
      args: Subset<T, CourseAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseAggregateType<T>>;

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the course model
     */
    readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<'course', 'String'>;
    readonly created_at: FieldRef<'course', 'DateTime'>;
    readonly updated_at: FieldRef<'course', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * The data needed to create a course.
     */
    data?: XOR<courseCreateInput, courseUncheckedCreateInput>;
  };

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>;
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput;
  };

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput;
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>;
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
  };

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput;
  };

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
  };

  /**
   * Model exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
  };

  export type ExamMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExamMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ExamCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ExamMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExamMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ExamCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exam to aggregate.
     */
    where?: examWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: examWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned exams
     **/
    _count?: true | ExamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ExamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ExamMaxAggregateInputType;
  };

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
    [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>;
  };

  export type examGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examWhereInput;
    orderBy?: examOrderByWithAggregationInput | examOrderByWithAggregationInput[];
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum;
    having?: examScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExamCountAggregateInputType | true;
    _min?: ExamMinAggregateInputType;
    _max?: ExamMaxAggregateInputType;
  };

  export type ExamGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: ExamCountAggregateOutputType | null;
    _min: ExamMinAggregateOutputType | null;
    _max: ExamMaxAggregateOutputType | null;
  };

  type GetExamGroupByPayload<T extends examGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ExamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
          : GetScalarType<T[P], ExamGroupByOutputType[P]>;
      }
    >
  >;

  export type examSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['exam']
  >;

  export type examSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $examPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'exam';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['exam']
    >;
    composites: {};
  };

  type examGetPayload<S extends boolean | null | undefined | examDefaultArgs> = $Result.GetResult<
    Prisma.$examPayload,
    S
  >;

  type examCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    examFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ExamCountAggregateInputType | true;
  };

  export interface examDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exam']; meta: { name: 'exam' } };
    /**
     * Find zero or one Exam that matches the filter.
     * @param {examFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends examFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, examFindUniqueArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Exam that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {examFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends examFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, examFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends examFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, examFindFirstArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends examFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, examFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     *
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends examFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, examFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Exam.
     * @param {examCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     *
     **/
    create<T extends examCreateArgs<ExtArgs>>(
      args: SelectSubset<T, examCreateArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Exams.
     *     @param {examCreateManyArgs} args - Arguments to create many Exams.
     *     @example
     *     // Create many Exams
     *     const exam = await prisma.exam.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends examCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, examCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Exam.
     * @param {examDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     *
     **/
    delete<T extends examDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, examDeleteArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Exam.
     * @param {examUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends examUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, examUpdateArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Exams.
     * @param {examDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends examDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, examDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends examUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, examUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Exam.
     * @param {examUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     **/
    upsert<T extends examUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, examUpsertArgs<ExtArgs>>,
    ): Prisma__examClient<$Result.GetResult<Prisma.$examPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
     **/
    count<T extends examCountArgs>(
      args?: Subset<T, examCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ExamAggregateArgs>(
      args: Subset<T, ExamAggregateArgs>,
    ): Prisma.PrismaPromise<GetExamAggregateType<T>>;

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends examGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: examGroupByArgs['orderBy'] }
        : { orderBy?: examGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, examGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the exam model
     */
    readonly fields: examFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__examClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the exam model
   */
  interface examFieldRefs {
    readonly id: FieldRef<'exam', 'String'>;
    readonly created_at: FieldRef<'exam', 'DateTime'>;
    readonly updated_at: FieldRef<'exam', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * exam findUnique
   */
  export type examFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * Filter, which exam to fetch.
     */
    where: examWhereUniqueInput;
  };

  /**
   * exam findUniqueOrThrow
   */
  export type examFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * Filter, which exam to fetch.
     */
    where: examWhereUniqueInput;
  };

  /**
   * exam findFirst
   */
  export type examFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * Filter, which exam to fetch.
     */
    where?: examWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for exams.
     */
    cursor?: examWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[];
  };

  /**
   * exam findFirstOrThrow
   */
  export type examFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * Filter, which exam to fetch.
     */
    where?: examWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for exams.
     */
    cursor?: examWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[];
  };

  /**
   * exam findMany
   */
  export type examFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * Filter, which exams to fetch.
     */
    where?: examWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of exams to fetch.
     */
    orderBy?: examOrderByWithRelationInput | examOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing exams.
     */
    cursor?: examWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` exams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` exams.
     */
    skip?: number;
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[];
  };

  /**
   * exam create
   */
  export type examCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * The data needed to create a exam.
     */
    data?: XOR<examCreateInput, examUncheckedCreateInput>;
  };

  /**
   * exam createMany
   */
  export type examCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exams.
     */
    data: examCreateManyInput | examCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * exam update
   */
  export type examUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * The data needed to update a exam.
     */
    data: XOR<examUpdateInput, examUncheckedUpdateInput>;
    /**
     * Choose, which exam to update.
     */
    where: examWhereUniqueInput;
  };

  /**
   * exam updateMany
   */
  export type examUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exams.
     */
    data: XOR<examUpdateManyMutationInput, examUncheckedUpdateManyInput>;
    /**
     * Filter which exams to update
     */
    where?: examWhereInput;
  };

  /**
   * exam upsert
   */
  export type examUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * The filter to search for the exam to update in case it exists.
     */
    where: examWhereUniqueInput;
    /**
     * In case the exam found by the `where` argument doesn't exist, create a new exam with this data.
     */
    create: XOR<examCreateInput, examUncheckedCreateInput>;
    /**
     * In case the exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<examUpdateInput, examUncheckedUpdateInput>;
  };

  /**
   * exam delete
   */
  export type examDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
    /**
     * Filter which exam to delete.
     */
    where: examWhereUniqueInput;
  };

  /**
   * exam deleteMany
   */
  export type examDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exams to delete
     */
    where?: examWhereInput;
  };

  /**
   * exam without action
   */
  export type examDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exam
     */
    select?: examSelect<ExtArgs> | null;
  };

  /**
   * Model homework
   */

  export type AggregateHomework = {
    _count: HomeworkCountAggregateOutputType | null;
    _min: HomeworkMinAggregateOutputType | null;
    _max: HomeworkMaxAggregateOutputType | null;
  };

  export type HomeworkMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HomeworkMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type HomeworkCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type HomeworkMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HomeworkMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type HomeworkCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type HomeworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homework to aggregate.
     */
    where?: homeworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homework to fetch.
     */
    orderBy?: homeworkOrderByWithRelationInput | homeworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: homeworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homework from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homework.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned homework
     **/
    _count?: true | HomeworkCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: HomeworkMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: HomeworkMaxAggregateInputType;
  };

  export type GetHomeworkAggregateType<T extends HomeworkAggregateArgs> = {
    [P in keyof T & keyof AggregateHomework]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomework[P]>
      : GetScalarType<T[P], AggregateHomework[P]>;
  };

  export type homeworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: homeworkWhereInput;
    orderBy?: homeworkOrderByWithAggregationInput | homeworkOrderByWithAggregationInput[];
    by: HomeworkScalarFieldEnum[] | HomeworkScalarFieldEnum;
    having?: homeworkScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HomeworkCountAggregateInputType | true;
    _min?: HomeworkMinAggregateInputType;
    _max?: HomeworkMaxAggregateInputType;
  };

  export type HomeworkGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: HomeworkCountAggregateOutputType | null;
    _min: HomeworkMinAggregateOutputType | null;
    _max: HomeworkMaxAggregateOutputType | null;
  };

  type GetHomeworkGroupByPayload<T extends homeworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeworkGroupByOutputType, T['by']> & {
        [P in keyof T & keyof HomeworkGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], HomeworkGroupByOutputType[P]>
          : GetScalarType<T[P], HomeworkGroupByOutputType[P]>;
      }
    >
  >;

  export type homeworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['homework']
    >;

  export type homeworkSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $homeworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'homework';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['homework']
    >;
    composites: {};
  };

  type homeworkGetPayload<S extends boolean | null | undefined | homeworkDefaultArgs> = $Result.GetResult<
    Prisma.$homeworkPayload,
    S
  >;

  type homeworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    homeworkFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: HomeworkCountAggregateInputType | true;
  };

  export interface homeworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['homework']; meta: { name: 'homework' } };
    /**
     * Find zero or one Homework that matches the filter.
     * @param {homeworkFindUniqueArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends homeworkFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, homeworkFindUniqueArgs<ExtArgs>>,
    ): Prisma__homeworkClient<
      $Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Homework that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {homeworkFindUniqueOrThrowArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends homeworkFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, homeworkFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__homeworkClient<
      $Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Homework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeworkFindFirstArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends homeworkFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, homeworkFindFirstArgs<ExtArgs>>,
    ): Prisma__homeworkClient<
      $Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Homework that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeworkFindFirstOrThrowArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends homeworkFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, homeworkFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__homeworkClient<
      $Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Homework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeworkFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homework
     * const homework = await prisma.homework.findMany()
     *
     * // Get first 10 Homework
     * const homework = await prisma.homework.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const homeworkWithIdOnly = await prisma.homework.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends homeworkFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, homeworkFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Homework.
     * @param {homeworkCreateArgs} args - Arguments to create a Homework.
     * @example
     * // Create one Homework
     * const Homework = await prisma.homework.create({
     *   data: {
     *     // ... data to create a Homework
     *   }
     * })
     *
     **/
    create<T extends homeworkCreateArgs<ExtArgs>>(
      args: SelectSubset<T, homeworkCreateArgs<ExtArgs>>,
    ): Prisma__homeworkClient<$Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Homework.
     *     @param {homeworkCreateManyArgs} args - Arguments to create many Homework.
     *     @example
     *     // Create many Homework
     *     const homework = await prisma.homework.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends homeworkCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, homeworkCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Homework.
     * @param {homeworkDeleteArgs} args - Arguments to delete one Homework.
     * @example
     * // Delete one Homework
     * const Homework = await prisma.homework.delete({
     *   where: {
     *     // ... filter to delete one Homework
     *   }
     * })
     *
     **/
    delete<T extends homeworkDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, homeworkDeleteArgs<ExtArgs>>,
    ): Prisma__homeworkClient<$Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Homework.
     * @param {homeworkUpdateArgs} args - Arguments to update one Homework.
     * @example
     * // Update one Homework
     * const homework = await prisma.homework.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends homeworkUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, homeworkUpdateArgs<ExtArgs>>,
    ): Prisma__homeworkClient<$Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Homework.
     * @param {homeworkDeleteManyArgs} args - Arguments to filter Homework to delete.
     * @example
     * // Delete a few Homework
     * const { count } = await prisma.homework.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends homeworkDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, homeworkDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homework
     * const homework = await prisma.homework.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends homeworkUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, homeworkUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Homework.
     * @param {homeworkUpsertArgs} args - Arguments to update or create a Homework.
     * @example
     * // Update or create a Homework
     * const homework = await prisma.homework.upsert({
     *   create: {
     *     // ... data to create a Homework
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Homework we want to update
     *   }
     * })
     **/
    upsert<T extends homeworkUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, homeworkUpsertArgs<ExtArgs>>,
    ): Prisma__homeworkClient<$Result.GetResult<Prisma.$homeworkPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeworkCountArgs} args - Arguments to filter Homework to count.
     * @example
     * // Count the number of Homework
     * const count = await prisma.homework.count({
     *   where: {
     *     // ... the filter for the Homework we want to count
     *   }
     * })
     **/
    count<T extends homeworkCountArgs>(
      args?: Subset<T, homeworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeworkCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends HomeworkAggregateArgs>(
      args: Subset<T, HomeworkAggregateArgs>,
    ): Prisma.PrismaPromise<GetHomeworkAggregateType<T>>;

    /**
     * Group by Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {homeworkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends homeworkGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: homeworkGroupByArgs['orderBy'] }
        : { orderBy?: homeworkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, homeworkGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHomeworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the homework model
     */
    readonly fields: homeworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for homework.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__homeworkClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the homework model
   */
  interface homeworkFieldRefs {
    readonly id: FieldRef<'homework', 'String'>;
    readonly created_at: FieldRef<'homework', 'DateTime'>;
    readonly updated_at: FieldRef<'homework', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * homework findUnique
   */
  export type homeworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * Filter, which homework to fetch.
     */
    where: homeworkWhereUniqueInput;
  };

  /**
   * homework findUniqueOrThrow
   */
  export type homeworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * Filter, which homework to fetch.
     */
    where: homeworkWhereUniqueInput;
  };

  /**
   * homework findFirst
   */
  export type homeworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * Filter, which homework to fetch.
     */
    where?: homeworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homework to fetch.
     */
    orderBy?: homeworkOrderByWithRelationInput | homeworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for homework.
     */
    cursor?: homeworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homework from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homework.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of homework.
     */
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[];
  };

  /**
   * homework findFirstOrThrow
   */
  export type homeworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * Filter, which homework to fetch.
     */
    where?: homeworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homework to fetch.
     */
    orderBy?: homeworkOrderByWithRelationInput | homeworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for homework.
     */
    cursor?: homeworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homework from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homework.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of homework.
     */
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[];
  };

  /**
   * homework findMany
   */
  export type homeworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * Filter, which homework to fetch.
     */
    where?: homeworkWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of homework to fetch.
     */
    orderBy?: homeworkOrderByWithRelationInput | homeworkOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing homework.
     */
    cursor?: homeworkWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` homework from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` homework.
     */
    skip?: number;
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[];
  };

  /**
   * homework create
   */
  export type homeworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * The data needed to create a homework.
     */
    data?: XOR<homeworkCreateInput, homeworkUncheckedCreateInput>;
  };

  /**
   * homework createMany
   */
  export type homeworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many homework.
     */
    data: homeworkCreateManyInput | homeworkCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * homework update
   */
  export type homeworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * The data needed to update a homework.
     */
    data: XOR<homeworkUpdateInput, homeworkUncheckedUpdateInput>;
    /**
     * Choose, which homework to update.
     */
    where: homeworkWhereUniqueInput;
  };

  /**
   * homework updateMany
   */
  export type homeworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update homework.
     */
    data: XOR<homeworkUpdateManyMutationInput, homeworkUncheckedUpdateManyInput>;
    /**
     * Filter which homework to update
     */
    where?: homeworkWhereInput;
  };

  /**
   * homework upsert
   */
  export type homeworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * The filter to search for the homework to update in case it exists.
     */
    where: homeworkWhereUniqueInput;
    /**
     * In case the homework found by the `where` argument doesn't exist, create a new homework with this data.
     */
    create: XOR<homeworkCreateInput, homeworkUncheckedCreateInput>;
    /**
     * In case the homework was found with the provided `where` argument, update it with this data.
     */
    update: XOR<homeworkUpdateInput, homeworkUncheckedUpdateInput>;
  };

  /**
   * homework delete
   */
  export type homeworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
    /**
     * Filter which homework to delete.
     */
    where: homeworkWhereUniqueInput;
  };

  /**
   * homework deleteMany
   */
  export type homeworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which homework to delete
     */
    where?: homeworkWhereInput;
  };

  /**
   * homework without action
   */
  export type homeworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the homework
     */
    select?: homeworkSelect<ExtArgs> | null;
  };

  /**
   * Model schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  export type ScheduleMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ScheduleCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ScheduleMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ScheduleCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedule to aggregate.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schedules
     **/
    _count?: true | ScheduleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ScheduleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ScheduleMaxAggregateInputType;
  };

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
    [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>;
  };

  export type scheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: scheduleWhereInput;
    orderBy?: scheduleOrderByWithAggregationInput | scheduleOrderByWithAggregationInput[];
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum;
    having?: scheduleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScheduleCountAggregateInputType | true;
    _min?: ScheduleMinAggregateInputType;
    _max?: ScheduleMaxAggregateInputType;
  };

  export type ScheduleGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: ScheduleCountAggregateOutputType | null;
    _min: ScheduleMinAggregateOutputType | null;
    _max: ScheduleMaxAggregateOutputType | null;
  };

  type GetScheduleGroupByPayload<T extends scheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ScheduleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
          : GetScalarType<T[P], ScheduleGroupByOutputType[P]>;
      }
    >
  >;

  export type scheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['schedule']
    >;

  export type scheduleSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $schedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'schedule';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['schedule']
    >;
    composites: {};
  };

  type scheduleGetPayload<S extends boolean | null | undefined | scheduleDefaultArgs> = $Result.GetResult<
    Prisma.$schedulePayload,
    S
  >;

  type scheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    scheduleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ScheduleCountAggregateInputType | true;
  };

  export interface scheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['schedule']; meta: { name: 'schedule' } };
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {scheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends scheduleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleFindUniqueArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Schedule that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {scheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends scheduleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends scheduleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends scheduleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__scheduleClient<
      $Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     *
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends scheduleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Schedule.
     * @param {scheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     *
     **/
    create<T extends scheduleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleCreateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schedules.
     *     @param {scheduleCreateManyArgs} args - Arguments to create many Schedules.
     *     @example
     *     // Create many Schedules
     *     const schedule = await prisma.schedule.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends scheduleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Schedule.
     * @param {scheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     *
     **/
    delete<T extends scheduleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleDeleteArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Schedule.
     * @param {scheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends scheduleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schedules.
     * @param {scheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends scheduleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, scheduleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends scheduleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Schedule.
     * @param {scheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     **/
    upsert<T extends scheduleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, scheduleUpsertArgs<ExtArgs>>,
    ): Prisma__scheduleClient<$Result.GetResult<Prisma.$schedulePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
     **/
    count<T extends scheduleCountArgs>(
      args?: Subset<T, scheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ScheduleAggregateArgs>(
      args: Subset<T, ScheduleAggregateArgs>,
    ): Prisma.PrismaPromise<GetScheduleAggregateType<T>>;

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {scheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends scheduleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: scheduleGroupByArgs['orderBy'] }
        : { orderBy?: scheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, scheduleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the schedule model
     */
    readonly fields: scheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__scheduleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the schedule model
   */
  interface scheduleFieldRefs {
    readonly id: FieldRef<'schedule', 'String'>;
    readonly created_at: FieldRef<'schedule', 'DateTime'>;
    readonly updated_at: FieldRef<'schedule', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * schedule findUnique
   */
  export type scheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findUniqueOrThrow
   */
  export type scheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule findFirst
   */
  export type scheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findFirstOrThrow
   */
  export type scheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedule to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule findMany
   */
  export type scheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter, which schedules to fetch.
     */
    where?: scheduleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schedules to fetch.
     */
    orderBy?: scheduleOrderByWithRelationInput | scheduleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schedules.
     */
    cursor?: scheduleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schedules from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schedules.
     */
    skip?: number;
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[];
  };

  /**
   * schedule create
   */
  export type scheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to create a schedule.
     */
    data?: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
  };

  /**
   * schedule createMany
   */
  export type scheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schedules.
     */
    data: scheduleCreateManyInput | scheduleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * schedule update
   */
  export type scheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The data needed to update a schedule.
     */
    data: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
    /**
     * Choose, which schedule to update.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule updateMany
   */
  export type scheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schedules.
     */
    data: XOR<scheduleUpdateManyMutationInput, scheduleUncheckedUpdateManyInput>;
    /**
     * Filter which schedules to update
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule upsert
   */
  export type scheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * The filter to search for the schedule to update in case it exists.
     */
    where: scheduleWhereUniqueInput;
    /**
     * In case the schedule found by the `where` argument doesn't exist, create a new schedule with this data.
     */
    create: XOR<scheduleCreateInput, scheduleUncheckedCreateInput>;
    /**
     * In case the schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<scheduleUpdateInput, scheduleUncheckedUpdateInput>;
  };

  /**
   * schedule delete
   */
  export type scheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
    /**
     * Filter which schedule to delete.
     */
    where: scheduleWhereUniqueInput;
  };

  /**
   * schedule deleteMany
   */
  export type scheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schedules to delete
     */
    where?: scheduleWhereInput;
  };

  /**
   * schedule without action
   */
  export type scheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the schedule
     */
    select?: scheduleSelect<ExtArgs> | null;
  };

  /**
   * Model school
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _avg: SchoolAvgAggregateOutputType | null;
    _sum: SchoolSumAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  export type SchoolAvgAggregateOutputType = {
    number_of_students: number | null;
  };

  export type SchoolSumAggregateOutputType = {
    number_of_students: number | null;
  };

  export type SchoolMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    number_of_students: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    number_of_students: number | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolCountAggregateOutputType = {
    id: number;
    description: number;
    number_of_students: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type SchoolAvgAggregateInputType = {
    number_of_students?: true;
  };

  export type SchoolSumAggregateInputType = {
    number_of_students?: true;
  };

  export type SchoolMinAggregateInputType = {
    id?: true;
    description?: true;
    number_of_students?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolMaxAggregateInputType = {
    id?: true;
    description?: true;
    number_of_students?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolCountAggregateInputType = {
    id?: true;
    description?: true;
    number_of_students?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which school to aggregate.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schools
     **/
    _count?: true | SchoolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: SchoolAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: SchoolSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SchoolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SchoolMaxAggregateInputType;
  };

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>;
  };

  export type schoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithAggregationInput | schoolOrderByWithAggregationInput[];
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum;
    having?: schoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _avg?: SchoolAvgAggregateInputType;
    _sum?: SchoolSumAggregateInputType;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
  };

  export type SchoolGroupByOutputType = {
    id: string;
    description: string | null;
    number_of_students: number | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: SchoolCountAggregateOutputType | null;
    _avg: SchoolAvgAggregateOutputType | null;
    _sum: SchoolSumAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  type GetSchoolGroupByPayload<T extends schoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SchoolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
          : GetScalarType<T[P], SchoolGroupByOutputType[P]>;
      }
    >
  >;

  export type schoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      number_of_students?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      Renamedclass?: boolean | school$RenamedclassArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      student?: boolean | school$studentArgs<ExtArgs>;
      _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['school']
  >;

  export type schoolSelectScalar = {
    id?: boolean;
    description?: boolean;
    number_of_students?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type schoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | school$RenamedclassArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    student?: boolean | school$studentArgs<ExtArgs>;
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $schoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'school';
    objects: {
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      student: Prisma.$studentPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        number_of_students: number | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['school']
    >;
    composites: {};
  };

  type schoolGetPayload<S extends boolean | null | undefined | schoolDefaultArgs> = $Result.GetResult<
    Prisma.$schoolPayload,
    S
  >;

  type schoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    schoolFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SchoolCountAggregateInputType | true;
  };

  export interface schoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['school']; meta: { name: 'school' } };
    /**
     * Find zero or one School that matches the filter.
     * @param {schoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends schoolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, schoolFindUniqueArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one School that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {schoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends schoolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends schoolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends schoolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     *
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends schoolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a School.
     * @param {schoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     *
     **/
    create<T extends schoolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolCreateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schools.
     *     @param {schoolCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const school = await prisma.school.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends schoolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a School.
     * @param {schoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     *
     **/
    delete<T extends schoolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, schoolDeleteArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one School.
     * @param {schoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends schoolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schools.
     * @param {schoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends schoolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends schoolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one School.
     * @param {schoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     **/
    upsert<T extends schoolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpsertArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
     **/
    count<T extends schoolCountArgs>(
      args?: Subset<T, schoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SchoolAggregateArgs>(
      args: Subset<T, SchoolAggregateArgs>,
    ): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends schoolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolGroupByArgs['orderBy'] }
        : { orderBy?: schoolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, schoolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the school model
     */
    readonly fields: schoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for school.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Renamedclass<T extends school$RenamedclassArgs<ExtArgs> = {}>(
      args?: Subset<T, school$RenamedclassArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    student<T extends school$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, school$studentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the school model
   */
  interface schoolFieldRefs {
    readonly id: FieldRef<'school', 'String'>;
    readonly description: FieldRef<'school', 'String'>;
    readonly number_of_students: FieldRef<'school', 'Int'>;
    readonly name: FieldRef<'school', 'String'>;
    readonly created_at: FieldRef<'school', 'DateTime'>;
    readonly updated_at: FieldRef<'school', 'DateTime'>;
    readonly user_id: FieldRef<'school', 'String'>;
    readonly tenant_id: FieldRef<'school', 'String'>;
  }

  // Custom InputTypes

  /**
   * school findUnique
   */
  export type schoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findUniqueOrThrow
   */
  export type schoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findFirst
   */
  export type schoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findFirstOrThrow
   */
  export type schoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findMany
   */
  export type schoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school create
   */
  export type schoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to create a school.
     */
    data: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
  };

  /**
   * school createMany
   */
  export type schoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolCreateManyInput | schoolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * school update
   */
  export type schoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to update a school.
     */
    data: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
    /**
     * Choose, which school to update.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school updateMany
   */
  export type schoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyInput>;
    /**
     * Filter which schools to update
     */
    where?: schoolWhereInput;
  };

  /**
   * school upsert
   */
  export type schoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The filter to search for the school to update in case it exists.
     */
    where: schoolWhereUniqueInput;
    /**
     * In case the school found by the `where` argument doesn't exist, create a new school with this data.
     */
    create: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
    /**
     * In case the school was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
  };

  /**
   * school delete
   */
  export type schoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter which school to delete.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school deleteMany
   */
  export type schoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolWhereInput;
  };

  /**
   * school.Renamedclass
   */
  export type school$RenamedclassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    where?: RenamedclassWhereInput;
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[];
    cursor?: RenamedclassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[];
  };

  /**
   * school.student
   */
  export type school$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    where?: studentWhereInput;
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    cursor?: studentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * school without action
   */
  export type schoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
  };

  /**
   * Model semester
   */

  export type AggregateSemester = {
    _count: SemesterCountAggregateOutputType | null;
    _min: SemesterMinAggregateOutputType | null;
    _max: SemesterMaxAggregateOutputType | null;
  };

  export type SemesterMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SemesterMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SemesterCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SemesterMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SemesterMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SemesterCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SemesterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semester to aggregate.
     */
    where?: semesterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: semesterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` semesters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned semesters
     **/
    _count?: true | SemesterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SemesterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SemesterMaxAggregateInputType;
  };

  export type GetSemesterAggregateType<T extends SemesterAggregateArgs> = {
    [P in keyof T & keyof AggregateSemester]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemester[P]>
      : GetScalarType<T[P], AggregateSemester[P]>;
  };

  export type semesterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: semesterWhereInput;
    orderBy?: semesterOrderByWithAggregationInput | semesterOrderByWithAggregationInput[];
    by: SemesterScalarFieldEnum[] | SemesterScalarFieldEnum;
    having?: semesterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SemesterCountAggregateInputType | true;
    _min?: SemesterMinAggregateInputType;
    _max?: SemesterMaxAggregateInputType;
  };

  export type SemesterGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: SemesterCountAggregateOutputType | null;
    _min: SemesterMinAggregateOutputType | null;
    _max: SemesterMaxAggregateOutputType | null;
  };

  type GetSemesterGroupByPayload<T extends semesterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemesterGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SemesterGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SemesterGroupByOutputType[P]>
          : GetScalarType<T[P], SemesterGroupByOutputType[P]>;
      }
    >
  >;

  export type semesterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['semester']
    >;

  export type semesterSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $semesterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'semester';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['semester']
    >;
    composites: {};
  };

  type semesterGetPayload<S extends boolean | null | undefined | semesterDefaultArgs> = $Result.GetResult<
    Prisma.$semesterPayload,
    S
  >;

  type semesterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    semesterFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SemesterCountAggregateInputType | true;
  };

  export interface semesterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['semester']; meta: { name: 'semester' } };
    /**
     * Find zero or one Semester that matches the filter.
     * @param {semesterFindUniqueArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends semesterFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, semesterFindUniqueArgs<ExtArgs>>,
    ): Prisma__semesterClient<
      $Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Semester that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {semesterFindUniqueOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends semesterFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, semesterFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__semesterClient<
      $Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Semester that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterFindFirstArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends semesterFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, semesterFindFirstArgs<ExtArgs>>,
    ): Prisma__semesterClient<
      $Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Semester that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterFindFirstOrThrowArgs} args - Arguments to find a Semester
     * @example
     * // Get one Semester
     * const semester = await prisma.semester.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends semesterFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, semesterFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__semesterClient<
      $Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Semesters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semesters
     * const semesters = await prisma.semester.findMany()
     *
     * // Get first 10 Semesters
     * const semesters = await prisma.semester.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const semesterWithIdOnly = await prisma.semester.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends semesterFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, semesterFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Semester.
     * @param {semesterCreateArgs} args - Arguments to create a Semester.
     * @example
     * // Create one Semester
     * const Semester = await prisma.semester.create({
     *   data: {
     *     // ... data to create a Semester
     *   }
     * })
     *
     **/
    create<T extends semesterCreateArgs<ExtArgs>>(
      args: SelectSubset<T, semesterCreateArgs<ExtArgs>>,
    ): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Semesters.
     *     @param {semesterCreateManyArgs} args - Arguments to create many Semesters.
     *     @example
     *     // Create many Semesters
     *     const semester = await prisma.semester.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends semesterCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, semesterCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Semester.
     * @param {semesterDeleteArgs} args - Arguments to delete one Semester.
     * @example
     * // Delete one Semester
     * const Semester = await prisma.semester.delete({
     *   where: {
     *     // ... filter to delete one Semester
     *   }
     * })
     *
     **/
    delete<T extends semesterDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, semesterDeleteArgs<ExtArgs>>,
    ): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Semester.
     * @param {semesterUpdateArgs} args - Arguments to update one Semester.
     * @example
     * // Update one Semester
     * const semester = await prisma.semester.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends semesterUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, semesterUpdateArgs<ExtArgs>>,
    ): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Semesters.
     * @param {semesterDeleteManyArgs} args - Arguments to filter Semesters to delete.
     * @example
     * // Delete a few Semesters
     * const { count } = await prisma.semester.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends semesterDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, semesterDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semesters
     * const semester = await prisma.semester.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends semesterUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, semesterUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Semester.
     * @param {semesterUpsertArgs} args - Arguments to update or create a Semester.
     * @example
     * // Update or create a Semester
     * const semester = await prisma.semester.upsert({
     *   create: {
     *     // ... data to create a Semester
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semester we want to update
     *   }
     * })
     **/
    upsert<T extends semesterUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, semesterUpsertArgs<ExtArgs>>,
    ): Prisma__semesterClient<$Result.GetResult<Prisma.$semesterPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Semesters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterCountArgs} args - Arguments to filter Semesters to count.
     * @example
     * // Count the number of Semesters
     * const count = await prisma.semester.count({
     *   where: {
     *     // ... the filter for the Semesters we want to count
     *   }
     * })
     **/
    count<T extends semesterCountArgs>(
      args?: Subset<T, semesterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemesterCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemesterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SemesterAggregateArgs>(
      args: Subset<T, SemesterAggregateArgs>,
    ): Prisma.PrismaPromise<GetSemesterAggregateType<T>>;

    /**
     * Group by Semester.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semesterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends semesterGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: semesterGroupByArgs['orderBy'] }
        : { orderBy?: semesterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, semesterGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSemesterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the semester model
     */
    readonly fields: semesterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for semester.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__semesterClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the semester model
   */
  interface semesterFieldRefs {
    readonly id: FieldRef<'semester', 'String'>;
    readonly created_at: FieldRef<'semester', 'DateTime'>;
    readonly updated_at: FieldRef<'semester', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * semester findUnique
   */
  export type semesterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * Filter, which semester to fetch.
     */
    where: semesterWhereUniqueInput;
  };

  /**
   * semester findUniqueOrThrow
   */
  export type semesterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * Filter, which semester to fetch.
     */
    where: semesterWhereUniqueInput;
  };

  /**
   * semester findFirst
   */
  export type semesterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * Filter, which semester to fetch.
     */
    where?: semesterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for semesters.
     */
    cursor?: semesterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` semesters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[];
  };

  /**
   * semester findFirstOrThrow
   */
  export type semesterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * Filter, which semester to fetch.
     */
    where?: semesterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for semesters.
     */
    cursor?: semesterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` semesters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of semesters.
     */
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[];
  };

  /**
   * semester findMany
   */
  export type semesterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * Filter, which semesters to fetch.
     */
    where?: semesterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of semesters to fetch.
     */
    orderBy?: semesterOrderByWithRelationInput | semesterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing semesters.
     */
    cursor?: semesterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` semesters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` semesters.
     */
    skip?: number;
    distinct?: SemesterScalarFieldEnum | SemesterScalarFieldEnum[];
  };

  /**
   * semester create
   */
  export type semesterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * The data needed to create a semester.
     */
    data?: XOR<semesterCreateInput, semesterUncheckedCreateInput>;
  };

  /**
   * semester createMany
   */
  export type semesterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many semesters.
     */
    data: semesterCreateManyInput | semesterCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * semester update
   */
  export type semesterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * The data needed to update a semester.
     */
    data: XOR<semesterUpdateInput, semesterUncheckedUpdateInput>;
    /**
     * Choose, which semester to update.
     */
    where: semesterWhereUniqueInput;
  };

  /**
   * semester updateMany
   */
  export type semesterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update semesters.
     */
    data: XOR<semesterUpdateManyMutationInput, semesterUncheckedUpdateManyInput>;
    /**
     * Filter which semesters to update
     */
    where?: semesterWhereInput;
  };

  /**
   * semester upsert
   */
  export type semesterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * The filter to search for the semester to update in case it exists.
     */
    where: semesterWhereUniqueInput;
    /**
     * In case the semester found by the `where` argument doesn't exist, create a new semester with this data.
     */
    create: XOR<semesterCreateInput, semesterUncheckedCreateInput>;
    /**
     * In case the semester was found with the provided `where` argument, update it with this data.
     */
    update: XOR<semesterUpdateInput, semesterUncheckedUpdateInput>;
  };

  /**
   * semester delete
   */
  export type semesterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
    /**
     * Filter which semester to delete.
     */
    where: semesterWhereUniqueInput;
  };

  /**
   * semester deleteMany
   */
  export type semesterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semesters to delete
     */
    where?: semesterWhereInput;
  };

  /**
   * semester without action
   */
  export type semesterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semester
     */
    select?: semesterSelect<ExtArgs> | null;
  };

  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  export type StudentMinAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    date_of_birth: Date | null;
    gender: string | null;
    class_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StudentMaxAggregateOutputType = {
    id: string | null;
    first_name: string | null;
    last_name: string | null;
    date_of_birth: Date | null;
    gender: string | null;
    class_id: string | null;
    school_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StudentCountAggregateOutputType = {
    id: number;
    first_name: number;
    last_name: number;
    date_of_birth: number;
    gender: number;
    class_id: number;
    school_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StudentMinAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    date_of_birth?: true;
    gender?: true;
    class_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StudentMaxAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    date_of_birth?: true;
    gender?: true;
    class_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StudentCountAggregateInputType = {
    id?: true;
    first_name?: true;
    last_name?: true;
    date_of_birth?: true;
    gender?: true;
    class_id?: true;
    school_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned students
     **/
    _count?: true | StudentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudentMaxAggregateInputType;
  };

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>;
  };

  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput;
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[];
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum;
    having?: studentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
  };

  export type StudentGroupByOutputType = {
    id: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    gender: string;
    class_id: string;
    school_id: string;
    created_at: Date;
    updated_at: Date;
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StudentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
          : GetScalarType<T[P], StudentGroupByOutputType[P]>;
      }
    >
  >;

  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      date_of_birth?: boolean;
      gender?: boolean;
      class_id?: boolean;
      school_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      attendance?: boolean | student$attendanceArgs<ExtArgs>;
      Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>;
      school?: boolean | schoolDefaultArgs<ExtArgs>;
      _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['student']
  >;

  export type studentSelectScalar = {
    id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    date_of_birth?: boolean;
    gender?: boolean;
    class_id?: boolean;
    school_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendance?: boolean | student$attendanceArgs<ExtArgs>;
    Renamedclass?: boolean | RenamedclassDefaultArgs<ExtArgs>;
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'student';
    objects: {
      attendance: Prisma.$attendancePayload<ExtArgs>[];
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>;
      school: Prisma.$schoolPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        first_name: string;
        last_name: string;
        date_of_birth: Date;
        gender: string;
        class_id: string;
        school_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['student']
    >;
    composites: {};
  };

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<
    Prisma.$studentPayload,
    S
  >;

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    studentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: StudentCountAggregateInputType | true;
  };

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student']; meta: { name: 'student' } };
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends studentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends studentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends studentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     *
     **/
    create<T extends studentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, studentCreateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Students.
     *     @param {studentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends studentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     *
     **/
    delete<T extends studentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, studentDeleteArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends studentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends studentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends studentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     **/
    upsert<T extends studentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpsertArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
     **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends StudentAggregateArgs>(
      args: Subset<T, StudentAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudentAggregateType<T>>;

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the student model
     */
    readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    attendance<T extends student$attendanceArgs<ExtArgs> = {}>(
      args?: Subset<T, student$attendanceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, 'findMany'> | Null>;

    Renamedclass<T extends RenamedclassDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RenamedclassDefaultArgs<ExtArgs>>,
    ): Prisma__RenamedclassClient<
      $Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<'student', 'String'>;
    readonly first_name: FieldRef<'student', 'String'>;
    readonly last_name: FieldRef<'student', 'String'>;
    readonly date_of_birth: FieldRef<'student', 'DateTime'>;
    readonly gender: FieldRef<'student', 'String'>;
    readonly class_id: FieldRef<'student', 'String'>;
    readonly school_id: FieldRef<'student', 'String'>;
    readonly created_at: FieldRef<'student', 'DateTime'>;
    readonly updated_at: FieldRef<'student', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>;
  };

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: studentWhereInput;
  };

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput;
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>;
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
  };

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput;
  };

  /**
   * student.attendance
   */
  export type student$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: attendanceInclude<ExtArgs> | null;
    where?: attendanceWhereInput;
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[];
    cursor?: attendanceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[];
  };

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
  };

  /**
   * Model subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
  };

  export type SubjectMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SubjectMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type SubjectCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type SubjectMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SubjectMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type SubjectCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject to aggregate.
     */
    where?: subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned subjects
     **/
    _count?: true | SubjectCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SubjectMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SubjectMaxAggregateInputType;
  };

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
    [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>;
  };

  export type subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput;
    orderBy?: subjectOrderByWithAggregationInput | subjectOrderByWithAggregationInput[];
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum;
    having?: subjectScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubjectCountAggregateInputType | true;
    _min?: SubjectMinAggregateInputType;
    _max?: SubjectMaxAggregateInputType;
  };

  export type SubjectGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: SubjectCountAggregateOutputType | null;
    _min: SubjectMinAggregateOutputType | null;
    _max: SubjectMaxAggregateOutputType | null;
  };

  type GetSubjectGroupByPayload<T extends subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SubjectGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
          : GetScalarType<T[P], SubjectGroupByOutputType[P]>;
      }
    >
  >;

  export type subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['subject']
  >;

  export type subjectSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'subject';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['subject']
    >;
    composites: {};
  };

  type subjectGetPayload<S extends boolean | null | undefined | subjectDefaultArgs> = $Result.GetResult<
    Prisma.$subjectPayload,
    S
  >;

  type subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    subjectFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SubjectCountAggregateInputType | true;
  };

  export interface subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject']; meta: { name: 'subject' } };
    /**
     * Find zero or one Subject that matches the filter.
     * @param {subjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends subjectFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, subjectFindUniqueArgs<ExtArgs>>,
    ): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Subject that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {subjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends subjectFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subjectFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__subjectClient<
      $Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends subjectFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, subjectFindFirstArgs<ExtArgs>>,
    ): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends subjectFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, subjectFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     *
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends subjectFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subjectFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Subject.
     * @param {subjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     *
     **/
    create<T extends subjectCreateArgs<ExtArgs>>(
      args: SelectSubset<T, subjectCreateArgs<ExtArgs>>,
    ): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Subjects.
     *     @param {subjectCreateManyArgs} args - Arguments to create many Subjects.
     *     @example
     *     // Create many Subjects
     *     const subject = await prisma.subject.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends subjectCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subjectCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Subject.
     * @param {subjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     *
     **/
    delete<T extends subjectDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, subjectDeleteArgs<ExtArgs>>,
    ): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Subject.
     * @param {subjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends subjectUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, subjectUpdateArgs<ExtArgs>>,
    ): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Subjects.
     * @param {subjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends subjectDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, subjectDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends subjectUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, subjectUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Subject.
     * @param {subjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     **/
    upsert<T extends subjectUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, subjectUpsertArgs<ExtArgs>>,
    ): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
     **/
    count<T extends subjectCountArgs>(
      args?: Subset<T, subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SubjectAggregateArgs>(
      args: Subset<T, SubjectAggregateArgs>,
    ): Prisma.PrismaPromise<GetSubjectAggregateType<T>>;

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends subjectGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectGroupByArgs['orderBy'] }
        : { orderBy?: subjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, subjectGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the subject model
     */
    readonly fields: subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the subject model
   */
  interface subjectFieldRefs {
    readonly id: FieldRef<'subject', 'String'>;
    readonly created_at: FieldRef<'subject', 'DateTime'>;
    readonly updated_at: FieldRef<'subject', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * subject findUnique
   */
  export type subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput;
  };

  /**
   * subject findUniqueOrThrow
   */
  export type subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput;
  };

  /**
   * subject findFirst
   */
  export type subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * subject findFirstOrThrow
   */
  export type subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * subject findMany
   */
  export type subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing subjects.
     */
    cursor?: subjectWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` subjects.
     */
    skip?: number;
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[];
  };

  /**
   * subject create
   */
  export type subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * The data needed to create a subject.
     */
    data?: XOR<subjectCreateInput, subjectUncheckedCreateInput>;
  };

  /**
   * subject createMany
   */
  export type subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * subject update
   */
  export type subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * The data needed to update a subject.
     */
    data: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>;
    /**
     * Choose, which subject to update.
     */
    where: subjectWhereUniqueInput;
  };

  /**
   * subject updateMany
   */
  export type subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>;
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput;
  };

  /**
   * subject upsert
   */
  export type subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * The filter to search for the subject to update in case it exists.
     */
    where: subjectWhereUniqueInput;
    /**
     * In case the subject found by the `where` argument doesn't exist, create a new subject with this data.
     */
    create: XOR<subjectCreateInput, subjectUncheckedCreateInput>;
    /**
     * In case the subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>;
  };

  /**
   * subject delete
   */
  export type subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
    /**
     * Filter which subject to delete.
     */
    where: subjectWhereUniqueInput;
  };

  /**
   * subject deleteMany
   */
  export type subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectWhereInput;
  };

  /**
   * subject without action
   */
  export type subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null;
  };

  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  export type TeacherMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeacherMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teachers
     **/
    _count?: true | TeacherCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeacherMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeacherMaxAggregateInputType;
  };

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>;
  };

  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[];
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum;
    having?: teacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherCountAggregateInputType | true;
    _min?: TeacherMinAggregateInputType;
    _max?: TeacherMaxAggregateInputType;
  };

  export type TeacherGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeacherGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
          : GetScalarType<T[P], TeacherGroupByOutputType[P]>;
      }
    >
  >;

  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['teacher']
  >;

  export type teacherSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'teacher';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['teacher']
    >;
    composites: {};
  };

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<
    Prisma.$teacherPayload,
    S
  >;

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teacherFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TeacherCountAggregateInputType | true;
  };

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher']; meta: { name: 'teacher' } };
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teacherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<
      $Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teacherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     *
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teacherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     *
     **/
    create<T extends teacherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherCreateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teachers.
     *     @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teacher = await prisma.teacher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teacherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     *
     **/
    delete<T extends teacherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teacherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teacherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teacherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     **/
    upsert<T extends teacherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
     **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TeacherAggregateArgs>(
      args: Subset<T, TeacherAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeacherAggregateType<T>>;

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the teacher model
     */
    readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the teacher model
   */
  interface teacherFieldRefs {
    readonly id: FieldRef<'teacher', 'String'>;
    readonly created_at: FieldRef<'teacher', 'DateTime'>;
    readonly updated_at: FieldRef<'teacher', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * The data needed to create a teacher.
     */
    data?: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
  };

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>;
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput;
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
  };

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      Renamedclass?: boolean | user$RenamedclassArgs<ExtArgs>;
      school?: boolean | user$schoolArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Renamedclass?: boolean | user$RenamedclassArgs<ExtArgs>;
    school?: boolean | user$schoolArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      Renamedclass: Prisma.$RenamedclassPayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Renamedclass<T extends user$RenamedclassArgs<ExtArgs> = {}>(
      args?: Subset<T, user$RenamedclassArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RenamedclassPayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends user$schoolArgs<ExtArgs> = {}>(
      args?: Subset<T, user$schoolArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.Renamedclass
   */
  export type user$RenamedclassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Renamedclass
     */
    select?: RenamedclassSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RenamedclassInclude<ExtArgs> | null;
    where?: RenamedclassWhereInput;
    orderBy?: RenamedclassOrderByWithRelationInput | RenamedclassOrderByWithRelationInput[];
    cursor?: RenamedclassWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RenamedclassScalarFieldEnum | RenamedclassScalarFieldEnum[];
  };

  /**
   * user.school
   */
  export type user$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    cursor?: schoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AttendanceScalarFieldEnum: {
    id: 'id';
    student_id: 'student_id';
    class_id: 'class_id';
    date: 'date';
    status: 'status';
    reason: 'reason';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum];

  export const RenamedclassScalarFieldEnum: {
    id: 'id';
    name: 'name';
    school_id: 'school_id';
    teacher_id: 'teacher_id';
    class_subject: 'class_subject';
    grade: 'grade';
    room_number: 'room_number';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RenamedclassScalarFieldEnum =
    (typeof RenamedclassScalarFieldEnum)[keyof typeof RenamedclassScalarFieldEnum];

  export const CourseScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];

  export const ExamScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum];

  export const HomeworkScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type HomeworkScalarFieldEnum = (typeof HomeworkScalarFieldEnum)[keyof typeof HomeworkScalarFieldEnum];

  export const ScheduleScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum];

  export const SchoolScalarFieldEnum: {
    id: 'id';
    description: 'description';
    number_of_students: 'number_of_students';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];

  export const SemesterScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SemesterScalarFieldEnum = (typeof SemesterScalarFieldEnum)[keyof typeof SemesterScalarFieldEnum];

  export const StudentScalarFieldEnum: {
    id: 'id';
    first_name: 'first_name';
    last_name: 'last_name';
    date_of_birth: 'date_of_birth';
    gender: 'gender';
    class_id: 'class_id';
    school_id: 'school_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];

  export const SubjectScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum];

  export const TeacherScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[];
    OR?: attendanceWhereInput[];
    NOT?: attendanceWhereInput | attendanceWhereInput[];
    id?: UuidFilter<'attendance'> | string;
    student_id?: UuidFilter<'attendance'> | string;
    class_id?: UuidFilter<'attendance'> | string;
    date?: DateTimeFilter<'attendance'> | Date | string;
    status?: StringFilter<'attendance'> | string;
    reason?: StringNullableFilter<'attendance'> | string | null;
    created_at?: DateTimeFilter<'attendance'> | Date | string;
    updated_at?: DateTimeFilter<'attendance'> | Date | string;
    Renamedclass?: XOR<RenamedclassRelationFilter, RenamedclassWhereInput>;
    student?: XOR<StudentRelationFilter, studentWhereInput>;
  };

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    class_id?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    reason?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    Renamedclass?: RenamedclassOrderByWithRelationInput;
    student?: studentOrderByWithRelationInput;
  };

  export type attendanceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: attendanceWhereInput | attendanceWhereInput[];
      OR?: attendanceWhereInput[];
      NOT?: attendanceWhereInput | attendanceWhereInput[];
      student_id?: UuidFilter<'attendance'> | string;
      class_id?: UuidFilter<'attendance'> | string;
      date?: DateTimeFilter<'attendance'> | Date | string;
      status?: StringFilter<'attendance'> | string;
      reason?: StringNullableFilter<'attendance'> | string | null;
      created_at?: DateTimeFilter<'attendance'> | Date | string;
      updated_at?: DateTimeFilter<'attendance'> | Date | string;
      Renamedclass?: XOR<RenamedclassRelationFilter, RenamedclassWhereInput>;
      student?: XOR<StudentRelationFilter, studentWhereInput>;
    },
    'id'
  >;

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    class_id?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    reason?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: attendanceCountOrderByAggregateInput;
    _max?: attendanceMaxOrderByAggregateInput;
    _min?: attendanceMinOrderByAggregateInput;
  };

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[];
    OR?: attendanceScalarWhereWithAggregatesInput[];
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'attendance'> | string;
    student_id?: UuidWithAggregatesFilter<'attendance'> | string;
    class_id?: UuidWithAggregatesFilter<'attendance'> | string;
    date?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    status?: StringWithAggregatesFilter<'attendance'> | string;
    reason?: StringNullableWithAggregatesFilter<'attendance'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'attendance'> | Date | string;
  };

  export type RenamedclassWhereInput = {
    AND?: RenamedclassWhereInput | RenamedclassWhereInput[];
    OR?: RenamedclassWhereInput[];
    NOT?: RenamedclassWhereInput | RenamedclassWhereInput[];
    id?: UuidFilter<'Renamedclass'> | string;
    name?: StringFilter<'Renamedclass'> | string;
    school_id?: UuidFilter<'Renamedclass'> | string;
    teacher_id?: UuidFilter<'Renamedclass'> | string;
    class_subject?: StringFilter<'Renamedclass'> | string;
    grade?: IntFilter<'Renamedclass'> | number;
    room_number?: IntFilter<'Renamedclass'> | number;
    created_at?: DateTimeFilter<'Renamedclass'> | Date | string;
    updated_at?: DateTimeFilter<'Renamedclass'> | Date | string;
    attendance?: AttendanceListRelationFilter;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
    student?: StudentListRelationFilter;
  };

  export type RenamedclassOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    class_subject?: SortOrder;
    grade?: SortOrder;
    room_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    attendance?: attendanceOrderByRelationAggregateInput;
    school?: schoolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
    student?: studentOrderByRelationAggregateInput;
  };

  export type RenamedclassWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: RenamedclassWhereInput | RenamedclassWhereInput[];
      OR?: RenamedclassWhereInput[];
      NOT?: RenamedclassWhereInput | RenamedclassWhereInput[];
      name?: StringFilter<'Renamedclass'> | string;
      school_id?: UuidFilter<'Renamedclass'> | string;
      teacher_id?: UuidFilter<'Renamedclass'> | string;
      class_subject?: StringFilter<'Renamedclass'> | string;
      grade?: IntFilter<'Renamedclass'> | number;
      room_number?: IntFilter<'Renamedclass'> | number;
      created_at?: DateTimeFilter<'Renamedclass'> | Date | string;
      updated_at?: DateTimeFilter<'Renamedclass'> | Date | string;
      attendance?: AttendanceListRelationFilter;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
      student?: StudentListRelationFilter;
    },
    'id'
  >;

  export type RenamedclassOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    class_subject?: SortOrder;
    grade?: SortOrder;
    room_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: RenamedclassCountOrderByAggregateInput;
    _avg?: RenamedclassAvgOrderByAggregateInput;
    _max?: RenamedclassMaxOrderByAggregateInput;
    _min?: RenamedclassMinOrderByAggregateInput;
    _sum?: RenamedclassSumOrderByAggregateInput;
  };

  export type RenamedclassScalarWhereWithAggregatesInput = {
    AND?: RenamedclassScalarWhereWithAggregatesInput | RenamedclassScalarWhereWithAggregatesInput[];
    OR?: RenamedclassScalarWhereWithAggregatesInput[];
    NOT?: RenamedclassScalarWhereWithAggregatesInput | RenamedclassScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Renamedclass'> | string;
    name?: StringWithAggregatesFilter<'Renamedclass'> | string;
    school_id?: UuidWithAggregatesFilter<'Renamedclass'> | string;
    teacher_id?: UuidWithAggregatesFilter<'Renamedclass'> | string;
    class_subject?: StringWithAggregatesFilter<'Renamedclass'> | string;
    grade?: IntWithAggregatesFilter<'Renamedclass'> | number;
    room_number?: IntWithAggregatesFilter<'Renamedclass'> | number;
    created_at?: DateTimeWithAggregatesFilter<'Renamedclass'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Renamedclass'> | Date | string;
  };

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[];
    OR?: courseWhereInput[];
    NOT?: courseWhereInput | courseWhereInput[];
    id?: UuidFilter<'course'> | string;
    created_at?: DateTimeFilter<'course'> | Date | string;
    updated_at?: DateTimeFilter<'course'> | Date | string;
  };

  export type courseOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: courseWhereInput | courseWhereInput[];
      OR?: courseWhereInput[];
      NOT?: courseWhereInput | courseWhereInput[];
      created_at?: DateTimeFilter<'course'> | Date | string;
      updated_at?: DateTimeFilter<'course'> | Date | string;
    },
    'id'
  >;

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: courseCountOrderByAggregateInput;
    _max?: courseMaxOrderByAggregateInput;
    _min?: courseMinOrderByAggregateInput;
  };

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    OR?: courseScalarWhereWithAggregatesInput[];
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'course'> | string;
    created_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
  };

  export type examWhereInput = {
    AND?: examWhereInput | examWhereInput[];
    OR?: examWhereInput[];
    NOT?: examWhereInput | examWhereInput[];
    id?: UuidFilter<'exam'> | string;
    created_at?: DateTimeFilter<'exam'> | Date | string;
    updated_at?: DateTimeFilter<'exam'> | Date | string;
  };

  export type examOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type examWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: examWhereInput | examWhereInput[];
      OR?: examWhereInput[];
      NOT?: examWhereInput | examWhereInput[];
      created_at?: DateTimeFilter<'exam'> | Date | string;
      updated_at?: DateTimeFilter<'exam'> | Date | string;
    },
    'id'
  >;

  export type examOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: examCountOrderByAggregateInput;
    _max?: examMaxOrderByAggregateInput;
    _min?: examMinOrderByAggregateInput;
  };

  export type examScalarWhereWithAggregatesInput = {
    AND?: examScalarWhereWithAggregatesInput | examScalarWhereWithAggregatesInput[];
    OR?: examScalarWhereWithAggregatesInput[];
    NOT?: examScalarWhereWithAggregatesInput | examScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'exam'> | string;
    created_at?: DateTimeWithAggregatesFilter<'exam'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'exam'> | Date | string;
  };

  export type homeworkWhereInput = {
    AND?: homeworkWhereInput | homeworkWhereInput[];
    OR?: homeworkWhereInput[];
    NOT?: homeworkWhereInput | homeworkWhereInput[];
    id?: UuidFilter<'homework'> | string;
    created_at?: DateTimeFilter<'homework'> | Date | string;
    updated_at?: DateTimeFilter<'homework'> | Date | string;
  };

  export type homeworkOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type homeworkWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: homeworkWhereInput | homeworkWhereInput[];
      OR?: homeworkWhereInput[];
      NOT?: homeworkWhereInput | homeworkWhereInput[];
      created_at?: DateTimeFilter<'homework'> | Date | string;
      updated_at?: DateTimeFilter<'homework'> | Date | string;
    },
    'id'
  >;

  export type homeworkOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: homeworkCountOrderByAggregateInput;
    _max?: homeworkMaxOrderByAggregateInput;
    _min?: homeworkMinOrderByAggregateInput;
  };

  export type homeworkScalarWhereWithAggregatesInput = {
    AND?: homeworkScalarWhereWithAggregatesInput | homeworkScalarWhereWithAggregatesInput[];
    OR?: homeworkScalarWhereWithAggregatesInput[];
    NOT?: homeworkScalarWhereWithAggregatesInput | homeworkScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'homework'> | string;
    created_at?: DateTimeWithAggregatesFilter<'homework'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'homework'> | Date | string;
  };

  export type scheduleWhereInput = {
    AND?: scheduleWhereInput | scheduleWhereInput[];
    OR?: scheduleWhereInput[];
    NOT?: scheduleWhereInput | scheduleWhereInput[];
    id?: UuidFilter<'schedule'> | string;
    created_at?: DateTimeFilter<'schedule'> | Date | string;
    updated_at?: DateTimeFilter<'schedule'> | Date | string;
  };

  export type scheduleOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: scheduleWhereInput | scheduleWhereInput[];
      OR?: scheduleWhereInput[];
      NOT?: scheduleWhereInput | scheduleWhereInput[];
      created_at?: DateTimeFilter<'schedule'> | Date | string;
      updated_at?: DateTimeFilter<'schedule'> | Date | string;
    },
    'id'
  >;

  export type scheduleOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: scheduleCountOrderByAggregateInput;
    _max?: scheduleMaxOrderByAggregateInput;
    _min?: scheduleMinOrderByAggregateInput;
  };

  export type scheduleScalarWhereWithAggregatesInput = {
    AND?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    OR?: scheduleScalarWhereWithAggregatesInput[];
    NOT?: scheduleScalarWhereWithAggregatesInput | scheduleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'schedule'> | string;
    created_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'schedule'> | Date | string;
  };

  export type schoolWhereInput = {
    AND?: schoolWhereInput | schoolWhereInput[];
    OR?: schoolWhereInput[];
    NOT?: schoolWhereInput | schoolWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    number_of_students?: IntNullableFilter<'school'> | number | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
    Renamedclass?: RenamedclassListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    student?: StudentListRelationFilter;
  };

  export type schoolOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    number_of_students?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    Renamedclass?: RenamedclassOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    student?: studentOrderByRelationAggregateInput;
  };

  export type schoolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: schoolWhereInput | schoolWhereInput[];
      OR?: schoolWhereInput[];
      NOT?: schoolWhereInput | schoolWhereInput[];
      description?: StringNullableFilter<'school'> | string | null;
      number_of_students?: IntNullableFilter<'school'> | number | null;
      name?: StringFilter<'school'> | string;
      created_at?: DateTimeFilter<'school'> | Date | string;
      updated_at?: DateTimeFilter<'school'> | Date | string;
      user_id?: UuidFilter<'school'> | string;
      tenant_id?: StringFilter<'school'> | string;
      Renamedclass?: RenamedclassListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      student?: StudentListRelationFilter;
    },
    'id'
  >;

  export type schoolOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    number_of_students?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: schoolCountOrderByAggregateInput;
    _avg?: schoolAvgOrderByAggregateInput;
    _max?: schoolMaxOrderByAggregateInput;
    _min?: schoolMinOrderByAggregateInput;
    _sum?: schoolSumOrderByAggregateInput;
  };

  export type schoolScalarWhereWithAggregatesInput = {
    AND?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    OR?: schoolScalarWhereWithAggregatesInput[];
    NOT?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'school'> | string;
    description?: StringNullableWithAggregatesFilter<'school'> | string | null;
    number_of_students?: IntNullableWithAggregatesFilter<'school'> | number | null;
    name?: StringWithAggregatesFilter<'school'> | string;
    created_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'school'> | string;
    tenant_id?: StringWithAggregatesFilter<'school'> | string;
  };

  export type semesterWhereInput = {
    AND?: semesterWhereInput | semesterWhereInput[];
    OR?: semesterWhereInput[];
    NOT?: semesterWhereInput | semesterWhereInput[];
    id?: UuidFilter<'semester'> | string;
    created_at?: DateTimeFilter<'semester'> | Date | string;
    updated_at?: DateTimeFilter<'semester'> | Date | string;
  };

  export type semesterOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type semesterWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: semesterWhereInput | semesterWhereInput[];
      OR?: semesterWhereInput[];
      NOT?: semesterWhereInput | semesterWhereInput[];
      created_at?: DateTimeFilter<'semester'> | Date | string;
      updated_at?: DateTimeFilter<'semester'> | Date | string;
    },
    'id'
  >;

  export type semesterOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: semesterCountOrderByAggregateInput;
    _max?: semesterMaxOrderByAggregateInput;
    _min?: semesterMinOrderByAggregateInput;
  };

  export type semesterScalarWhereWithAggregatesInput = {
    AND?: semesterScalarWhereWithAggregatesInput | semesterScalarWhereWithAggregatesInput[];
    OR?: semesterScalarWhereWithAggregatesInput[];
    NOT?: semesterScalarWhereWithAggregatesInput | semesterScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'semester'> | string;
    created_at?: DateTimeWithAggregatesFilter<'semester'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'semester'> | Date | string;
  };

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[];
    OR?: studentWhereInput[];
    NOT?: studentWhereInput | studentWhereInput[];
    id?: UuidFilter<'student'> | string;
    first_name?: StringFilter<'student'> | string;
    last_name?: StringFilter<'student'> | string;
    date_of_birth?: DateTimeFilter<'student'> | Date | string;
    gender?: StringFilter<'student'> | string;
    class_id?: UuidFilter<'student'> | string;
    school_id?: UuidFilter<'student'> | string;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
    attendance?: AttendanceListRelationFilter;
    Renamedclass?: XOR<RenamedclassRelationFilter, RenamedclassWhereInput>;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
  };

  export type studentOrderByWithRelationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    class_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    attendance?: attendanceOrderByRelationAggregateInput;
    Renamedclass?: RenamedclassOrderByWithRelationInput;
    school?: schoolOrderByWithRelationInput;
  };

  export type studentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: studentWhereInput | studentWhereInput[];
      OR?: studentWhereInput[];
      NOT?: studentWhereInput | studentWhereInput[];
      first_name?: StringFilter<'student'> | string;
      last_name?: StringFilter<'student'> | string;
      date_of_birth?: DateTimeFilter<'student'> | Date | string;
      gender?: StringFilter<'student'> | string;
      class_id?: UuidFilter<'student'> | string;
      school_id?: UuidFilter<'student'> | string;
      created_at?: DateTimeFilter<'student'> | Date | string;
      updated_at?: DateTimeFilter<'student'> | Date | string;
      attendance?: AttendanceListRelationFilter;
      Renamedclass?: XOR<RenamedclassRelationFilter, RenamedclassWhereInput>;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    },
    'id'
  >;

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    class_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: studentCountOrderByAggregateInput;
    _max?: studentMaxOrderByAggregateInput;
    _min?: studentMinOrderByAggregateInput;
  };

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    OR?: studentScalarWhereWithAggregatesInput[];
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'student'> | string;
    first_name?: StringWithAggregatesFilter<'student'> | string;
    last_name?: StringWithAggregatesFilter<'student'> | string;
    date_of_birth?: DateTimeWithAggregatesFilter<'student'> | Date | string;
    gender?: StringWithAggregatesFilter<'student'> | string;
    class_id?: UuidWithAggregatesFilter<'student'> | string;
    school_id?: UuidWithAggregatesFilter<'student'> | string;
    created_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
  };

  export type subjectWhereInput = {
    AND?: subjectWhereInput | subjectWhereInput[];
    OR?: subjectWhereInput[];
    NOT?: subjectWhereInput | subjectWhereInput[];
    id?: UuidFilter<'subject'> | string;
    created_at?: DateTimeFilter<'subject'> | Date | string;
    updated_at?: DateTimeFilter<'subject'> | Date | string;
  };

  export type subjectOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subjectWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: subjectWhereInput | subjectWhereInput[];
      OR?: subjectWhereInput[];
      NOT?: subjectWhereInput | subjectWhereInput[];
      created_at?: DateTimeFilter<'subject'> | Date | string;
      updated_at?: DateTimeFilter<'subject'> | Date | string;
    },
    'id'
  >;

  export type subjectOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: subjectCountOrderByAggregateInput;
    _max?: subjectMaxOrderByAggregateInput;
    _min?: subjectMinOrderByAggregateInput;
  };

  export type subjectScalarWhereWithAggregatesInput = {
    AND?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[];
    OR?: subjectScalarWhereWithAggregatesInput[];
    NOT?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'subject'> | string;
    created_at?: DateTimeWithAggregatesFilter<'subject'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'subject'> | Date | string;
  };

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[];
    OR?: teacherWhereInput[];
    NOT?: teacherWhereInput | teacherWhereInput[];
    id?: UuidFilter<'teacher'> | string;
    created_at?: DateTimeFilter<'teacher'> | Date | string;
    updated_at?: DateTimeFilter<'teacher'> | Date | string;
  };

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teacherWhereInput | teacherWhereInput[];
      OR?: teacherWhereInput[];
      NOT?: teacherWhereInput | teacherWhereInput[];
      created_at?: DateTimeFilter<'teacher'> | Date | string;
      updated_at?: DateTimeFilter<'teacher'> | Date | string;
    },
    'id'
  >;

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teacherCountOrderByAggregateInput;
    _max?: teacherMaxOrderByAggregateInput;
    _min?: teacherMinOrderByAggregateInput;
  };

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    OR?: teacherScalarWhereWithAggregatesInput[];
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'teacher'> | string;
    created_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    Renamedclass?: RenamedclassListRelationFilter;
    school?: SchoolListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    Renamedclass?: RenamedclassOrderByRelationAggregateInput;
    school?: schoolOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      Renamedclass?: RenamedclassListRelationFilter;
      school?: SchoolListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type attendanceCreateInput = {
    id?: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Renamedclass: RenamedclassCreateNestedOneWithoutAttendanceInput;
    student: studentCreateNestedOneWithoutAttendanceInput;
  };

  export type attendanceUncheckedCreateInput = {
    id?: string;
    student_id: string;
    class_id: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutAttendanceNestedInput;
    student?: studentUpdateOneRequiredWithoutAttendanceNestedInput;
  };

  export type attendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceCreateManyInput = {
    id?: string;
    student_id: string;
    class_id: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RenamedclassCreateInput = {
    id?: string;
    name: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutRenamedclassInput;
    school: schoolCreateNestedOneWithoutRenamedclassInput;
    user: userCreateNestedOneWithoutRenamedclassInput;
    student?: studentCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassUncheckedCreateInput = {
    id?: string;
    name: string;
    school_id: string;
    teacher_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutRenamedclassInput;
    student?: studentUncheckedCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutRenamedclassNestedInput;
    school?: schoolUpdateOneRequiredWithoutRenamedclassNestedInput;
    user?: userUpdateOneRequiredWithoutRenamedclassNestedInput;
    student?: studentUpdateManyWithoutRenamedclassNestedInput;
  };

  export type RenamedclassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutRenamedclassNestedInput;
    student?: studentUncheckedUpdateManyWithoutRenamedclassNestedInput;
  };

  export type RenamedclassCreateManyInput = {
    id?: string;
    name: string;
    school_id: string;
    teacher_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type RenamedclassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RenamedclassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type examCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type examUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type examUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type examUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type examCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type examUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type examUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeworkCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type homeworkUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type homeworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeworkCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type homeworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type homeworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type scheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type scheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolCreateInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    Renamedclass?: RenamedclassCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    Renamedclass?: RenamedclassUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    Renamedclass?: RenamedclassUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    Renamedclass?: RenamedclassUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolCreateManyInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type schoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type schoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type semesterCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type semesterUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type semesterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type semesterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type semesterCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type semesterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type semesterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutStudentInput;
    Renamedclass: RenamedclassCreateNestedOneWithoutStudentInput;
    school: schoolCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    class_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutStudentNestedInput;
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutStudentNestedInput;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentCreateManyInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    class_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subjectCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subjectUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subjectCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type subjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type subjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Renamedclass?: RenamedclassCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Renamedclass?: RenamedclassUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Renamedclass?: RenamedclassUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Renamedclass?: RenamedclassUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type RenamedclassRelationFilter = {
    is?: RenamedclassWhereInput;
    isNot?: RenamedclassWhereInput;
  };

  export type StudentRelationFilter = {
    is?: studentWhereInput;
    isNot?: studentWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    class_id?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    class_id?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder;
    student_id?: SortOrder;
    class_id?: SortOrder;
    date?: SortOrder;
    status?: SortOrder;
    reason?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput;
    some?: attendanceWhereInput;
    none?: attendanceWhereInput;
  };

  export type SchoolRelationFilter = {
    is?: schoolWhereInput;
    isNot?: schoolWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type StudentListRelationFilter = {
    every?: studentWhereInput;
    some?: studentWhereInput;
    none?: studentWhereInput;
  };

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RenamedclassCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    class_subject?: SortOrder;
    grade?: SortOrder;
    room_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type RenamedclassAvgOrderByAggregateInput = {
    grade?: SortOrder;
    room_number?: SortOrder;
  };

  export type RenamedclassMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    class_subject?: SortOrder;
    grade?: SortOrder;
    room_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type RenamedclassMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    class_subject?: SortOrder;
    grade?: SortOrder;
    room_number?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type RenamedclassSumOrderByAggregateInput = {
    grade?: SortOrder;
    room_number?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type examCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type examMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type examMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type homeworkCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type homeworkMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type homeworkMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type scheduleMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type RenamedclassListRelationFilter = {
    every?: RenamedclassWhereInput;
    some?: RenamedclassWhereInput;
    none?: RenamedclassWhereInput;
  };

  export type RenamedclassOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type schoolCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    number_of_students?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolAvgOrderByAggregateInput = {
    number_of_students?: SortOrder;
  };

  export type schoolMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    number_of_students?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    number_of_students?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolSumOrderByAggregateInput = {
    number_of_students?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type semesterCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type semesterMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type semesterMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    class_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    class_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    date_of_birth?: SortOrder;
    gender?: SortOrder;
    class_id?: SortOrder;
    school_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subjectCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subjectMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type subjectMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SchoolListRelationFilter = {
    every?: schoolWhereInput;
    some?: schoolWhereInput;
    none?: schoolWhereInput;
  };

  export type schoolOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type RenamedclassCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<RenamedclassCreateWithoutAttendanceInput, RenamedclassUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: RenamedclassCreateOrConnectWithoutAttendanceInput;
    connect?: RenamedclassWhereUniqueInput;
  };

  export type studentCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: studentCreateOrConnectWithoutAttendanceInput;
    connect?: studentWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type RenamedclassUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<RenamedclassCreateWithoutAttendanceInput, RenamedclassUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: RenamedclassCreateOrConnectWithoutAttendanceInput;
    upsert?: RenamedclassUpsertWithoutAttendanceInput;
    connect?: RenamedclassWhereUniqueInput;
    update?: XOR<
      XOR<RenamedclassUpdateToOneWithWhereWithoutAttendanceInput, RenamedclassUpdateWithoutAttendanceInput>,
      RenamedclassUncheckedUpdateWithoutAttendanceInput
    >;
  };

  export type studentUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>;
    connectOrCreate?: studentCreateOrConnectWithoutAttendanceInput;
    upsert?: studentUpsertWithoutAttendanceInput;
    connect?: studentWhereUniqueInput;
    update?: XOR<
      XOR<studentUpdateToOneWithWhereWithoutAttendanceInput, studentUpdateWithoutAttendanceInput>,
      studentUncheckedUpdateWithoutAttendanceInput
    >;
  };

  export type attendanceCreateNestedManyWithoutRenamedclassInput = {
    create?:
      | XOR<attendanceCreateWithoutRenamedclassInput, attendanceUncheckedCreateWithoutRenamedclassInput>
      | attendanceCreateWithoutRenamedclassInput[]
      | attendanceUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?:
      | attendanceCreateOrConnectWithoutRenamedclassInput
      | attendanceCreateOrConnectWithoutRenamedclassInput[];
    createMany?: attendanceCreateManyRenamedclassInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type schoolCreateNestedOneWithoutRenamedclassInput = {
    create?: XOR<schoolCreateWithoutRenamedclassInput, schoolUncheckedCreateWithoutRenamedclassInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutRenamedclassInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutRenamedclassInput = {
    create?: XOR<userCreateWithoutRenamedclassInput, userUncheckedCreateWithoutRenamedclassInput>;
    connectOrCreate?: userCreateOrConnectWithoutRenamedclassInput;
    connect?: userWhereUniqueInput;
  };

  export type studentCreateNestedManyWithoutRenamedclassInput = {
    create?:
      | XOR<studentCreateWithoutRenamedclassInput, studentUncheckedCreateWithoutRenamedclassInput>
      | studentCreateWithoutRenamedclassInput[]
      | studentUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?: studentCreateOrConnectWithoutRenamedclassInput | studentCreateOrConnectWithoutRenamedclassInput[];
    createMany?: studentCreateManyRenamedclassInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type attendanceUncheckedCreateNestedManyWithoutRenamedclassInput = {
    create?:
      | XOR<attendanceCreateWithoutRenamedclassInput, attendanceUncheckedCreateWithoutRenamedclassInput>
      | attendanceCreateWithoutRenamedclassInput[]
      | attendanceUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?:
      | attendanceCreateOrConnectWithoutRenamedclassInput
      | attendanceCreateOrConnectWithoutRenamedclassInput[];
    createMany?: attendanceCreateManyRenamedclassInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type studentUncheckedCreateNestedManyWithoutRenamedclassInput = {
    create?:
      | XOR<studentCreateWithoutRenamedclassInput, studentUncheckedCreateWithoutRenamedclassInput>
      | studentCreateWithoutRenamedclassInput[]
      | studentUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?: studentCreateOrConnectWithoutRenamedclassInput | studentCreateOrConnectWithoutRenamedclassInput[];
    createMany?: studentCreateManyRenamedclassInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type attendanceUpdateManyWithoutRenamedclassNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutRenamedclassInput, attendanceUncheckedCreateWithoutRenamedclassInput>
      | attendanceCreateWithoutRenamedclassInput[]
      | attendanceUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?:
      | attendanceCreateOrConnectWithoutRenamedclassInput
      | attendanceCreateOrConnectWithoutRenamedclassInput[];
    upsert?:
      | attendanceUpsertWithWhereUniqueWithoutRenamedclassInput
      | attendanceUpsertWithWhereUniqueWithoutRenamedclassInput[];
    createMany?: attendanceCreateManyRenamedclassInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?:
      | attendanceUpdateWithWhereUniqueWithoutRenamedclassInput
      | attendanceUpdateWithWhereUniqueWithoutRenamedclassInput[];
    updateMany?:
      | attendanceUpdateManyWithWhereWithoutRenamedclassInput
      | attendanceUpdateManyWithWhereWithoutRenamedclassInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type schoolUpdateOneRequiredWithoutRenamedclassNestedInput = {
    create?: XOR<schoolCreateWithoutRenamedclassInput, schoolUncheckedCreateWithoutRenamedclassInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutRenamedclassInput;
    upsert?: schoolUpsertWithoutRenamedclassInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutRenamedclassInput, schoolUpdateWithoutRenamedclassInput>,
      schoolUncheckedUpdateWithoutRenamedclassInput
    >;
  };

  export type userUpdateOneRequiredWithoutRenamedclassNestedInput = {
    create?: XOR<userCreateWithoutRenamedclassInput, userUncheckedCreateWithoutRenamedclassInput>;
    connectOrCreate?: userCreateOrConnectWithoutRenamedclassInput;
    upsert?: userUpsertWithoutRenamedclassInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRenamedclassInput, userUpdateWithoutRenamedclassInput>,
      userUncheckedUpdateWithoutRenamedclassInput
    >;
  };

  export type studentUpdateManyWithoutRenamedclassNestedInput = {
    create?:
      | XOR<studentCreateWithoutRenamedclassInput, studentUncheckedCreateWithoutRenamedclassInput>
      | studentCreateWithoutRenamedclassInput[]
      | studentUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?: studentCreateOrConnectWithoutRenamedclassInput | studentCreateOrConnectWithoutRenamedclassInput[];
    upsert?:
      | studentUpsertWithWhereUniqueWithoutRenamedclassInput
      | studentUpsertWithWhereUniqueWithoutRenamedclassInput[];
    createMany?: studentCreateManyRenamedclassInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?:
      | studentUpdateWithWhereUniqueWithoutRenamedclassInput
      | studentUpdateWithWhereUniqueWithoutRenamedclassInput[];
    updateMany?:
      | studentUpdateManyWithWhereWithoutRenamedclassInput
      | studentUpdateManyWithWhereWithoutRenamedclassInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type attendanceUncheckedUpdateManyWithoutRenamedclassNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutRenamedclassInput, attendanceUncheckedCreateWithoutRenamedclassInput>
      | attendanceCreateWithoutRenamedclassInput[]
      | attendanceUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?:
      | attendanceCreateOrConnectWithoutRenamedclassInput
      | attendanceCreateOrConnectWithoutRenamedclassInput[];
    upsert?:
      | attendanceUpsertWithWhereUniqueWithoutRenamedclassInput
      | attendanceUpsertWithWhereUniqueWithoutRenamedclassInput[];
    createMany?: attendanceCreateManyRenamedclassInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?:
      | attendanceUpdateWithWhereUniqueWithoutRenamedclassInput
      | attendanceUpdateWithWhereUniqueWithoutRenamedclassInput[];
    updateMany?:
      | attendanceUpdateManyWithWhereWithoutRenamedclassInput
      | attendanceUpdateManyWithWhereWithoutRenamedclassInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type studentUncheckedUpdateManyWithoutRenamedclassNestedInput = {
    create?:
      | XOR<studentCreateWithoutRenamedclassInput, studentUncheckedCreateWithoutRenamedclassInput>
      | studentCreateWithoutRenamedclassInput[]
      | studentUncheckedCreateWithoutRenamedclassInput[];
    connectOrCreate?: studentCreateOrConnectWithoutRenamedclassInput | studentCreateOrConnectWithoutRenamedclassInput[];
    upsert?:
      | studentUpsertWithWhereUniqueWithoutRenamedclassInput
      | studentUpsertWithWhereUniqueWithoutRenamedclassInput[];
    createMany?: studentCreateManyRenamedclassInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?:
      | studentUpdateWithWhereUniqueWithoutRenamedclassInput
      | studentUpdateWithWhereUniqueWithoutRenamedclassInput[];
    updateMany?:
      | studentUpdateManyWithWhereWithoutRenamedclassInput
      | studentUpdateManyWithWhereWithoutRenamedclassInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type RenamedclassCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<RenamedclassCreateWithoutSchoolInput, RenamedclassUncheckedCreateWithoutSchoolInput>
      | RenamedclassCreateWithoutSchoolInput[]
      | RenamedclassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutSchoolInput | RenamedclassCreateOrConnectWithoutSchoolInput[];
    createMany?: RenamedclassCreateManySchoolInputEnvelope;
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutSchoolInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    connect?: userWhereUniqueInput;
  };

  export type studentCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type RenamedclassUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<RenamedclassCreateWithoutSchoolInput, RenamedclassUncheckedCreateWithoutSchoolInput>
      | RenamedclassCreateWithoutSchoolInput[]
      | RenamedclassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutSchoolInput | RenamedclassCreateOrConnectWithoutSchoolInput[];
    createMany?: RenamedclassCreateManySchoolInputEnvelope;
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
  };

  export type studentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type RenamedclassUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<RenamedclassCreateWithoutSchoolInput, RenamedclassUncheckedCreateWithoutSchoolInput>
      | RenamedclassCreateWithoutSchoolInput[]
      | RenamedclassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutSchoolInput | RenamedclassCreateOrConnectWithoutSchoolInput[];
    upsert?:
      | RenamedclassUpsertWithWhereUniqueWithoutSchoolInput
      | RenamedclassUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: RenamedclassCreateManySchoolInputEnvelope;
    set?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    disconnect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    delete?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    update?:
      | RenamedclassUpdateWithWhereUniqueWithoutSchoolInput
      | RenamedclassUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?:
      | RenamedclassUpdateManyWithWhereWithoutSchoolInput
      | RenamedclassUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutSchoolNestedInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    upsert?: userUpsertWithoutSchoolInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSchoolInput, userUpdateWithoutSchoolInput>,
      userUncheckedUpdateWithoutSchoolInput
    >;
  };

  export type studentUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutSchoolInput | studentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutSchoolInput | studentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: studentUpdateManyWithWhereWithoutSchoolInput | studentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type RenamedclassUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<RenamedclassCreateWithoutSchoolInput, RenamedclassUncheckedCreateWithoutSchoolInput>
      | RenamedclassCreateWithoutSchoolInput[]
      | RenamedclassUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutSchoolInput | RenamedclassCreateOrConnectWithoutSchoolInput[];
    upsert?:
      | RenamedclassUpsertWithWhereUniqueWithoutSchoolInput
      | RenamedclassUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: RenamedclassCreateManySchoolInputEnvelope;
    set?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    disconnect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    delete?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    update?:
      | RenamedclassUpdateWithWhereUniqueWithoutSchoolInput
      | RenamedclassUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?:
      | RenamedclassUpdateManyWithWhereWithoutSchoolInput
      | RenamedclassUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[];
  };

  export type studentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutSchoolInput | studentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutSchoolInput | studentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: studentUpdateManyWithWhereWithoutSchoolInput | studentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type attendanceCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
      | attendanceCreateWithoutStudentInput[]
      | attendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[];
    createMany?: attendanceCreateManyStudentInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type RenamedclassCreateNestedOneWithoutStudentInput = {
    create?: XOR<RenamedclassCreateWithoutStudentInput, RenamedclassUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: RenamedclassCreateOrConnectWithoutStudentInput;
    connect?: RenamedclassWhereUniqueInput;
  };

  export type schoolCreateNestedOneWithoutStudentInput = {
    create?: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStudentInput;
    connect?: schoolWhereUniqueInput;
  };

  export type attendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
      | attendanceCreateWithoutStudentInput[]
      | attendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[];
    createMany?: attendanceCreateManyStudentInputEnvelope;
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
  };

  export type attendanceUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
      | attendanceCreateWithoutStudentInput[]
      | attendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[];
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentInput | attendanceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: attendanceCreateManyStudentInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?: attendanceUpdateWithWhereUniqueWithoutStudentInput | attendanceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentInput | attendanceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type RenamedclassUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<RenamedclassCreateWithoutStudentInput, RenamedclassUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: RenamedclassCreateOrConnectWithoutStudentInput;
    upsert?: RenamedclassUpsertWithoutStudentInput;
    connect?: RenamedclassWhereUniqueInput;
    update?: XOR<
      XOR<RenamedclassUpdateToOneWithWhereWithoutStudentInput, RenamedclassUpdateWithoutStudentInput>,
      RenamedclassUncheckedUpdateWithoutStudentInput
    >;
  };

  export type schoolUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStudentInput;
    upsert?: schoolUpsertWithoutStudentInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutStudentInput, schoolUpdateWithoutStudentInput>,
      schoolUncheckedUpdateWithoutStudentInput
    >;
  };

  export type attendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
      | attendanceCreateWithoutStudentInput[]
      | attendanceUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[];
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentInput | attendanceUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: attendanceCreateManyStudentInputEnvelope;
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[];
    update?: attendanceUpdateWithWhereUniqueWithoutStudentInput | attendanceUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentInput | attendanceUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
  };

  export type RenamedclassCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<RenamedclassCreateWithoutUserInput, RenamedclassUncheckedCreateWithoutUserInput>
      | RenamedclassCreateWithoutUserInput[]
      | RenamedclassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutUserInput | RenamedclassCreateOrConnectWithoutUserInput[];
    createMany?: RenamedclassCreateManyUserInputEnvelope;
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
  };

  export type schoolCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type RenamedclassUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<RenamedclassCreateWithoutUserInput, RenamedclassUncheckedCreateWithoutUserInput>
      | RenamedclassCreateWithoutUserInput[]
      | RenamedclassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutUserInput | RenamedclassCreateOrConnectWithoutUserInput[];
    createMany?: RenamedclassCreateManyUserInputEnvelope;
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
  };

  export type schoolUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type RenamedclassUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<RenamedclassCreateWithoutUserInput, RenamedclassUncheckedCreateWithoutUserInput>
      | RenamedclassCreateWithoutUserInput[]
      | RenamedclassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutUserInput | RenamedclassCreateOrConnectWithoutUserInput[];
    upsert?: RenamedclassUpsertWithWhereUniqueWithoutUserInput | RenamedclassUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RenamedclassCreateManyUserInputEnvelope;
    set?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    disconnect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    delete?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    update?: RenamedclassUpdateWithWhereUniqueWithoutUserInput | RenamedclassUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: RenamedclassUpdateManyWithWhereWithoutUserInput | RenamedclassUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[];
  };

  export type schoolUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type RenamedclassUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<RenamedclassCreateWithoutUserInput, RenamedclassUncheckedCreateWithoutUserInput>
      | RenamedclassCreateWithoutUserInput[]
      | RenamedclassUncheckedCreateWithoutUserInput[];
    connectOrCreate?: RenamedclassCreateOrConnectWithoutUserInput | RenamedclassCreateOrConnectWithoutUserInput[];
    upsert?: RenamedclassUpsertWithWhereUniqueWithoutUserInput | RenamedclassUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RenamedclassCreateManyUserInputEnvelope;
    set?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    disconnect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    delete?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    connect?: RenamedclassWhereUniqueInput | RenamedclassWhereUniqueInput[];
    update?: RenamedclassUpdateWithWhereUniqueWithoutUserInput | RenamedclassUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: RenamedclassUpdateManyWithWhereWithoutUserInput | RenamedclassUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[];
  };

  export type schoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type RenamedclassCreateWithoutAttendanceInput = {
    id?: string;
    name: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutRenamedclassInput;
    user: userCreateNestedOneWithoutRenamedclassInput;
    student?: studentCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassUncheckedCreateWithoutAttendanceInput = {
    id?: string;
    name: string;
    school_id: string;
    teacher_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    student?: studentUncheckedCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassCreateOrConnectWithoutAttendanceInput = {
    where: RenamedclassWhereUniqueInput;
    create: XOR<RenamedclassCreateWithoutAttendanceInput, RenamedclassUncheckedCreateWithoutAttendanceInput>;
  };

  export type studentCreateWithoutAttendanceInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Renamedclass: RenamedclassCreateNestedOneWithoutStudentInput;
    school: schoolCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutAttendanceInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    class_id: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateOrConnectWithoutAttendanceInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>;
  };

  export type RenamedclassUpsertWithoutAttendanceInput = {
    update: XOR<RenamedclassUpdateWithoutAttendanceInput, RenamedclassUncheckedUpdateWithoutAttendanceInput>;
    create: XOR<RenamedclassCreateWithoutAttendanceInput, RenamedclassUncheckedCreateWithoutAttendanceInput>;
    where?: RenamedclassWhereInput;
  };

  export type RenamedclassUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: RenamedclassWhereInput;
    data: XOR<RenamedclassUpdateWithoutAttendanceInput, RenamedclassUncheckedUpdateWithoutAttendanceInput>;
  };

  export type RenamedclassUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutRenamedclassNestedInput;
    user?: userUpdateOneRequiredWithoutRenamedclassNestedInput;
    student?: studentUpdateManyWithoutRenamedclassNestedInput;
  };

  export type RenamedclassUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUncheckedUpdateManyWithoutRenamedclassNestedInput;
  };

  export type studentUpsertWithoutAttendanceInput = {
    update: XOR<studentUpdateWithoutAttendanceInput, studentUncheckedUpdateWithoutAttendanceInput>;
    create: XOR<studentCreateWithoutAttendanceInput, studentUncheckedCreateWithoutAttendanceInput>;
    where?: studentWhereInput;
  };

  export type studentUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: studentWhereInput;
    data: XOR<studentUpdateWithoutAttendanceInput, studentUncheckedUpdateWithoutAttendanceInput>;
  };

  export type studentUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutStudentNestedInput;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutAttendanceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceCreateWithoutRenamedclassInput = {
    id?: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: studentCreateNestedOneWithoutAttendanceInput;
  };

  export type attendanceUncheckedCreateWithoutRenamedclassInput = {
    id?: string;
    student_id: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceCreateOrConnectWithoutRenamedclassInput = {
    where: attendanceWhereUniqueInput;
    create: XOR<attendanceCreateWithoutRenamedclassInput, attendanceUncheckedCreateWithoutRenamedclassInput>;
  };

  export type attendanceCreateManyRenamedclassInputEnvelope = {
    data: attendanceCreateManyRenamedclassInput | attendanceCreateManyRenamedclassInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutRenamedclassInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutRenamedclassInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutRenamedclassInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutRenamedclassInput, schoolUncheckedCreateWithoutRenamedclassInput>;
  };

  export type userCreateWithoutRenamedclassInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school?: schoolCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRenamedclassInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRenamedclassInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRenamedclassInput, userUncheckedCreateWithoutRenamedclassInput>;
  };

  export type studentCreateWithoutRenamedclassInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutStudentInput;
    school: schoolCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutRenamedclassInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentCreateOrConnectWithoutRenamedclassInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutRenamedclassInput, studentUncheckedCreateWithoutRenamedclassInput>;
  };

  export type studentCreateManyRenamedclassInputEnvelope = {
    data: studentCreateManyRenamedclassInput | studentCreateManyRenamedclassInput[];
    skipDuplicates?: boolean;
  };

  export type attendanceUpsertWithWhereUniqueWithoutRenamedclassInput = {
    where: attendanceWhereUniqueInput;
    update: XOR<attendanceUpdateWithoutRenamedclassInput, attendanceUncheckedUpdateWithoutRenamedclassInput>;
    create: XOR<attendanceCreateWithoutRenamedclassInput, attendanceUncheckedCreateWithoutRenamedclassInput>;
  };

  export type attendanceUpdateWithWhereUniqueWithoutRenamedclassInput = {
    where: attendanceWhereUniqueInput;
    data: XOR<attendanceUpdateWithoutRenamedclassInput, attendanceUncheckedUpdateWithoutRenamedclassInput>;
  };

  export type attendanceUpdateManyWithWhereWithoutRenamedclassInput = {
    where: attendanceScalarWhereInput;
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutRenamedclassInput>;
  };

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
    OR?: attendanceScalarWhereInput[];
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[];
    id?: UuidFilter<'attendance'> | string;
    student_id?: UuidFilter<'attendance'> | string;
    class_id?: UuidFilter<'attendance'> | string;
    date?: DateTimeFilter<'attendance'> | Date | string;
    status?: StringFilter<'attendance'> | string;
    reason?: StringNullableFilter<'attendance'> | string | null;
    created_at?: DateTimeFilter<'attendance'> | Date | string;
    updated_at?: DateTimeFilter<'attendance'> | Date | string;
  };

  export type schoolUpsertWithoutRenamedclassInput = {
    update: XOR<schoolUpdateWithoutRenamedclassInput, schoolUncheckedUpdateWithoutRenamedclassInput>;
    create: XOR<schoolCreateWithoutRenamedclassInput, schoolUncheckedCreateWithoutRenamedclassInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutRenamedclassInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutRenamedclassInput, schoolUncheckedUpdateWithoutRenamedclassInput>;
  };

  export type schoolUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userUpsertWithoutRenamedclassInput = {
    update: XOR<userUpdateWithoutRenamedclassInput, userUncheckedUpdateWithoutRenamedclassInput>;
    create: XOR<userCreateWithoutRenamedclassInput, userUncheckedCreateWithoutRenamedclassInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRenamedclassInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRenamedclassInput, userUncheckedUpdateWithoutRenamedclassInput>;
  };

  export type userUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type studentUpsertWithWhereUniqueWithoutRenamedclassInput = {
    where: studentWhereUniqueInput;
    update: XOR<studentUpdateWithoutRenamedclassInput, studentUncheckedUpdateWithoutRenamedclassInput>;
    create: XOR<studentCreateWithoutRenamedclassInput, studentUncheckedCreateWithoutRenamedclassInput>;
  };

  export type studentUpdateWithWhereUniqueWithoutRenamedclassInput = {
    where: studentWhereUniqueInput;
    data: XOR<studentUpdateWithoutRenamedclassInput, studentUncheckedUpdateWithoutRenamedclassInput>;
  };

  export type studentUpdateManyWithWhereWithoutRenamedclassInput = {
    where: studentScalarWhereInput;
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutRenamedclassInput>;
  };

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[];
    OR?: studentScalarWhereInput[];
    NOT?: studentScalarWhereInput | studentScalarWhereInput[];
    id?: UuidFilter<'student'> | string;
    first_name?: StringFilter<'student'> | string;
    last_name?: StringFilter<'student'> | string;
    date_of_birth?: DateTimeFilter<'student'> | Date | string;
    gender?: StringFilter<'student'> | string;
    class_id?: UuidFilter<'student'> | string;
    school_id?: UuidFilter<'student'> | string;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
  };

  export type RenamedclassCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutRenamedclassInput;
    user: userCreateNestedOneWithoutRenamedclassInput;
    student?: studentCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassUncheckedCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    teacher_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutRenamedclassInput;
    student?: studentUncheckedCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassCreateOrConnectWithoutSchoolInput = {
    where: RenamedclassWhereUniqueInput;
    create: XOR<RenamedclassCreateWithoutSchoolInput, RenamedclassUncheckedCreateWithoutSchoolInput>;
  };

  export type RenamedclassCreateManySchoolInputEnvelope = {
    data: RenamedclassCreateManySchoolInput | RenamedclassCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Renamedclass?: RenamedclassCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Renamedclass?: RenamedclassUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSchoolInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
  };

  export type studentCreateWithoutSchoolInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutStudentInput;
    Renamedclass: RenamedclassCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    class_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentCreateOrConnectWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>;
  };

  export type studentCreateManySchoolInputEnvelope = {
    data: studentCreateManySchoolInput | studentCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type RenamedclassUpsertWithWhereUniqueWithoutSchoolInput = {
    where: RenamedclassWhereUniqueInput;
    update: XOR<RenamedclassUpdateWithoutSchoolInput, RenamedclassUncheckedUpdateWithoutSchoolInput>;
    create: XOR<RenamedclassCreateWithoutSchoolInput, RenamedclassUncheckedCreateWithoutSchoolInput>;
  };

  export type RenamedclassUpdateWithWhereUniqueWithoutSchoolInput = {
    where: RenamedclassWhereUniqueInput;
    data: XOR<RenamedclassUpdateWithoutSchoolInput, RenamedclassUncheckedUpdateWithoutSchoolInput>;
  };

  export type RenamedclassUpdateManyWithWhereWithoutSchoolInput = {
    where: RenamedclassScalarWhereInput;
    data: XOR<RenamedclassUpdateManyMutationInput, RenamedclassUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type RenamedclassScalarWhereInput = {
    AND?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[];
    OR?: RenamedclassScalarWhereInput[];
    NOT?: RenamedclassScalarWhereInput | RenamedclassScalarWhereInput[];
    id?: UuidFilter<'Renamedclass'> | string;
    name?: StringFilter<'Renamedclass'> | string;
    school_id?: UuidFilter<'Renamedclass'> | string;
    teacher_id?: UuidFilter<'Renamedclass'> | string;
    class_subject?: StringFilter<'Renamedclass'> | string;
    grade?: IntFilter<'Renamedclass'> | number;
    room_number?: IntFilter<'Renamedclass'> | number;
    created_at?: DateTimeFilter<'Renamedclass'> | Date | string;
    updated_at?: DateTimeFilter<'Renamedclass'> | Date | string;
  };

  export type userUpsertWithoutSchoolInput = {
    update: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSchoolInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
  };

  export type userUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Renamedclass?: RenamedclassUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Renamedclass?: RenamedclassUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type studentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    update: XOR<studentUpdateWithoutSchoolInput, studentUncheckedUpdateWithoutSchoolInput>;
    create: XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>;
  };

  export type studentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    data: XOR<studentUpdateWithoutSchoolInput, studentUncheckedUpdateWithoutSchoolInput>;
  };

  export type studentUpdateManyWithWhereWithoutSchoolInput = {
    where: studentScalarWhereInput;
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type attendanceCreateWithoutStudentInput = {
    id?: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    Renamedclass: RenamedclassCreateNestedOneWithoutAttendanceInput;
  };

  export type attendanceUncheckedCreateWithoutStudentInput = {
    id?: string;
    class_id: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceCreateOrConnectWithoutStudentInput = {
    where: attendanceWhereUniqueInput;
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>;
  };

  export type attendanceCreateManyStudentInputEnvelope = {
    data: attendanceCreateManyStudentInput | attendanceCreateManyStudentInput[];
    skipDuplicates?: boolean;
  };

  export type RenamedclassCreateWithoutStudentInput = {
    id?: string;
    name: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutRenamedclassInput;
    school: schoolCreateNestedOneWithoutRenamedclassInput;
    user: userCreateNestedOneWithoutRenamedclassInput;
  };

  export type RenamedclassUncheckedCreateWithoutStudentInput = {
    id?: string;
    name: string;
    school_id: string;
    teacher_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassCreateOrConnectWithoutStudentInput = {
    where: RenamedclassWhereUniqueInput;
    create: XOR<RenamedclassCreateWithoutStudentInput, RenamedclassUncheckedCreateWithoutStudentInput>;
  };

  export type schoolCreateWithoutStudentInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    Renamedclass?: RenamedclassCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutStudentInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    Renamedclass?: RenamedclassUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutStudentInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
  };

  export type attendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput;
    update: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>;
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>;
  };

  export type attendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput;
    data: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>;
  };

  export type attendanceUpdateManyWithWhereWithoutStudentInput = {
    where: attendanceScalarWhereInput;
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutStudentInput>;
  };

  export type RenamedclassUpsertWithoutStudentInput = {
    update: XOR<RenamedclassUpdateWithoutStudentInput, RenamedclassUncheckedUpdateWithoutStudentInput>;
    create: XOR<RenamedclassCreateWithoutStudentInput, RenamedclassUncheckedCreateWithoutStudentInput>;
    where?: RenamedclassWhereInput;
  };

  export type RenamedclassUpdateToOneWithWhereWithoutStudentInput = {
    where?: RenamedclassWhereInput;
    data: XOR<RenamedclassUpdateWithoutStudentInput, RenamedclassUncheckedUpdateWithoutStudentInput>;
  };

  export type RenamedclassUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutRenamedclassNestedInput;
    school?: schoolUpdateOneRequiredWithoutRenamedclassNestedInput;
    user?: userUpdateOneRequiredWithoutRenamedclassNestedInput;
  };

  export type RenamedclassUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutRenamedclassNestedInput;
  };

  export type schoolUpsertWithoutStudentInput = {
    update: XOR<schoolUpdateWithoutStudentInput, schoolUncheckedUpdateWithoutStudentInput>;
    create: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutStudentInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutStudentInput, schoolUncheckedUpdateWithoutStudentInput>;
  };

  export type schoolUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    Renamedclass?: RenamedclassUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    Renamedclass?: RenamedclassUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type RenamedclassCreateWithoutUserInput = {
    id?: string;
    name: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceCreateNestedManyWithoutRenamedclassInput;
    school: schoolCreateNestedOneWithoutRenamedclassInput;
    student?: studentCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    school_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    attendance?: attendanceUncheckedCreateNestedManyWithoutRenamedclassInput;
    student?: studentUncheckedCreateNestedManyWithoutRenamedclassInput;
  };

  export type RenamedclassCreateOrConnectWithoutUserInput = {
    where: RenamedclassWhereUniqueInput;
    create: XOR<RenamedclassCreateWithoutUserInput, RenamedclassUncheckedCreateWithoutUserInput>;
  };

  export type RenamedclassCreateManyUserInputEnvelope = {
    data: RenamedclassCreateManyUserInput | RenamedclassCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    Renamedclass?: RenamedclassCreateNestedManyWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    Renamedclass?: RenamedclassUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutUserInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolCreateManyUserInputEnvelope = {
    data: schoolCreateManyUserInput | schoolCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RenamedclassUpsertWithWhereUniqueWithoutUserInput = {
    where: RenamedclassWhereUniqueInput;
    update: XOR<RenamedclassUpdateWithoutUserInput, RenamedclassUncheckedUpdateWithoutUserInput>;
    create: XOR<RenamedclassCreateWithoutUserInput, RenamedclassUncheckedCreateWithoutUserInput>;
  };

  export type RenamedclassUpdateWithWhereUniqueWithoutUserInput = {
    where: RenamedclassWhereUniqueInput;
    data: XOR<RenamedclassUpdateWithoutUserInput, RenamedclassUncheckedUpdateWithoutUserInput>;
  };

  export type RenamedclassUpdateManyWithWhereWithoutUserInput = {
    where: RenamedclassScalarWhereInput;
    data: XOR<RenamedclassUpdateManyMutationInput, RenamedclassUncheckedUpdateManyWithoutUserInput>;
  };

  export type schoolUpsertWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    update: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolUpdateWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    data: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
  };

  export type schoolUpdateManyWithWhereWithoutUserInput = {
    where: schoolScalarWhereInput;
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyWithoutUserInput>;
  };

  export type schoolScalarWhereInput = {
    AND?: schoolScalarWhereInput | schoolScalarWhereInput[];
    OR?: schoolScalarWhereInput[];
    NOT?: schoolScalarWhereInput | schoolScalarWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    number_of_students?: IntNullableFilter<'school'> | number | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
  };

  export type attendanceCreateManyRenamedclassInput = {
    id?: string;
    student_id: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateManyRenamedclassInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    school_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUpdateOneRequiredWithoutAttendanceNestedInput;
  };

  export type attendanceUncheckedUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateManyWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutStudentNestedInput;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateManyWithoutRenamedclassInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RenamedclassCreateManySchoolInput = {
    id?: string;
    name: string;
    teacher_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateManySchoolInput = {
    id?: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date | string;
    gender: string;
    class_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type RenamedclassUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutRenamedclassNestedInput;
    user?: userUpdateOneRequiredWithoutRenamedclassNestedInput;
    student?: studentUpdateManyWithoutRenamedclassNestedInput;
  };

  export type RenamedclassUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutRenamedclassNestedInput;
    student?: studentUncheckedUpdateManyWithoutRenamedclassNestedInput;
  };

  export type RenamedclassUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutStudentNestedInput;
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    first_name?: StringFieldUpdateOperationsInput | string;
    last_name?: StringFieldUpdateOperationsInput | string;
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string;
    gender?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceCreateManyStudentInput = {
    id?: string;
    class_id: string;
    date: Date | string;
    status: string;
    reason?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type attendanceUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Renamedclass?: RenamedclassUpdateOneRequiredWithoutAttendanceNestedInput;
  };

  export type attendanceUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type attendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    class_id?: StringFieldUpdateOperationsInput | string;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    reason?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RenamedclassCreateManyUserInput = {
    id?: string;
    name: string;
    school_id: string;
    class_subject: string;
    grade: number;
    room_number: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type schoolCreateManyUserInput = {
    id?: string;
    description?: string | null;
    number_of_students?: number | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type RenamedclassUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUpdateManyWithoutRenamedclassNestedInput;
    school?: schoolUpdateOneRequiredWithoutRenamedclassNestedInput;
    student?: studentUpdateManyWithoutRenamedclassNestedInput;
  };

  export type RenamedclassUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    attendance?: attendanceUncheckedUpdateManyWithoutRenamedclassNestedInput;
    student?: studentUncheckedUpdateManyWithoutRenamedclassNestedInput;
  };

  export type RenamedclassUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    class_subject?: StringFieldUpdateOperationsInput | string;
    grade?: IntFieldUpdateOperationsInput | number;
    room_number?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    Renamedclass?: RenamedclassUpdateManyWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    Renamedclass?: RenamedclassUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    number_of_students?: NullableIntFieldUpdateOperationsInput | number | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use RenamedclassCountOutputTypeDefaultArgs instead
   */
  export type RenamedclassCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RenamedclassCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use SchoolCountOutputTypeDefaultArgs instead
   */
  export type SchoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use StudentCountOutputTypeDefaultArgs instead
   */
  export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    StudentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use attendanceDefaultArgs instead
   */
  export type attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    attendanceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RenamedclassDefaultArgs instead
   */
  export type RenamedclassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RenamedclassDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use courseDefaultArgs instead
   */
  export type courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    courseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use examDefaultArgs instead
   */
  export type examArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = examDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use homeworkDefaultArgs instead
   */
  export type homeworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    homeworkDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use scheduleDefaultArgs instead
   */
  export type scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    scheduleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use schoolDefaultArgs instead
   */
  export type schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    schoolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use semesterDefaultArgs instead
   */
  export type semesterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    semesterDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use studentDefaultArgs instead
   */
  export type studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    studentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use subjectDefaultArgs instead
   */
  export type subjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    subjectDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teacherDefaultArgs instead
   */
  export type teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    teacherDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
