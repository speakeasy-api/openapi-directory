package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsInMeeting
 * Account Settings: In Meeting.
**/
public class AccountSettings200ApplicationJsonAccountSettingsInMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alert_guest_join")
    public Boolean alertGuestJoin;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAlertGuestJoin(Boolean alertGuestJoin) {
        this.alertGuestJoin = alertGuestJoin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_live_streaming")
    public Boolean allowLiveStreaming;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAllowLiveStreaming(Boolean allowLiveStreaming) {
        this.allowLiveStreaming = allowLiveStreaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_participants_to_rename")
    public Boolean allowParticipantsToRename;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAllowParticipantsToRename(Boolean allowParticipantsToRename) {
        this.allowParticipantsToRename = allowParticipantsToRename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_show_zoom_windows")
    public Boolean allowShowZoomWindows;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAllowShowZoomWindows(Boolean allowShowZoomWindows) {
        this.allowShowZoomWindows = allowShowZoomWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymous_question_answer")
    public Boolean anonymousQuestionAnswer;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAnonymousQuestionAnswer(Boolean anonymousQuestionAnswer) {
        this.anonymousQuestionAnswer = anonymousQuestionAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_answer")
    public Boolean autoAnswer;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAutoAnswer(Boolean autoAnswer) {
        this.autoAnswer = autoAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_live_streaming_service")
    public Boolean customLiveStreamingService;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withCustomLiveStreamingService(Boolean customLiveStreamingService) {
        this.customLiveStreamingService = customLiveStreamingService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_service_instructions")
    public String customServiceInstructions;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withCustomServiceInstructions(String customServiceInstructions) {
        this.customServiceInstructions = customServiceInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center_regions")
    public String[] dataCenterRegions;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withDataCenterRegions(String[] dataCenterRegions) {
        this.dataCenterRegions = dataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_audio")
    public Long dscpAudio;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withDscpAudio(Long dscpAudio) {
        this.dscpAudio = dscpAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_marking")
    public Boolean dscpMarking;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withDscpMarking(Boolean dscpMarking) {
        this.dscpMarking = dscpMarking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_video")
    public Long dscpVideo;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withDscpVideo(Long dscpVideo) {
        this.dscpVideo = dscpVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum entryExitChime;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withEntryExitChime(AccountSettings200ApplicationJsonAccountSettingsInMeetingEntryExitChimeEnum entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_reactions")
    public Boolean meetingReactions;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withMeetingReactions(Boolean meetingReactions) {
        this.meetingReactions = meetingReactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_audio")
    public Boolean originalAudio;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withOriginalAudio(Boolean originalAudio) {
        this.originalAudio = originalAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p2p_connetion")
    public Boolean p2pConnetion;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withP2pConnetion(Boolean p2pConnetion) {
        this.p2pConnetion = p2pConnetion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p2p_ports")
    public Boolean p2pPorts;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withP2pPorts(Boolean p2pPorts) {
        this.p2pPorts = p2pPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports_range")
    public String portsRange;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withPortsRange(String portsRange) {
        this.portsRange = portsRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_meeting_feedback")
    public Boolean postMeetingFeedback;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withPostMeetingFeedback(Boolean postMeetingFeedback) {
        this.postMeetingFeedback = postMeetingFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_play_own_voice")
    public Boolean recordPlayOwnVoice;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withRecordPlayOwnVoice(Boolean recordPlayOwnVoice) {
        this.recordPlayOwnVoice = recordPlayOwnVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sending_default_email_invites")
    public Boolean sendingDefaultEmailInvites;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withSendingDefaultEmailInvites(Boolean sendingDefaultEmailInvites) {
        this.sendingDefaultEmailInvites = sendingDefaultEmailInvites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_a_join_from_your_browser_link")
    public Boolean showAJoinFromYourBrowserLink;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withShowAJoinFromYourBrowserLink(Boolean showAJoinFromYourBrowserLink) {
        this.showAJoinFromYourBrowserLink = showAJoinFromYourBrowserLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_audio")
    public Boolean stereoAudio;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withStereoAudio(Boolean stereoAudio) {
        this.stereoAudio = stereoAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_html_format_email")
    public Boolean useHtmlFormatEmail;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withUseHtmlFormatEmail(Boolean useHtmlFormatEmail) {
        this.useHtmlFormatEmail = useHtmlFormatEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background_settings")
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings virtualBackgroundSettings;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withVirtualBackgroundSettings(AccountSettings200ApplicationJsonAccountSettingsInMeetingVirtualBackgroundSettings virtualBackgroundSettings) {
        this.virtualBackgroundSettings = virtualBackgroundSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_question_answer")
    public Boolean webinarQuestionAnswer;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withWebinarQuestionAnswer(Boolean webinarQuestionAnswer) {
        this.webinarQuestionAnswer = webinarQuestionAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whiteboard")
    public Boolean whiteboard;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withWhiteboard(Boolean whiteboard) {
        this.whiteboard = whiteboard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen")
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum whoCanShareScreen;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withWhoCanShareScreen(AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenEnum whoCanShareScreen) {
        this.whoCanShareScreen = whoCanShareScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen_when_someone_is_sharing")
    public AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withWhoCanShareScreenWhenSomeoneIsSharing(AccountSettings200ApplicationJsonAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing) {
        this.whoCanShareScreenWhenSomeoneIsSharing = whoCanShareScreenWhenSomeoneIsSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workplace_by_facebook")
    public Boolean workplaceByFacebook;
    public AccountSettings200ApplicationJsonAccountSettingsInMeeting withWorkplaceByFacebook(Boolean workplaceByFacebook) {
        this.workplaceByFacebook = workplaceByFacebook;
        return this;
    }
}