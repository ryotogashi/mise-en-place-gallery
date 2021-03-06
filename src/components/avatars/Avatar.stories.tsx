import * as React from 'react';

import { Avatar } from 'mise-en-place-ui';
import avatar from '../../assets/sample-avatar.jpg';

export default {
  title: 'Button',
  component: Avatar
};

export const _Avatar = () => <Avatar src={avatar} height={'70px'} width={'70px'} />;
