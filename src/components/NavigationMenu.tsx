import React from 'react';
import Link from 'gatsby-link';
import { MenuNode } from 'interfaces/nodes';
import styled from 'utils/styled';

interface NavigationMenuProps {
  node: MenuNode;
  menuKey: string;
  isOpen?: boolean;
  onClick?: (e: React.MouseEvent<any>) => void;
  onCloseNavMenu?: (e: React.MouseEvent<any>) => void;
}

interface ToggleableProps {
  isOpen?: boolean;
}

const Root = styled('div')`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ToggleButton = styled<ToggleableProps, 'button'>('button')`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.75rem;
  border: none;
  background: none;
  outline: none;
  font-size: 85%;
  text-align: left;
  border: 1px solid #d3e3ef;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.white};
  opacity: ${props => (props.isOpen ? 1 : 0.5)};
  box-shadow: ${props => (props.isOpen ? '0 2px 4px 0 rgba(0, 0, 0, 0.15)' : 'none')};
  transition: all 0.3s ease;
`;

const ToggleButtonInner = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToggleButtonSpan = styled('span')`
  flex: 1 1 auto;
  font-weight: 500;
`;

const ToggleMenu = styled<ToggleableProps, 'ul'>('ul')`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  max-height: ${props => !props.isOpen && 0};
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease;
`;

const ToggleMenuList = styled('li')`
  margin: 0.5rem 0;
  font-size: 85%;
  color: ${props => props.theme.colors.gray.calm};
`;

const ToggleMenuListLink = styled(Link)`
  display: block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${props => props.theme.colors.gray.calm};

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &.active {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.brand};
  }
`;

class NavigationMenu extends React.PureComponent<NavigationMenuProps, ToggleableProps> {
  render() {
    const { node, onCloseNavMenu, onClick, isOpen } = this.props;

    return (
      <Root>
        <ToggleButton onClick={onClick} isOpen={isOpen}>
          <ToggleButtonInner>
            <ToggleButtonSpan>{node.title}</ToggleButtonSpan>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2">
                <rect
                  width="16"
                  height="2"
                  x="280"
                  y="23"
                  fill="#949A9D"
                  fill-rule="evenodd"
                  rx="1"
                  transform="translate(-280 -23)"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <path
                  fill="#949A9D"
                  fill-rule="evenodd"
                  d="M7 7V1a1 1 0 1 1 2 0v6h6a1 1 0 0 1 0 2H9v6a1 1 0 0 1-2 0V9H1a1 1 0 1 1 0-2h6z"
                />
              </svg>
            )}
          </ToggleButtonInner>
        </ToggleButton>
        <ToggleMenu isOpen={isOpen}>
          {node.items.map(item => (
            <ToggleMenuList key={item.id}>
              <ToggleMenuListLink to={item.slug} activeClassName="active" onClick={onCloseNavMenu}>
                {item.title}
              </ToggleMenuListLink>
            </ToggleMenuList>
          ))}
        </ToggleMenu>
      </Root>
    );
  }
}

export default NavigationMenu;
