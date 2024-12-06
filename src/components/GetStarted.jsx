import React from 'react';
import '@cscfi/csc-ui-react/css/theme.css';
import { CButton, CIcon } from '@cscfi/csc-ui-react';
import { mdiArrowRight } from '@mdi/js';

const style = {
    "--_c-button-font-size": 16,
    "--_c-button-min-width": 0,
    "--_c-button-height": "auto",
    "--_c-icon-color": "white"
};

const ContentButton = ({ text, href }) => {
    const isActive = window.location.pathname === href;

    var styleClass = "text-white text-md py-3"
    if (isActive) {
        styleClass = styleClass
    }

    return (
            <CButton
            className='w-min'
                no-radius
                style={style}
                onClick={() => (window.location.href = href)}
            >
                <p className={styleClass}>{text}</p>
                <CIcon path={mdiArrowRight}/>
            </CButton>
    );
};

export const GetStarted = () => {
    return (
        <div>
            moi
        </div>
    )
}