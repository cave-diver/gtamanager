import React from 'react';

export const patchArray = [
    <div className="main">
        <h1>Version 1.0.0</h1>
        <div className="indent">
            <h2>Initial Release</h2>
            <ul>
                <li>Keep track of your businesses supply and product levels!</li>
                <ul>
                    <li>Supports all businesses except Weed and Document Forgery.</li>
                </ul>
                <li>Also keeps track of the daily wheel spin!</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.1.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added support for the Weed and Document Forgery businesses.</li>
                <li>Added a notification sound to let you know when a business needs your attention.</li>
                <ul>
                    <li>Toggleable using button near start / pause button.</li>
                    <li>Interval and volume can be adjusted in the main settings.</li>
                </ul>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.2.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>The business manager is now hosted online on GitHub Pages, allowing for automatic updates.</li>
                <li>Added Organic Produce and Printing and Copying to the Nightclub.</li>
                <li>Added option to Nightclub to show all products, even if they are not actively being produced.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.3.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added patch notes, visible when the business manager updates.</li>
                <li>Added progress bar styles, selectable through the main setup.</li>
                <ul>
                    <li>Compact: Default. Just a plain bar (the old appearance).</li>
                    <li>5-tick: Same as compact, but divided into 5 parts (like with MC businesses).</li>
                    <li>Percentage: Larger, but shows percentage number on the bar.</li>
                    <li>Time Remaining: Larger, but shows calculated time remaining until full/empty on the bar.</li>
                </ul>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.4.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Businesses can now be individually muted by clicking on their map icon.</li>
                <li>The Lucky Wheel can now be hidden via its setup.</li>
                <li>Added button to view these patch notes again to the main setup.</li>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Bunker research bar should now be calculated correctly.</li>
                <ul>
                    <li>Projected times with time remaining bar style may still be incorrect for bunker research.</li>
                </ul>
                <li>Increased contrast of progress bar text (for percentage and time remaining styles).</li>
                <li>Potential fix for notification sound not playing on some browsers.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.5.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>The business manager now scales better at common mobile resolutions.</li>
                <ul>
                    <li>Main controls are moved to below the map.</li>
                    <li>Information windows are centered on the display instead of on the map.</li>
                </ul>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Various minor bug fixes.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.5.3</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>The default progress bar style has been changed to '5-tick'.</li>
                <ul>
                    <li>If you were using the 'compact' progress bar style, you have been automatically moved to the '5-tick'
                    style. Feel free to swap back if you prefer the previous look.</li>
                    <li>The 'compact' style is now called 'plain' in the settings.</li>
                </ul>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Various optimizations to improve loading speed.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.6.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Push notifications are now available in the main setup. These will send you a notification through your browser, but you still need to have the manager open to receive them.</li>
                <li>You will be reminded if the weekly bonuses have changed when loading the website.</li>
                <li>You can now enable the Lucky Wheel reminder to play even while the manager is paused in its setup.</li>
                <ul>
                    <li>The notification sound may not play when initially loading the website with this setting.</li>
                </ul>
                <li>You will now be warned if you have more than one tab of the business manager open as having multiple open at the same time causes issues.</li>
                <li>Added instructions when setting the location of a business.</li>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Various display fixes, especially for Firefox.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.7.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added dark mode, available in the main setup.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.7.1</h1>
        <div className="indent">
            <h2>Fixes</h2>
            <ul>
                <li>Fixed an issue where the transparent overlay behind dialog boxes would not cover the entire background on mobile displays.</li>
                <li>Fixed regression causing scroll bar on business tabs to make the business headers overflow in Firefox.</li>
                <li>Added a warning stating the request to allow notifications was denied</li>
                <li>New users will now only receive the new user dialog box upon opening the page.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.7.2</h1>
        <div className="indent">
            <h2>Fixes</h2>
            <ul>
                <li>Fixed transparent overlay behind dialog box sometimes not appearing.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.7.3</h1>
        <div className="indent">
            <h2>Fixes</h2>
            <ul>
                <li>Fixed businesses not tracking correctly while the device is asleep.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.8.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added the ability to view previous patch notes (available in the top right of this window!).</li>
                <li>Added favicon.</li>
                <li>The total Nightclub stock is now shown in the modify menu, along with the vehicle required to sell all stock.</li>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Fixed bug where supplies could go under 0% and product could go over 100% if the device was asleep for too long.</li>
                <li>Fixed bug where the session timer would become out of sync after reaching 0 if the device was asleep.</li>
                <li>Fixed Nightclub modify menu on mobile.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.9.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added preplaced locations when setting the location of a business.</li>
                <ul>
                    <li>Click a location to select it or use the arrows to cycle through locations.</li>
                    <li>Confirm the location with the tick, or cancel with the cross.</li>
                    <li>Swap back to manual placement using the three dot button.</li>
                </ul>
                <li>'Time remaining' progress style now always shows minutes.</li>
                <li>Added button to view the business manager's GitHub project in the main setup.</li>
                <ul>
                    <li>Post bugs and suggest improvements here!</li>
                </ul>
                <li>Added missing older patch notes.</li>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Fixed entering numbers into number only text fields.</li>
                <li>Fixed applying changes to settings menus with invalid text field entries.</li>
                <li>Fixed main dialog box buttons on thin mobile displays.</li>
                <li>Removed ability to scroll background while a dialog box is open on mobile.</li>
                <li>Moved Weed and Document Forgery default locations to more appropriate locations.</li>
                <li>Moved Reset Everything button to data section in main settings.</li>
                <li>Fixed large dialog boxes going off screen on thin width desktop displays.</li>
                <li>Fixed various display issues on Microsoft Edge.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.10.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added the option to select upgrades to all applicable businesses, available in their respective setup menus.</li>
                <ul>
                    <li>Existing users will have every upgrade enabled, which is how the manager worked before this update.</li>
                    <li>Click on the upgrade to toggle it. Timers will be adjusted on the fly.</li>
                    <li>Note that the security upgrade currently does nothing.</li>
                    <li>Nightclub also has storage floor upgrades (determines max product).</li>
                </ul>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Some business timings have been fixed based on information from the GTA Wiki.</li>
                <ul>
                    <li>Weed, all upgrades: full supplies now last 3h 20m (up from 2h 24m).</li>
                    <li>Bunker, all upgrades: full supplies now last 2h 20m (down from 2h 30m)</li>
                </ul>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.10.1</h1>
        <div className="indent">
            <h2>Fixes</h2>
            <ul>
                <li>Fixed Nightclub not notifying when full.</li>
                <li>Fixed Import/Export El Burro Heights location.</li>
                <li>Fixed an alert message constantly popping up on browsers that don't support push notifications.</li>
                <li>Fixed a bug with downloading the business manager data affecting some browsers.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 1.10.2</h1>
        <div className="indent">
            <h2>Fixes</h2>
            <ul>
                <li>Fixed push notifications on Chrome mobile.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 2.0.0</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>The business manager now runs on React + Redux instead of custom JavaScript. What does this mean for you?</li>
                <ul>
                    <li>This should improve performance, as well as fix some rare bugs.</li>
                    <li>The application will now run offline, and some browsers will allow you to 'install' this web application for this purpose.</li>
                    <li>Future updates will be easier to create.</li>
                    <li>If you notice any new bugs, please post them as a GitHub issue.</li>
                </ul>
                <li>New users will now have all upgrades for businesses automatically enabled, and 5 storage floors for the Nightclub.</li>
                <li>The custom location selector now has a confirmation screen, and allows you to swap back to preplaced location selector.</li>
                <li>Added link to view weekly bonuses in the main setup.</li>
            </ul>
            <h2>Information</h2>
            <ul>
                <li>Modifying settings will no longer display the changes live in the background. You now need to press apply to see the changes.</li>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Numeric inputs will display invalid values better now.</li>
                <li>Fixed a bug where the maximum value for inputs on the Nightclub modify screen wouldn't take storage floors into consideration.</li>
                <li>There is no longer a delay when swapping patch notes pages for the first time.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 2.0.1</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Bunker research will now auto-empty and begin researching again like it does in-game, so you don't have to manually empty the bar.</li>
                <li>The 'Hide research' Bunker option has changed to 'Show produced / Show both', similar to the Nightclub option.</li>
            </ul>
            <h2>Information</h2>
            <ul>
                <li>The 'Both' Bunker mode has been removed as it was buggy, and was likely incorrect.</li>
                <ul>
                    <li>Users on this mode have been moved to Manufacturing.</li>
                    <li>The most efficient method of researching is to fast-track every item and use your supplies manufacturing instead.</li>
                </ul>
                <li>The Bunker will no longer give a notification when a research item is complete, as you will receive a text in-game anyway.</li>
            </ul>
            <h2>Fixes</h2>
            <ul>
                <li>Fixed the set location buttons for the Nightclub and Import/Export.</li>
                <li>New users will no longer receive the Weekly Bonus notification on their second visit if they haven't changed since their first visit.</li>
                <li>Changed the 'Multiple Tabs Open' warning message to be a popup instead, which works better on Firefox Mobile PWA.</li>
                <ul>
                    <li>The message also now explains why it pops up after installing the Business Manager as a PWA.</li>
                </ul>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 2.0.2</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added support for the Acid Lab introduced in Los Santos Drug Wars.</li>
                <li>Added support for the once per day "boost" that the Acid Lab can do.</li>
            </ul>
        </div>
    </div>,
    <div className="main">
        <h1>Version 2.0.3</h1>
        <div className="indent">
            <h2>Improvements</h2>
            <ul>
                <li>Added support for Cayo Perico.</li>
                <li>Added support for a warehouse technician 48 min. timer.</li>
                <li>Added support for a generic 48 min. timer.</li>
            </ul>
        </div>
    </div>

];


const Patchnotes = (props) => {
    return patchArray[props.page];
}

export default Patchnotes;
