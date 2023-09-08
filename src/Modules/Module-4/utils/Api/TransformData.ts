// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import { ScoringForm } from '../../../Module-3/utils/Interface';


export const transformScoringData = (formData: ScoringForm) => {
  const employment = {
    employmentStatus: formData.employmentStatus,
    employerINN: formData.employerINN,
    salary: Number(formData.salary),
    position: formData.position,
    workExperienceTotal: Number(formData.workExperienceTotal),
    workExperienceCurrent: Number(formData.workExperienceCurrent),
  };
  const body = {
    gender: formData.gender,
    maritalStatus: formData.maritalStatus,
    dependentAmount: Number(formData.dependentAmount),
    passportIssueDate: formData.passportIssueDate,
    passportIssueBranch: formData.passportIssueBranch,
    employment,
    account: uuidv4(),
  };
  return body;
};
