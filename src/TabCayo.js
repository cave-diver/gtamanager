import React from 'react';

import iconCayo from './img/cayo.png';

import { useDispatch, connect } from 'react-redux';
import {
    setCayoTimestamp,
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
        owned: state.userInfo.cayo.owned || false,
        timestamp: state.userInfo.cayo.timestamp,
        disableSetup: state.session.banner[0] === "BannerSelectLocation" || state.session.banner[0] === "BannerCustomLocation",
        updateState: null,
    }
    if (newProps.owned && new Date().getTime() - newProps.timestamp <= 86400000) {
        // This forces an update every second
        newProps.updateState = state.session.updateState;
    }

    return newProps;
}

const TabCayo = (props) => {

    const dispatch = useDispatch();

    function showSetupCayo(e) {
        dispatch(clearStack());
        dispatch(pushPopup("PopupSetupCayo"));
    }

    function resetCayo() {
        let timestamp = new Date().getTime();
        dispatch(setCayoTimestamp(timestamp));
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
                <button onClick={resetCayo} disabled={disableCooldownstart} className="button purple">{resetString}</button>
            </div>
        );
    }

    return (
        <div id="cayo" className="information">
            <div className="business_heading clearfix">
                <div className="icon_wrap">
                    <img src={iconCayo} className="icons icons-info icons-cayo" alt={staticInfo.cayo.fullName + " icon"}/>
                </div>
                <h1>{staticInfo.cayo.shortName}</h1>
                <button onClick={showSetupCayo} disabled={props.disableSetup} className="button setup">
                    <FontAwesomeIcon icon={faCog} />
                </button>
            </div>
            {content}
        </div>
    );
};

export default connect(mapStateToProps)(TabCayo);
