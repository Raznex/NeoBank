import { AppStatus } from './Enum';


export const getLink = (applicationId: string, status: AppStatus) => {
  let link = '';
  if (status === AppStatus.PREAPPROVAL) link = '/loan';
  if (status === AppStatus.APPROVED) link = `/loan/${applicationId}`;
  if (status === AppStatus.CC_APPROVED) link = `/loan/${applicationId}/document`;
  if (status === AppStatus.DOCUMENT_CREATED) link = `/loan/${applicationId}/document/sign`;
  if (localStorage.getItem('sign')) link = `/loan/${applicationId}/code`;

  return link;
};
