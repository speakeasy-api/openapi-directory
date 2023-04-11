import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetZRAccountSettingsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The type of setting that you would like to retrieve.<br> `alert`: Alert Settings applied on the Zoom Rooms Account.<br>
 *
 * @remarks
 * `meeting`: Meeting settings of the Zoom Rooms Account. <br>
 * `signage`: View digital signage settings of the Zoom Rooms Account.
 */
export declare enum GetZRAccountSettingsSettingTypeEnum {
    Meeting = "meeting",
    Alert = "alert"
}
export declare class GetZRAccountSettingsRequest extends SpeakeasyBase {
    /**
     * The type of setting that you would like to retrieve.<br> `alert`: Alert Settings applied on the Zoom Rooms Account.<br>
     *
     * @remarks
     * `meeting`: Meeting settings of the Zoom Rooms Account. <br>
     * `signage`: View digital signage settings of the Zoom Rooms Account.
     */
    settingType: GetZRAccountSettingsSettingTypeEnum;
}
/**
 * The Client Alert Settings section includes alerts that display on the TV screen of the Zoom Room. Disable these settings if you have deliberately disconnected one or more peripheral devices or have never enabled them.
 */
export declare class GetZRAccountSettings200ApplicationXml2ClientAlert extends SpeakeasyBase {
    /**
     * Display an alert message when an issue is detected with a bluetooth microphone.
     */
    detectBluetoothMicrophoneErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with a bluetooth speaker.
     */
    detectBluetoothSpeakerErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with a camera.
     */
    detectCameraErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with microphone.
     */
    detectMicrophoneErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with a speaker.
     */
    detectSpeakerErrorAlert?: boolean;
}
/**
 * Specifies the elements that you want to display in the top banner.
 */
export declare class GetZRAccountSettings200ApplicationXml2DigitalSignageBanner extends SpeakeasyBase {
    /**
     * Display or hide banner room name.
     */
    bannerRoomName?: boolean;
    /**
     * Display or hide banner sharing key.
     */
    bannerSharingKey?: boolean;
    /**
     * Display or hide time in the banner.
     */
    bannerTime?: boolean;
}
/**
 * Display period object lets you define the number of minutes before or after the scheduled meeting time you would like the content to display.
 */
export declare class GetZRAccountSettings200ApplicationXml2DigitalSignageDisplayPeriod extends SpeakeasyBase {
    /**
     * Start displaying digital signage content after certain duration after the meeting ends. The value of this field indicates the duration in minutes.
     */
    startDisplayingContent?: number;
    /**
     * Stop displaying content {certain_duration} before a meeting is scheduled to begin. The value of this field indicates the duration in minutes.
     */
    stopDisplayingContent?: number;
}
/**
 * Specify an action for the content list. The value can be one of the following:<br>
 *
 * @remarks
 * `add`: Add another content list.<br>
 * `update`: Update existing content list.<br>
 * `delete`: Delete content list.
 *
 */
export declare enum GetZRAccountSettings200ApplicationXml2DigitalSignagePlayListActionEnum {
    Add = "add",
    Update = "update",
    Delete = "delete"
}
/**
 * Content list.
 */
export declare class GetZRAccountSettings200ApplicationXml2DigitalSignagePlayListContents extends SpeakeasyBase {
    /**
     * Content Id.
     */
    contentId?: string;
    /**
     * Duration for how long the content will be displayed.
     */
    duration?: number;
    id?: string;
    /**
     * Name of the content.
     */
    name?: string;
    /**
     * Order of the content in the display.
     */
    order?: number;
}
export declare class GetZRAccountSettings200ApplicationXml2DigitalSignagePlayList extends SpeakeasyBase {
    /**
     * Specify an action for the content list. The value can be one of the following:<br>
     *
     * @remarks
     * `add`: Add another content list.<br>
     * `update`: Update existing content list.<br>
     * `delete`: Delete content list.
     *
     */
    action?: GetZRAccountSettings200ApplicationXml2DigitalSignagePlayListActionEnum;
    contents?: GetZRAccountSettings200ApplicationXml2DigitalSignagePlayListContents[];
    /**
     * Specify the display end time for the content list in GMT.
     */
    endTime?: string;
    /**
     * Unique identifier of the content list. This field is only required if you would like to remove or update the content list.
     */
    id?: string;
    /**
     * Name of the content list.
     */
    name?: string;
    /**
     * Specify the display start time for the content list in GMT.
     */
    startTime?: string;
}
export declare class GetZRAccountSettings200ApplicationXml2DigitalSignage extends SpeakeasyBase {
    /**
     * Specifies the elements that you want to display in the top banner.
     */
    banner?: GetZRAccountSettings200ApplicationXml2DigitalSignageBanner;
    /**
     * Display period object lets you define the number of minutes before or after the scheduled meeting time you would like the content to display.
     */
    displayPeriod?: GetZRAccountSettings200ApplicationXml2DigitalSignageDisplayPeriod;
    /**
     * [Indicates whether digital signage is on or off,](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_767fbb33-82a8-45a8-8392-a1bfa9687edd). <br>
     *
     * @remarks
     * `true`: enable<br> `false`: disable
     */
    enableDigitalSignage?: boolean;
    /**
     * Set the [layout](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_4e25ddf3-8f97-4957-8f8b-99725f940fa7). The value of this field can be either `standard` or `video_content`.
     *
     * @remarks
     *
     * `standard`: Standard Center<br>
     * `video_content`: Video + Content
     */
    layout?: string;
    /**
     * Sound of all contents will be muted if the value of this field is set to `true`.
     */
    mute?: boolean;
    /**
     * Content list.
     */
    playList?: GetZRAccountSettings200ApplicationXml2DigitalSignagePlayList[];
}
/**
 * [Notifications Settings](https://support.zoom.us/hc/en-us/articles/205394099-Zoom-Room-Alerts#h_b430b5f2-5150-4522-9c96-c77f22ab70bc) includes the circumstances in which the room sends an email alert to the support team to notify them of a potentially urgent issue. These issues can affect the operation of the room, but do not display on the TV screen. The email alert is sent to the email address specified in the Notification Email Recipients section.
 */
export declare class GetZRAccountSettings200ApplicationXml2Notification extends SpeakeasyBase {
    /**
     * Send an alert when the audio echo test result meets usability threshold.
     */
    audioMeetUsabilityThreshold?: boolean;
    /**
     * Send an alert when the audio echo test result does not meet usability threshold.
     */
    audioNotMeetUsabilityThreshold?: boolean;
    /**
     * Send an alert when the battery starts charging.
     */
    batteryIsCharging?: boolean;
    /**
     * Send an alert when the battery of the controller or the scheduling display is low (at 20%) and is not being charged.
     */
    batteryLowAndNotCharging?: boolean;
    /**
     * Specify a percentage so that an alert is sent when the battery is less than the {battery_percentage} that you specified.
     */
    batteryPercentage?: string;
    /**
     * Send an alert when the connection to the Controller or Scheduling Display cannot be detected.
     */
    controllerSchedulingDisconnected?: boolean;
    /**
     * Send an alert when the Controller or Scheduling Display can be detected again.
     */
    controllerSchedulingReconnected?: boolean;
    /**
     * Send an alert when CPU usage is above 90%.
     */
    cpuUsageHighDetected?: boolean;
    /**
     * Send an alert when the mic, speaker or camera is disconnected in the Zoom Room.
     */
    micSpeakerCameraDisconnected?: boolean;
    /**
     * Send an alert when the mic, speaker or camera is reconnected.
     */
    micSpeakerCameraReconnected?: boolean;
    /**
     * Send an alert when low bandwidth network is detected
     */
    networkUnstableDetected?: boolean;
    /**
     * Send an alert when SIP registration stops working.
     */
    sipRegistrationFailed?: boolean;
    /**
     * Send an alert after the SIP registration is re-enabled.
     */
    sipRegistrationReEnabled?: boolean;
    /**
     * Send an alert when the Zoom Room is online after previously being offline.
     */
    zoomRoomComeBackOnline?: boolean;
    /**
     * Send an alert when the TV display is disconnected
     */
    zoomRoomDisplayDisconnected?: boolean;
    /**
     * Send an alert when the machine hosting the Zoom Room application has a network issue or cannot connect with the Controller.
     */
    zoomRoomOffline?: boolean;
}
export declare class GetZRAccountSettings200ApplicationXml2 extends SpeakeasyBase {
    /**
     * The Client Alert Settings section includes alerts that display on the TV screen of the Zoom Room. Disable these settings if you have deliberately disconnected one or more peripheral devices or have never enabled them.
     */
    clientAlert?: GetZRAccountSettings200ApplicationXml2ClientAlert;
    digitalSignage?: GetZRAccountSettings200ApplicationXml2DigitalSignage;
    /**
     * [Notifications Settings](https://support.zoom.us/hc/en-us/articles/205394099-Zoom-Room-Alerts#h_b430b5f2-5150-4522-9c96-c77f22ab70bc) includes the circumstances in which the room sends an email alert to the support team to notify them of a potentially urgent issue. These issues can affect the operation of the room, but do not display on the TV screen. The email alert is sent to the email address specified in the Notification Email Recipients section.
     */
    notification?: GetZRAccountSettings200ApplicationXml2Notification;
}
export declare class GetZRAccountSettings200ApplicationXml1ZoomRooms extends SpeakeasyBase {
    /**
     * Enable multiple participants to [share content simultaneously](https://support.zoom.us/hc/en-us/articles/360017767812-Sharing-Multiple-Screens-in-a-Zoom-Room) by default.
     */
    allowMultipleContentSharing?: boolean;
    /**
     * Enable [automated audio test](https://support.zoom.us/hc/en-us/articles/360000319683-Zoom-Rooms-Daily-Audio-Testing) to ensure high quality audio.
     */
    audioDeviceDailyAutoTest?: boolean;
    /**
     * Enable participants in a Zoom Room to share their laptop screen on the Zoom Room TV without entering a meeting ID or sharing code.
     */
    autoDirectSharing?: boolean;
    /**
     * Automatically start scheduled meetings according to the start time listed on the calendar associated with the room. A meeting alert will appear 10 minutes prior to the scheduled time on the TV.
     */
    autoStartScheduledMeeting?: boolean;
    /**
     * Automatically stop the meeting at the end time as scheduled and listed in the calendar associated with the room.
     */
    autoStopScheduledMeeting?: boolean;
    /**
     * Use facial detection technology to [determine and display the attendees count](https://support.zoom.us/hc/en-us/articles/360031027111-Count-Attendees-in-Zoom-Rooms) after meetings on Dashboard.
     *
     * @remarks
     *
     */
    countAttendeesNumberInRoom?: boolean;
    /**
     * Display a [survey](https://support.zoom.us/hc/en-us/articles/214193146-End-of-Meeting-Attendee-Feedback) at the end of each meeting regarding the audio and video quality on the Zoom Rooms Controller.
     */
    displayFeedbackSurvey?: boolean;
    /**
     *  Show the same information on the TV that is shown on the controller.
     */
    displayMeetingList?: boolean;
    /**
     * Allow to display room name, time and sharing key on the top portion of TV.
     */
    displayTopBanner?: boolean;
    /**
     * Allow in-room participants to input email address where they can recieve the recording before starting a recording if the meeting was created on the Scheduling Display or if it was started using the "Meet Now" option.
     */
    emailAddressPromptBeforeRecording?: boolean;
    /**
     * Encrypt screen and content shared in meetings.
     */
    encryptSharedScreenContent?: boolean;
    /**
     * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
     */
    hideIdForPrivateMeeting?: boolean;
    /**
     * Set [Zoom Rooms as the alternative host](https://support.zoom.us/hc/en-us/articles/203614149-Zoom-Rooms-as-Alternative-Host).
     *
     * @remarks
     *
     */
    makeRoomAlternativeHost?: boolean;
    /**
     * Enable secure connection between Zoom Rooms computer and controller.
     */
    secureConnectionChannel?: boolean;
    /**
     * Restrict[ sending Whiteboard sessions](https://support.zoom.us/hc/en-us/articles/115004797286-Using-the-Whiteboard-in-Zoom-Rooms-for-Touch#h_781274b3-5237-4320-8826-be2120b00e21) to contacts or internal users only.
     */
    sendWhiteboardToInternalContactOnly?: boolean;
    /**
     * If enabled, the upcoming meeting alert message will be shown on the TV display. The value of the `upcoming_meeting_alert` field should be set to `true` to use this field.
     */
    showAlertBeforeMeeting?: boolean;
    /**
     * Allow users to see call history of joined meetings and phone calls from the Zoom Rooms controller.
     *
     * @remarks
     *
     */
    showCallHistoryInRoom?: boolean;
    /**
     * If enabled, you can invite participants from the contact list during a meeting or when starting a meeting
     */
    showContactListOnController?: boolean;
    /**
     * When enabled, meeting participants that are audio only or have their video turned off will also be shown on the Zoom Rooms display by default.
     */
    showNonVideoParticipants?: boolean;
    /**
     * Require the AirPlay service to be [started by an administrator](https://support.zoom.us/hc/en-us/articles/204726885-Screen-Share-Using-Airplay-Mirroring#h_a342ad38-4e46-47a8-a1d9-cded3b144b39) rather than always being available.
     */
    startAirplayManually?: boolean;
    /**
     * Allow users to share content via Apple Screen Mirroring (called Airplay on iOS 11 or earlier) in Zoom Rooms
     */
    startAirplayMirroring?: boolean;
    /**
     * Integrate with Skype for Business, GoToMeeting, or WebEx and show the meeting dial-in button on the meeting list tab for Zoom Rooms Controllers.
     */
    supportJoin3rdPartyMeeting?: boolean;
    /**
     * If enabled, all meetings in this room will be treated as [private meetings](https://support.zoom.us/hc/en-us/articles/115001051063-Zoom-Rooms-Private-Meetings), and the Zoom Room will display "Your Name's Meeting" instead of the real meeting topic.
     */
    transformMeetingToPrivate?: boolean;
    /**
     * If enabled, a reminder will display 10 minutes prior to the next scheduled meeting on the controller.
     */
    upcomingMeetingAlert?: boolean;
    /**
     * [Restart](https://support.zoom.us/hc/en-us/articles/205418949-Zoom-Rooms-Weekly-System-Restart) the Zoom Rooms computer and controller once a week.
     */
    weeklySystemRestart?: boolean;
}
export declare class GetZRAccountSettings200ApplicationXml1 extends SpeakeasyBase {
    zoomRooms?: GetZRAccountSettings200ApplicationXml1ZoomRooms;
}
/**
 * The Client Alert Settings section includes alerts that display on the TV screen of the Zoom Room. Disable these settings if you have deliberately disconnected one or more peripheral devices or have never enabled them.
 */
export declare class GetZRAccountSettings200ApplicationJson2ClientAlert extends SpeakeasyBase {
    /**
     * Display an alert message when an issue is detected with a bluetooth microphone.
     */
    detectBluetoothMicrophoneErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with a bluetooth speaker.
     */
    detectBluetoothSpeakerErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with a camera.
     */
    detectCameraErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with microphone.
     */
    detectMicrophoneErrorAlert?: boolean;
    /**
     * Display an alert message when an issue is detected with a speaker.
     */
    detectSpeakerErrorAlert?: boolean;
}
/**
 * Specifies the elements that you want to display in the top banner.
 */
export declare class GetZRAccountSettings200ApplicationJson2DigitalSignageBanner extends SpeakeasyBase {
    /**
     * Display or hide banner room name.
     */
    bannerRoomName?: boolean;
    /**
     * Display or hide banner sharing key.
     */
    bannerSharingKey?: boolean;
    /**
     * Display or hide time in the banner.
     */
    bannerTime?: boolean;
}
/**
 * Display period object lets you define the number of minutes before or after the scheduled meeting time you would like the content to display.
 */
export declare class GetZRAccountSettings200ApplicationJson2DigitalSignageDisplayPeriod extends SpeakeasyBase {
    /**
     * Start displaying digital signage content after certain duration after the meeting ends. The value of this field indicates the duration in minutes.
     */
    startDisplayingContent?: number;
    /**
     * Stop displaying content {certain_duration} before a meeting is scheduled to begin. The value of this field indicates the duration in minutes.
     */
    stopDisplayingContent?: number;
}
/**
 * Specify an action for the content list. The value can be one of the following:<br>
 *
 * @remarks
 * `add`: Add another content list.<br>
 * `update`: Update existing content list.<br>
 * `delete`: Delete content list.
 *
 */
export declare enum GetZRAccountSettings200ApplicationJson2DigitalSignagePlayListActionEnum {
    Add = "add",
    Update = "update",
    Delete = "delete"
}
/**
 * Content list.
 */
export declare class GetZRAccountSettings200ApplicationJson2DigitalSignagePlayListContents extends SpeakeasyBase {
    /**
     * Content Id.
     */
    contentId?: string;
    /**
     * Duration for how long the content will be displayed.
     */
    duration?: number;
    id?: string;
    /**
     * Name of the content.
     */
    name?: string;
    /**
     * Order of the content in the display.
     */
    order?: number;
}
export declare class GetZRAccountSettings200ApplicationJson2DigitalSignagePlayList extends SpeakeasyBase {
    /**
     * Specify an action for the content list. The value can be one of the following:<br>
     *
     * @remarks
     * `add`: Add another content list.<br>
     * `update`: Update existing content list.<br>
     * `delete`: Delete content list.
     *
     */
    action?: GetZRAccountSettings200ApplicationJson2DigitalSignagePlayListActionEnum;
    contents?: GetZRAccountSettings200ApplicationJson2DigitalSignagePlayListContents[];
    /**
     * Specify the display end time for the content list in GMT.
     */
    endTime?: string;
    /**
     * Unique identifier of the content list. This field is only required if you would like to remove or update the content list.
     */
    id?: string;
    /**
     * Name of the content list.
     */
    name?: string;
    /**
     * Specify the display start time for the content list in GMT.
     */
    startTime?: string;
}
export declare class GetZRAccountSettings200ApplicationJson2DigitalSignage extends SpeakeasyBase {
    /**
     * Specifies the elements that you want to display in the top banner.
     */
    banner?: GetZRAccountSettings200ApplicationJson2DigitalSignageBanner;
    /**
     * Display period object lets you define the number of minutes before or after the scheduled meeting time you would like the content to display.
     */
    displayPeriod?: GetZRAccountSettings200ApplicationJson2DigitalSignageDisplayPeriod;
    /**
     * [Indicates whether digital signage is on or off,](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_767fbb33-82a8-45a8-8392-a1bfa9687edd). <br>
     *
     * @remarks
     * `true`: enable<br> `false`: disable
     */
    enableDigitalSignage?: boolean;
    /**
     * Set the [layout](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage#h_4e25ddf3-8f97-4957-8f8b-99725f940fa7). The value of this field can be either `standard` or `video_content`.
     *
     * @remarks
     *
     * `standard`: Standard Center<br>
     * `video_content`: Video + Content
     */
    layout?: string;
    /**
     * Sound of all contents will be muted if the value of this field is set to `true`.
     */
    mute?: boolean;
    /**
     * Content list.
     */
    playList?: GetZRAccountSettings200ApplicationJson2DigitalSignagePlayList[];
}
/**
 * [Notifications Settings](https://support.zoom.us/hc/en-us/articles/205394099-Zoom-Room-Alerts#h_b430b5f2-5150-4522-9c96-c77f22ab70bc) includes the circumstances in which the room sends an email alert to the support team to notify them of a potentially urgent issue. These issues can affect the operation of the room, but do not display on the TV screen. The email alert is sent to the email address specified in the Notification Email Recipients section.
 */
export declare class GetZRAccountSettings200ApplicationJson2Notification extends SpeakeasyBase {
    /**
     * Send an alert when the audio echo test result meets usability threshold.
     */
    audioMeetUsabilityThreshold?: boolean;
    /**
     * Send an alert when the audio echo test result does not meet usability threshold.
     */
    audioNotMeetUsabilityThreshold?: boolean;
    /**
     * Send an alert when the battery starts charging.
     */
    batteryIsCharging?: boolean;
    /**
     * Send an alert when the battery of the controller or the scheduling display is low (at 20%) and is not being charged.
     */
    batteryLowAndNotCharging?: boolean;
    /**
     * Specify a percentage so that an alert is sent when the battery is less than the {battery_percentage} that you specified.
     */
    batteryPercentage?: string;
    /**
     * Send an alert when the connection to the Controller or Scheduling Display cannot be detected.
     */
    controllerSchedulingDisconnected?: boolean;
    /**
     * Send an alert when the Controller or Scheduling Display can be detected again.
     */
    controllerSchedulingReconnected?: boolean;
    /**
     * Send an alert when CPU usage is above 90%.
     */
    cpuUsageHighDetected?: boolean;
    /**
     * Send an alert when the mic, speaker or camera is disconnected in the Zoom Room.
     */
    micSpeakerCameraDisconnected?: boolean;
    /**
     * Send an alert when the mic, speaker or camera is reconnected.
     */
    micSpeakerCameraReconnected?: boolean;
    /**
     * Send an alert when low bandwidth network is detected
     */
    networkUnstableDetected?: boolean;
    /**
     * Send an alert when SIP registration stops working.
     */
    sipRegistrationFailed?: boolean;
    /**
     * Send an alert after the SIP registration is re-enabled.
     */
    sipRegistrationReEnabled?: boolean;
    /**
     * Send an alert when the Zoom Room is online after previously being offline.
     */
    zoomRoomComeBackOnline?: boolean;
    /**
     * Send an alert when the TV display is disconnected
     */
    zoomRoomDisplayDisconnected?: boolean;
    /**
     * Send an alert when the machine hosting the Zoom Room application has a network issue or cannot connect with the Controller.
     */
    zoomRoomOffline?: boolean;
}
export declare class GetZRAccountSettings200ApplicationJson2 extends SpeakeasyBase {
    /**
     * The Client Alert Settings section includes alerts that display on the TV screen of the Zoom Room. Disable these settings if you have deliberately disconnected one or more peripheral devices or have never enabled them.
     */
    clientAlert?: GetZRAccountSettings200ApplicationJson2ClientAlert;
    digitalSignage?: GetZRAccountSettings200ApplicationJson2DigitalSignage;
    /**
     * [Notifications Settings](https://support.zoom.us/hc/en-us/articles/205394099-Zoom-Room-Alerts#h_b430b5f2-5150-4522-9c96-c77f22ab70bc) includes the circumstances in which the room sends an email alert to the support team to notify them of a potentially urgent issue. These issues can affect the operation of the room, but do not display on the TV screen. The email alert is sent to the email address specified in the Notification Email Recipients section.
     */
    notification?: GetZRAccountSettings200ApplicationJson2Notification;
}
export declare class GetZRAccountSettings200ApplicationJson1ZoomRooms extends SpeakeasyBase {
    /**
     * Enable multiple participants to [share content simultaneously](https://support.zoom.us/hc/en-us/articles/360017767812-Sharing-Multiple-Screens-in-a-Zoom-Room) by default.
     */
    allowMultipleContentSharing?: boolean;
    /**
     * Enable [automated audio test](https://support.zoom.us/hc/en-us/articles/360000319683-Zoom-Rooms-Daily-Audio-Testing) to ensure high quality audio.
     */
    audioDeviceDailyAutoTest?: boolean;
    /**
     * Enable participants in a Zoom Room to share their laptop screen on the Zoom Room TV without entering a meeting ID or sharing code.
     */
    autoDirectSharing?: boolean;
    /**
     * Automatically start scheduled meetings according to the start time listed on the calendar associated with the room. A meeting alert will appear 10 minutes prior to the scheduled time on the TV.
     */
    autoStartScheduledMeeting?: boolean;
    /**
     * Automatically stop the meeting at the end time as scheduled and listed in the calendar associated with the room.
     */
    autoStopScheduledMeeting?: boolean;
    /**
     * Use facial detection technology to [determine and display the attendees count](https://support.zoom.us/hc/en-us/articles/360031027111-Count-Attendees-in-Zoom-Rooms) after meetings on Dashboard.
     *
     * @remarks
     *
     */
    countAttendeesNumberInRoom?: boolean;
    /**
     * Display a [survey](https://support.zoom.us/hc/en-us/articles/214193146-End-of-Meeting-Attendee-Feedback) at the end of each meeting regarding the audio and video quality on the Zoom Rooms Controller.
     */
    displayFeedbackSurvey?: boolean;
    /**
     *  Show the same information on the TV that is shown on the controller.
     */
    displayMeetingList?: boolean;
    /**
     * Allow to display room name, time and sharing key on the top portion of TV.
     */
    displayTopBanner?: boolean;
    /**
     * Allow in-room participants to input email address where they can recieve the recording before starting a recording if the meeting was created on the Scheduling Display or if it was started using the "Meet Now" option.
     */
    emailAddressPromptBeforeRecording?: boolean;
    /**
     * Encrypt screen and content shared in meetings.
     */
    encryptSharedScreenContent?: boolean;
    /**
     * If enabled, the meeting host and meeting ID (in addition to the meeting topic) are hidden from the Zoom Rooms display for private meetings. This affects meetings that were originally scheduled as private, as well as public meetings that were transformed to private.
     */
    hideIdForPrivateMeeting?: boolean;
    /**
     * Set [Zoom Rooms as the alternative host](https://support.zoom.us/hc/en-us/articles/203614149-Zoom-Rooms-as-Alternative-Host).
     *
     * @remarks
     *
     */
    makeRoomAlternativeHost?: boolean;
    /**
     * Enable secure connection between Zoom Rooms computer and controller.
     */
    secureConnectionChannel?: boolean;
    /**
     * Restrict[ sending Whiteboard sessions](https://support.zoom.us/hc/en-us/articles/115004797286-Using-the-Whiteboard-in-Zoom-Rooms-for-Touch#h_781274b3-5237-4320-8826-be2120b00e21) to contacts or internal users only.
     */
    sendWhiteboardToInternalContactOnly?: boolean;
    /**
     * If enabled, the upcoming meeting alert message will be shown on the TV display. The value of the `upcoming_meeting_alert` field should be set to `true` to use this field.
     */
    showAlertBeforeMeeting?: boolean;
    /**
     * Allow users to see call history of joined meetings and phone calls from the Zoom Rooms controller.
     *
     * @remarks
     *
     */
    showCallHistoryInRoom?: boolean;
    /**
     * If enabled, you can invite participants from the contact list during a meeting or when starting a meeting
     */
    showContactListOnController?: boolean;
    /**
     * When enabled, meeting participants that are audio only or have their video turned off will also be shown on the Zoom Rooms display by default.
     */
    showNonVideoParticipants?: boolean;
    /**
     * Require the AirPlay service to be [started by an administrator](https://support.zoom.us/hc/en-us/articles/204726885-Screen-Share-Using-Airplay-Mirroring#h_a342ad38-4e46-47a8-a1d9-cded3b144b39) rather than always being available.
     */
    startAirplayManually?: boolean;
    /**
     * Allow users to share content via Apple Screen Mirroring (called Airplay on iOS 11 or earlier) in Zoom Rooms
     */
    startAirplayMirroring?: boolean;
    /**
     * Integrate with Skype for Business, GoToMeeting, or WebEx and show the meeting dial-in button on the meeting list tab for Zoom Rooms Controllers.
     */
    supportJoin3rdPartyMeeting?: boolean;
    /**
     * If enabled, all meetings in this room will be treated as [private meetings](https://support.zoom.us/hc/en-us/articles/115001051063-Zoom-Rooms-Private-Meetings), and the Zoom Room will display "Your Name's Meeting" instead of the real meeting topic.
     */
    transformMeetingToPrivate?: boolean;
    /**
     * If enabled, a reminder will display 10 minutes prior to the next scheduled meeting on the controller.
     */
    upcomingMeetingAlert?: boolean;
    /**
     * [Restart](https://support.zoom.us/hc/en-us/articles/205418949-Zoom-Rooms-Weekly-System-Restart) the Zoom Rooms computer and controller once a week.
     */
    weeklySystemRestart?: boolean;
}
export declare class GetZRAccountSettings200ApplicationJson1 extends SpeakeasyBase {
    zoomRooms?: GetZRAccountSettings200ApplicationJson1ZoomRooms;
}
export declare class GetZRAccountSettingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * ZR Account Settings returned successfully.
     *
     */
    getZRAccountSettings200ApplicationJSONObject?: any;
}
