package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupLockSettings200ApplicationJson1InMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alert_guest_join")
    public Boolean alertGuestJoin;
    public GetGroupLockSettings200ApplicationJson1InMeeting withAlertGuestJoin(Boolean alertGuestJoin) {
        this.alertGuestJoin = alertGuestJoin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_show_zoom_windows")
    public Boolean allowShowZoomWindows;
    public GetGroupLockSettings200ApplicationJson1InMeeting withAllowShowZoomWindows(Boolean allowShowZoomWindows) {
        this.allowShowZoomWindows = allowShowZoomWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public GetGroupLockSettings200ApplicationJson1InMeeting withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public GetGroupLockSettings200ApplicationJson1InMeeting withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_answer")
    public Boolean autoAnswer;
    public GetGroupLockSettings200ApplicationJson1InMeeting withAutoAnswer(Boolean autoAnswer) {
        this.autoAnswer = autoAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public GetGroupLockSettings200ApplicationJson1InMeeting withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public GetGroupLockSettings200ApplicationJson1InMeeting withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public GetGroupLockSettings200ApplicationJson1InMeeting withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public GetGroupLockSettings200ApplicationJson1InMeeting withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public GetGroupLockSettings200ApplicationJson1InMeeting withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public GetGroupLockSettings200ApplicationJson1InMeeting withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public GetGroupLockSettings200ApplicationJson1InMeeting withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public String entryExitChime;
    public GetGroupLockSettings200ApplicationJson1InMeeting withEntryExitChime(String entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public GetGroupLockSettings200ApplicationJson1InMeeting withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public GetGroupLockSettings200ApplicationJson1InMeeting withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public GetGroupLockSettings200ApplicationJson1InMeeting withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public GetGroupLockSettings200ApplicationJson1InMeeting withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_verbal_feedback")
    public Boolean nonVerbalFeedback;
    public GetGroupLockSettings200ApplicationJson1InMeeting withNonVerbalFeedback(Boolean nonVerbalFeedback) {
        this.nonVerbalFeedback = nonVerbalFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_audio")
    public Boolean originalAudio;
    public GetGroupLockSettings200ApplicationJson1InMeeting withOriginalAudio(Boolean originalAudio) {
        this.originalAudio = originalAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public GetGroupLockSettings200ApplicationJson1InMeeting withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_meeting_feedback")
    public Boolean postMeetingFeedback;
    public GetGroupLockSettings200ApplicationJson1InMeeting withPostMeetingFeedback(Boolean postMeetingFeedback) {
        this.postMeetingFeedback = postMeetingFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public GetGroupLockSettings200ApplicationJson1InMeeting withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public GetGroupLockSettings200ApplicationJson1InMeeting withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_support")
    public Boolean remoteSupport;
    public GetGroupLockSettings200ApplicationJson1InMeeting withRemoteSupport(Boolean remoteSupport) {
        this.remoteSupport = remoteSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public GetGroupLockSettings200ApplicationJson1InMeeting withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public GetGroupLockSettings200ApplicationJson1InMeeting withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sending_default_email_invites")
    public Boolean sendingDefaultEmailInvites;
    public GetGroupLockSettings200ApplicationJson1InMeeting withSendingDefaultEmailInvites(Boolean sendingDefaultEmailInvites) {
        this.sendingDefaultEmailInvites = sendingDefaultEmailInvites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_browser_join_link")
    public Boolean showBrowserJoinLink;
    public GetGroupLockSettings200ApplicationJson1InMeeting withShowBrowserJoinLink(Boolean showBrowserJoinLink) {
        this.showBrowserJoinLink = showBrowserJoinLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public GetGroupLockSettings200ApplicationJson1InMeeting withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_audio")
    public Boolean stereoAudio;
    public GetGroupLockSettings200ApplicationJson1InMeeting withStereoAudio(Boolean stereoAudio) {
        this.stereoAudio = stereoAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_html_format_email")
    public Boolean useHtmlFormatEmail;
    public GetGroupLockSettings200ApplicationJson1InMeeting withUseHtmlFormatEmail(Boolean useHtmlFormatEmail) {
        this.useHtmlFormatEmail = useHtmlFormatEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public GetGroupLockSettings200ApplicationJson1InMeeting withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public GetGroupLockSettings200ApplicationJson1InMeeting withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whiteboard")
    public Boolean whiteboard;
    public GetGroupLockSettings200ApplicationJson1InMeeting withWhiteboard(Boolean whiteboard) {
        this.whiteboard = whiteboard;
        return this;
    }
}