package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting
 * Account Settings: In Meeting.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alert_guest_join")
    public Boolean alertGuestJoin;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAlertGuestJoin(Boolean alertGuestJoin) {
        this.alertGuestJoin = alertGuestJoin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_live_streaming")
    public Boolean allowLiveStreaming;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAllowLiveStreaming(Boolean allowLiveStreaming) {
        this.allowLiveStreaming = allowLiveStreaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_participants_to_rename")
    public Boolean allowParticipantsToRename;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAllowParticipantsToRename(Boolean allowParticipantsToRename) {
        this.allowParticipantsToRename = allowParticipantsToRename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_show_zoom_windows")
    public Boolean allowShowZoomWindows;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAllowShowZoomWindows(Boolean allowShowZoomWindows) {
        this.allowShowZoomWindows = allowShowZoomWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymous_question_answer")
    public Boolean anonymousQuestionAnswer;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAnonymousQuestionAnswer(Boolean anonymousQuestionAnswer) {
        this.anonymousQuestionAnswer = anonymousQuestionAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_answer")
    public Boolean autoAnswer;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAutoAnswer(Boolean autoAnswer) {
        this.autoAnswer = autoAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_live_streaming_service")
    public Boolean customLiveStreamingService;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withCustomLiveStreamingService(Boolean customLiveStreamingService) {
        this.customLiveStreamingService = customLiveStreamingService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_service_instructions")
    public String customServiceInstructions;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withCustomServiceInstructions(String customServiceInstructions) {
        this.customServiceInstructions = customServiceInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center_regions")
    public String[] dataCenterRegions;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withDataCenterRegions(String[] dataCenterRegions) {
        this.dataCenterRegions = dataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_audio")
    public Long dscpAudio;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withDscpAudio(Long dscpAudio) {
        this.dscpAudio = dscpAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_marking")
    public Boolean dscpMarking;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withDscpMarking(Boolean dscpMarking) {
        this.dscpMarking = dscpMarking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_video")
    public Long dscpVideo;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withDscpVideo(Long dscpVideo) {
        this.dscpVideo = dscpVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum entryExitChime;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withEntryExitChime(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingEntryExitChimeEnum entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_reactions")
    public Boolean meetingReactions;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withMeetingReactions(Boolean meetingReactions) {
        this.meetingReactions = meetingReactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_audio")
    public Boolean originalAudio;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withOriginalAudio(Boolean originalAudio) {
        this.originalAudio = originalAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p2p_connetion")
    public Boolean p2pConnetion;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withP2pConnetion(Boolean p2pConnetion) {
        this.p2pConnetion = p2pConnetion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p2p_ports")
    public Boolean p2pPorts;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withP2pPorts(Boolean p2pPorts) {
        this.p2pPorts = p2pPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports_range")
    public String portsRange;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withPortsRange(String portsRange) {
        this.portsRange = portsRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_meeting_feedback")
    public Boolean postMeetingFeedback;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withPostMeetingFeedback(Boolean postMeetingFeedback) {
        this.postMeetingFeedback = postMeetingFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_play_own_voice")
    public Boolean recordPlayOwnVoice;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withRecordPlayOwnVoice(Boolean recordPlayOwnVoice) {
        this.recordPlayOwnVoice = recordPlayOwnVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sending_default_email_invites")
    public Boolean sendingDefaultEmailInvites;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withSendingDefaultEmailInvites(Boolean sendingDefaultEmailInvites) {
        this.sendingDefaultEmailInvites = sendingDefaultEmailInvites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_a_join_from_your_browser_link")
    public Boolean showAJoinFromYourBrowserLink;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withShowAJoinFromYourBrowserLink(Boolean showAJoinFromYourBrowserLink) {
        this.showAJoinFromYourBrowserLink = showAJoinFromYourBrowserLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_audio")
    public Boolean stereoAudio;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withStereoAudio(Boolean stereoAudio) {
        this.stereoAudio = stereoAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_html_format_email")
    public Boolean useHtmlFormatEmail;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withUseHtmlFormatEmail(Boolean useHtmlFormatEmail) {
        this.useHtmlFormatEmail = useHtmlFormatEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background_settings")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings virtualBackgroundSettings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withVirtualBackgroundSettings(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingVirtualBackgroundSettings virtualBackgroundSettings) {
        this.virtualBackgroundSettings = virtualBackgroundSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_question_answer")
    public Boolean webinarQuestionAnswer;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withWebinarQuestionAnswer(Boolean webinarQuestionAnswer) {
        this.webinarQuestionAnswer = webinarQuestionAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whiteboard")
    public Boolean whiteboard;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withWhiteboard(Boolean whiteboard) {
        this.whiteboard = whiteboard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum whoCanShareScreen;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withWhoCanShareScreen(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenEnum whoCanShareScreen) {
        this.whoCanShareScreen = whoCanShareScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen_when_someone_is_sharing")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withWhoCanShareScreenWhenSomeoneIsSharing(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing) {
        this.whoCanShareScreenWhenSomeoneIsSharing = whoCanShareScreenWhenSomeoneIsSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workplace_by_facebook")
    public Boolean workplaceByFacebook;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsInMeeting withWorkplaceByFacebook(Boolean workplaceByFacebook) {
        this.workplaceByFacebook = workplaceByFacebook;
        return this;
    }
}