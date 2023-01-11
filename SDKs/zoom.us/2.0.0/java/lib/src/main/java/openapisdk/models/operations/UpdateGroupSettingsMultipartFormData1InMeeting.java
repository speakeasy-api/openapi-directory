package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGroupSettingsMultipartFormData1InMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alert_guest_join")
    public Boolean alertGuestJoin;
    public UpdateGroupSettingsMultipartFormData1InMeeting withAlertGuestJoin(Boolean alertGuestJoin) {
        this.alertGuestJoin = alertGuestJoin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_show_zoom_windows")
    public Boolean allowShowZoomWindows;
    public UpdateGroupSettingsMultipartFormData1InMeeting withAllowShowZoomWindows(Boolean allowShowZoomWindows) {
        this.allowShowZoomWindows = allowShowZoomWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public UpdateGroupSettingsMultipartFormData1InMeeting withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public UpdateGroupSettingsMultipartFormData1InMeeting withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_answer")
    public Boolean autoAnswer;
    public UpdateGroupSettingsMultipartFormData1InMeeting withAutoAnswer(Boolean autoAnswer) {
        this.autoAnswer = autoAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public UpdateGroupSettingsMultipartFormData1InMeeting withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public UpdateGroupSettingsMultipartFormData1InMeeting withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public UpdateGroupSettingsMultipartFormData1InMeeting withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public UpdateGroupSettingsMultipartFormData1InMeeting withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public UpdateGroupSettingsMultipartFormData1InMeeting withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public UpdateGroupSettingsMultipartFormData1InMeeting withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center_regions")
    public String[] dataCenterRegions;
    public UpdateGroupSettingsMultipartFormData1InMeeting withDataCenterRegions(String[] dataCenterRegions) {
        this.dataCenterRegions = dataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public UpdateGroupSettingsMultipartFormData1InMeeting withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public String entryExitChime;
    public UpdateGroupSettingsMultipartFormData1InMeeting withEntryExitChime(String entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public UpdateGroupSettingsMultipartFormData1InMeeting withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public UpdateGroupSettingsMultipartFormData1InMeeting withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public UpdateGroupSettingsMultipartFormData1InMeeting withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public UpdateGroupSettingsMultipartFormData1InMeeting withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_verbal_feedback")
    public Boolean nonVerbalFeedback;
    public UpdateGroupSettingsMultipartFormData1InMeeting withNonVerbalFeedback(Boolean nonVerbalFeedback) {
        this.nonVerbalFeedback = nonVerbalFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("only_host_view_device_list")
    public Boolean onlyHostViewDeviceList;
    public UpdateGroupSettingsMultipartFormData1InMeeting withOnlyHostViewDeviceList(Boolean onlyHostViewDeviceList) {
        this.onlyHostViewDeviceList = onlyHostViewDeviceList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_audio")
    public Boolean originalAudio;
    public UpdateGroupSettingsMultipartFormData1InMeeting withOriginalAudio(Boolean originalAudio) {
        this.originalAudio = originalAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public UpdateGroupSettingsMultipartFormData1InMeeting withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_meeting_feedback")
    public Boolean postMeetingFeedback;
    public UpdateGroupSettingsMultipartFormData1InMeeting withPostMeetingFeedback(Boolean postMeetingFeedback) {
        this.postMeetingFeedback = postMeetingFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public UpdateGroupSettingsMultipartFormData1InMeeting withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_play_own_voice")
    public Boolean recordPlayOwnVoice;
    public UpdateGroupSettingsMultipartFormData1InMeeting withRecordPlayOwnVoice(Boolean recordPlayOwnVoice) {
        this.recordPlayOwnVoice = recordPlayOwnVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public UpdateGroupSettingsMultipartFormData1InMeeting withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_support")
    public Boolean remoteSupport;
    public UpdateGroupSettingsMultipartFormData1InMeeting withRemoteSupport(Boolean remoteSupport) {
        this.remoteSupport = remoteSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public UpdateGroupSettingsMultipartFormData1InMeeting withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public UpdateGroupSettingsMultipartFormData1InMeeting withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sending_default_email_invites")
    public Boolean sendingDefaultEmailInvites;
    public UpdateGroupSettingsMultipartFormData1InMeeting withSendingDefaultEmailInvites(Boolean sendingDefaultEmailInvites) {
        this.sendingDefaultEmailInvites = sendingDefaultEmailInvites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_browser_join_link")
    public Boolean showBrowserJoinLink;
    public UpdateGroupSettingsMultipartFormData1InMeeting withShowBrowserJoinLink(Boolean showBrowserJoinLink) {
        this.showBrowserJoinLink = showBrowserJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_device_list")
    public Boolean showDeviceList;
    public UpdateGroupSettingsMultipartFormData1InMeeting withShowDeviceList(Boolean showDeviceList) {
        this.showDeviceList = showDeviceList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public UpdateGroupSettingsMultipartFormData1InMeeting withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_audio")
    public Boolean stereoAudio;
    public UpdateGroupSettingsMultipartFormData1InMeeting withStereoAudio(Boolean stereoAudio) {
        this.stereoAudio = stereoAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_html_format_email")
    public Boolean useHtmlFormatEmail;
    public UpdateGroupSettingsMultipartFormData1InMeeting withUseHtmlFormatEmail(Boolean useHtmlFormatEmail) {
        this.useHtmlFormatEmail = useHtmlFormatEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public UpdateGroupSettingsMultipartFormData1InMeeting withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public UpdateGroupSettingsMultipartFormData1InMeeting withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whiteboard")
    public Boolean whiteboard;
    public UpdateGroupSettingsMultipartFormData1InMeeting withWhiteboard(Boolean whiteboard) {
        this.whiteboard = whiteboard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen")
    public UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum whoCanShareScreen;
    public UpdateGroupSettingsMultipartFormData1InMeeting withWhoCanShareScreen(UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenEnum whoCanShareScreen) {
        this.whoCanShareScreen = whoCanShareScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen_when_someone_is_sharing")
    public UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing;
    public UpdateGroupSettingsMultipartFormData1InMeeting withWhoCanShareScreenWhenSomeoneIsSharing(UpdateGroupSettingsMultipartFormData1InMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing) {
        this.whoCanShareScreenWhenSomeoneIsSharing = whoCanShareScreenWhenSomeoneIsSharing;
        return this;
    }
}