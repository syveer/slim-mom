// PasswordStrengthIndicator.js

import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const PasswordStrengthBar = styled.div`
  width: 100%;
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  margin-top: 10px;
  overflow: hidden;
`;

const StrengthIndicator = styled.div`
  height: 100%;
  width: ${props => props.strength}%;
  background: ${props => props.color};
  transition: width 0.3s ease;
`;

const getPasswordStrength = password => {
  let strength = 0;
  if (password.length >= 8) strength += 20;
  if (/[A-Z]/.test(password)) strength += 20;
  if (/[a-z]/.test(password)) strength += 20;
  if (/[0-9]/.test(password)) strength += 20;
  if (/[^A-Za-z0-9]/.test(password)) strength += 20;

  return strength;
};

const getStrengthColor = strength => {
  if (strength < 40) return '#ff4d4d';
  if (strength < 60) return '#ffcc00';
  if (strength < 80) return '#66ff66';
  return '#00cc00';
};

const PasswordStrengthIndicator = ({ password }) => {
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    const newStrength = getPasswordStrength(password);
    setStrength(newStrength);
  }, [password]);

  return (
    <PasswordStrengthBar>
      <StrengthIndicator
        strength={strength}
        color={getStrengthColor(strength)}
      />
    </PasswordStrengthBar>
  );
};

export default PasswordStrengthIndicator;
