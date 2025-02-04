import React from 'react';
import { ComponentProps } from '@marigold/types';
import { Exclamation } from '@marigold/icons';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';

import { RadioIcon, RadioIconProps } from './RadioIcon';
import { Box } from '../Box';
import { Label } from '../Label';
import { ValidationMessage } from '../ValidationMessage';

// Theme Extension
// ---------------
export interface RadioThemeExtension<Value> {
  radio?: {
    [key: string]: Value;
  };
}

// Radio Input
// ---------------
type RadioInputProps = RadioIconProps & ComponentProps<'input'>;

const RadioInput: React.FC<RadioInputProps> = ({ error, ...props }) => {
  const { focusProps } = useFocusRing();

  return (
    <Box pr="xsmall">
      <VisuallyHidden>
        <input
          type="radio"
          disabled={props.disabled}
          {...focusProps}
          {...props}
        />
      </VisuallyHidden>
      <RadioIcon
        variant={props.variant}
        disabled={props.disabled}
        checked={props.checked}
        error={error}
      />
    </Box>
  );
};

// Radio
// ---------------
export type RadioProps = {
  id: string;
  label: string;
  required?: boolean;
  labelVariant?: string;
  error?: boolean;
  errorMessage?: string;
} & RadioInputProps;

export const Radio: React.FC<RadioProps> = ({
  label,
  required,
  labelVariant = 'inline',
  error,
  errorMessage,
  ...props
}) => (
  <>
    <Box
      as={Label}
      htmlFor={props.id}
      required={required}
      variant={`label.${labelVariant}`}
      css={
        props.disabled
          ? { color: 'disabled', ':hover': { cursor: 'not-allowed' } }
          : { color: 'text', ':hover': { cursor: 'pointer' } }
      }
    >
      <Box as={RadioInput} error={error} {...props} />
      {label}
    </Box>
    {error && errorMessage && (
      <ValidationMessage>
        <Exclamation size={16} />
        {errorMessage}
      </ValidationMessage>
    )}
  </>
);
