import React from 'react';
// import { styled } from "../Theme";

const Text = (props : { children: any; }) => {
    const { children } = props;
    return <span>{children}</span>;
};

export default Text;