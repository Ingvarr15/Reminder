import React, {MouseEventHandler, ReactNode} from 'react';
import styled from 'styled-components';

interface TButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  scale?: number;
  className?: string;
}

const Button = ({children, onClick, scale = 1, className}: TButtonProps) => {
  return (
    <StyledButton className={className} onClick={onClick} scale={scale}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{scale: number}>`
  padding: ${({scale}) => 5 * scale}px ${({scale}) => 10 * scale}px;
  font-family: ${({theme}) => theme.font.family};
  font-size: ${({theme, scale}) => parseInt(theme.font.size) * scale}px;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.font};
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.primary};
  border-radius: ${({scale}) => 3 * scale}px;

  &:active {
    background-color: ${({theme}) => theme.colors.darken};
  }
`;

export default Button;
