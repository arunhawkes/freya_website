import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaTiktok, FaBehance } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <FaTiktok />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <FaBehance />
    </div>
  </div>
);

export default SocialMedia;