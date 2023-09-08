import { useRequest } from '../hooks/Request';

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
    const body = JSON.stringify(formData);
    const res = await request(
      `${API_URL}/application/registration/${applicationId}`,
      'PUT',
      body,
      { 'Content-Type': 'application/json' },
      true,
    );
    return res;
  };
  const getOfferStatus = async (applicationId: string) => {
    const res = await request(`${API_URL}/admin/application/${applicationId}`, 'GET', null, { 'Content-Type': 'application/json' });
    return res;
  };
  return {
    postPrescoringStep1,
    postChooseOffer,
    postScoringStep2,
    getOfferStatus,
  };
};

export default ApplicationServices;
