import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef, useMemo } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { useRoqClient, useRenamedclassFindFirst } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';
import { convertQueryToPrismaUtil } from 'lib/utils';
import { renamedclassValidationSchema } from 'validationSchema/renamedclasses';
import { RenamedclassInterface } from 'interfaces/renamedclass';
import { SchoolInterface } from 'interfaces/school';
import { UserInterface } from 'interfaces/user';

function RenamedclassEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          id,
        },
        'renamedclass',
      ),
    [id],
  );
  const { data, error, isLoading, mutate } = useRenamedclassFindFirst(queryParams, {}, { disabled: !id });
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: RenamedclassInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await roqClient.renamedclass.update({
        data: values as RoqTypes.renamedclass,
        where: {
          id,
        },
      });
      mutate(updated);
      resetForm();
      router.push('/renamedclasses');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<RenamedclassInterface>({
    initialValues: data,
    validationSchema: renamedclassValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Renamedclasses',
              link: '/renamedclasses',
            },
            {
              label: 'Update Renamedclass',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Renamedclass
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.name}
            label={'Name'}
            props={{
              name: 'name',
              placeholder: 'Name',
              value: formik.values?.name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.class_subject}
            label={'Class Subject'}
            props={{
              name: 'class_subject',
              placeholder: 'Class Subject',
              value: formik.values?.class_subject,
              onChange: formik.handleChange,
            }}
          />

          <NumberInput
            label="Grade"
            formControlProps={{
              id: 'grade',
              isInvalid: !!formik.errors?.grade,
            }}
            name="grade"
            error={formik.errors?.grade}
            value={formik.values?.grade}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('grade', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Room Number"
            formControlProps={{
              id: 'room_number',
              isInvalid: !!formik.errors?.room_number,
            }}
            name="room_number"
            error={formik.errors?.room_number}
            value={formik.values?.room_number}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('room_number', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<SchoolInterface>
            formik={formik}
            name={'school_id'}
            label={'Select School'}
            placeholder={'Select School'}
            fetcher={() => roqClient.school.findManyWithCount({})}
            labelField={'name'}
          />
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'teacher_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/renamedclasses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'Renamedclass',
    operation: AccessOperationEnum.UPDATE,
  }),
)(RenamedclassEditPage);
