import { useRequest } from '../hooks/Request';

import type { FormPrescording, Offer } from '../../../Module-3/utils/Interface';


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
  return {
    postPrescoringStep1,
    postChooseOffer,
  };
};

export default ApplicationServices;
