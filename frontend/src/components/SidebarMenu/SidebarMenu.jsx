import React from "react";
import styled from "styled-components";
import settingIcon from "../../../public/images/setting-icon.png";

const StyledSideBarMenu = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 0.1px solid grey;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    box-sizing: border-box;
    width: 15rem;
`;

const StyledSideBarMenuHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-weight: bold;
    font-size: 12px;
`;

const StyledSideBarMenuBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
`;

const SideBarMenu = ({ children, ...rest }) => {
    return (
        <StyledSideBarMenu>
            <StyledSideBarMenuHeader>
                <div>{rest.title}</div>
                <div>
                    <img src={settingIcon} alt="setting" width="16" height="16" />
                </div>
            </StyledSideBarMenuHeader>
            <StyledSideBarMenuBody>{children}</StyledSideBarMenuBody>
        </StyledSideBarMenu>
    );
};

export default SideBarMenu;
