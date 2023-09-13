import React from 'react';

import ApplicationServices from '../../utils/Api/ApplicationService';
import { ScoringForm } from '../../../Module-3/utils/Interface';


const mockJsonPromise = Promise.resolve(200);
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe('postScoringForm', () => {
  const getIdFromLocalStorage = () => {
    const offers = JSON.parse(window.localStorage.getItem('offers') as string);
    if (offers) return String(offers[0].applicationId);
    return null;
  };
  test('Корректное значение', async () => {
    const { postScoringStep2 } = ApplicationServices();
    const applicationId = getIdFromLocalStorage();
    if (applicationId) {
      const postData: ScoringForm = {
        dependentAmount: 1,
        employerINN: '123123123123',
        employmentStatus: 'EMPLOYED',
        position: 'TOP_MANAGER',
        salary: 150000,
        workExperienceCurrent: 15,
        workExperienceTotal: 15,
        gender: 'FEMALE',
        maritalStatus: 'SINGLE',
        passportIssueBranch: '123123',
        passportIssueDate: '2000-13-09',
      };
      const res = await postScoringStep2(postData, applicationId);
      expect(res).toEqual(200);
    }
  });
});
