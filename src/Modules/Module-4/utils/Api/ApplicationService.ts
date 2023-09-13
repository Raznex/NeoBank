import { useRequest } from '../hooks/Request';
import { transformScoringData } from './TransformData';

import type { FormPrescording, Offer, ScoringForm } from '../../../Module-3/utils/Interface';


export const ApplicationServices = () => {
  const API_URL = 'http://localhost:8080';
  const { request } = useRequest();

  const postPrescoringStep1 = async (formData: FormPrescording) => {
    const body = JSON.stringify({ ...formData, term: Number(formData.term), middleName: formData.middleName ? formData.middleName : null });
    const res = await request(`${API_URL}/application`, 'POST', body, { 'Content-Type': 'application/json' });
    return res;
  };
  const postChooseOffer = async (offer: Offer) => {
    const body = JSON.stringify(offer);
    const res = await request(`${API_URL}/application/apply`, 'POST', body, { 'Content-Type': 'application/json' }, true);
    return res;
  };
  const postScoringStep2 = async (formData: ScoringForm, applicationId: string) => {
    const body = JSON.stringify(transformScoringData(formData));
    const res = await request(
      `${API_URL}/application/registration/${applicationId}`,
      'PUT',
      body,
      { 'Content-Type': 'application/json' },
      true,
    );
    return res;
  };
  const postUserDeny = async (applicationId: string) => {
    const res = await request(`${API_URL}/application/${applicationId}/deny`, 'POST', null, { 'Content-Type': 'application/json' }, true);
    return res;
  };
  const getOfferStatus = async (applicationId: string) => {
    const res = await request(`${API_URL}/admin/application/${applicationId}`, 'GET', null, { 'Content-Type': 'application/json' });
    return res;
  };
  const postDocument = async (applicationId: string) => {
    const res = await request(`${API_URL}/document/${applicationId}`, 'POST', null, { 'Content-Type': 'application/json' }, true);
    return res;
  };
  const postSign = async (applicationId: string) => {
    const res = await request(`${API_URL}/document/${applicationId}/sign`, 'POST', null, { 'Content-Type': 'application/json' }, true);
    return res;
  };
  const postPinCode = async (applicationId: string, code: string) => {
    const res = await request(
      `${API_URL}/document/${applicationId}/sign/code`,
      'POST',
      code,
      { 'Content-Type': 'application/json' },
      true,
    );
    return res;
  };
  return {
    postPrescoringStep1,
    postChooseOffer,
    postScoringStep2,
    getOfferStatus,
    postUserDeny,
    postDocument,
    postSign,
    postPinCode,
  };
};

export default ApplicationServices;
