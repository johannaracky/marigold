import React from 'react';
import { SVG } from '@marigold/system';

export const ArrowRightA = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M12 3L10.4138 4.58625L16.6912 10.875H3V13.125H16.6912L10.4138 19.4137L12 21L21 12L12 3Z" />
  </SVG>
);
