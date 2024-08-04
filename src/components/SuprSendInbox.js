import React from 'react';
import SuprSendInbox from '@suprsend/react-inbox';
import 'react-toastify/dist/ReactToastify.css'; // needed for toast notifications, can be ignored if hideToast=true

const SuprSendInboxComponent = ({ workspaceKey, subscriberId, distinctId }) => {
  return (
    <SuprSendInbox
      workspaceKey={workspaceKey}
      subscriberId={subscriberId}
      distinctId={distinctId}
    />
  );
};

export default SuprSendInboxComponent;
