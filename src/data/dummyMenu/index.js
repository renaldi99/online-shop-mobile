import React from 'react';
import {
  IconEditPassword,
  IconEditUser,
  IconHistory,
  IconSignOut,
} from '../../assets';

export const dummyMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <IconEditUser />,
    halaman: 'EditProfile',
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <IconEditPassword />,
    halaman: 'ChangePassword',
  },
  {
    id: 3,
    nama: 'History Order',
    gambar: <IconHistory />,
    halaman: 'History',
  },
  {
    id: 4,
    nama: 'Sign Out',
    gambar: <IconSignOut />,
    halaman: 'Login',
  },
];
