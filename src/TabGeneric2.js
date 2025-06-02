import React from 'react';

import iconGeneric2 from './img/generic2.png';

import { useDispatch, connect } from 'react-redux';
import {
    setGeneric2Timestamp,
} from './redux/userInfoSlice';
import {
    pushPopup,
    clearStack,
} from './redux/popupSlice';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { staticInfo } from './InfoContext';
import { formatTimeString } from './Utility';
import blank from "./img/blank.png";

const mapStateToProps = (state) => {
    let newProps = {
        owned: state.userInfo.generic2.owned || false,
        timestamp: state.userInfo.generic2.timestamp,
        disableSetup: state.session.banner[0] === "BannerSelectLocation" || state.session.banner[0] === "BannerCustomLocation",
        updateState: null,
    }
    if (newProps.owned && new Date().getTime() - newProps.timestamp <= 86400000) {
        // This forces an update every second
        newProps.updateState = state.session.updateState;
    }

    return newProps;
}

const TabGeneric2 = (props) => {

    const dispatch = useDispatch();

    function showSetupGeneric2(e) {
        dispatch(clearStack());
        dispatch(pushPopup("PopupSetupGeneric2"));
    }

    function resetGeneric2() {
        let timestamp = new Date().getTime();
        dispatch(setGeneric2Timestamp(timestamp));
    }

    let content = null;
    if (props.owned) {
        const disableCooldownstart = (new Date().getTime() - props.timestamp <= 2880000);
        let resetString;
        if (disableCooldownstart) {
            let remainingMs = 2880000 - (new Date().getTime() - props.timestamp);
            resetString = formatTimeString(remainingMs);
        }
        else {
            resetString = "Start 48m timer";
        }

        content = (
            <div className="content">
                <button onClick={resetGeneric2} disabled={disableCooldownstart} className="button purple">{resetString}</button>
            </div>
        );
    }

    return (
        <div id="generic2" className="information">
            <div className="business_heading clearfix">
                <div className="icon_wrap">
                    <img src={iconGeneric2} className="icons icons-info icons-generic2" alt={staticInfo.generic2.fullName + " icon"}/>
                </div>
                <h1>{staticInfo.generic2.shortName}</h1>
                <button onClick={showSetupGeneric2} disabled={props.disableSetup} className="button setup">
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
            {content}
        </div>
    );
};

export default connect(mapStateToProps)(TabGeneric2);
