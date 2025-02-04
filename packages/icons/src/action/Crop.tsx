import React from 'react';
import { SVG } from '@marigold/system';

export const Crop = ({ className = '', ...props }) => (
  <SVG className={className} {...props}>
    <path d="M16.0909 14.4545H17.7273V7.90909C17.7273 7.00909 16.9909 6.27273 16.0909 6.27273H9.54545V7.90909H16.0909V14.4545ZM7.90909 16.0909V3H6.27273V6.27273H3V7.90909H6.27273V16.0909C6.27273 16.9909 7.00909 17.7273 7.90909 17.7273H16.0909V21H17.7273V17.7273H21V16.0909H7.90909Z" />
  </SVG>
);
