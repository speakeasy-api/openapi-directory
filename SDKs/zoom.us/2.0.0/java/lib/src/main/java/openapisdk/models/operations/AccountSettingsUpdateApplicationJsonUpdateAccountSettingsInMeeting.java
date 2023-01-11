package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting
 * Account Settings: In Meeting.
**/
public class AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alert_guest_join")
    public Boolean alertGuestJoin;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAlertGuestJoin(Boolean alertGuestJoin) {
        this.alertGuestJoin = alertGuestJoin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_live_streaming")
    public Boolean allowLiveStreaming;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAllowLiveStreaming(Boolean allowLiveStreaming) {
        this.allowLiveStreaming = allowLiveStreaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_participants_to_rename")
    public Boolean allowParticipantsToRename;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAllowParticipantsToRename(Boolean allowParticipantsToRename) {
        this.allowParticipantsToRename = allowParticipantsToRename;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_show_zoom_windows")
    public Boolean allowShowZoomWindows;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAllowShowZoomWindows(Boolean allowShowZoomWindows) {
        this.allowShowZoomWindows = allowShowZoomWindows;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("anonymous_question_answer")
    public Boolean anonymousQuestionAnswer;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAnonymousQuestionAnswer(Boolean anonymousQuestionAnswer) {
        this.anonymousQuestionAnswer = anonymousQuestionAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_answer")
    public Boolean autoAnswer;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAutoAnswer(Boolean autoAnswer) {
        this.autoAnswer = autoAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_live_streaming_service")
    public Boolean customLiveStreamingService;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withCustomLiveStreamingService(Boolean customLiveStreamingService) {
        this.customLiveStreamingService = customLiveStreamingService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_service_instructions")
    public String customServiceInstructions;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withCustomServiceInstructions(String customServiceInstructions) {
        this.customServiceInstructions = customServiceInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center_regions")
    public String[] dataCenterRegions;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withDataCenterRegions(String[] dataCenterRegions) {
        this.dataCenterRegions = dataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_audio")
    public Long dscpAudio;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withDscpAudio(Long dscpAudio) {
        this.dscpAudio = dscpAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_marking")
    public Boolean dscpMarking;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withDscpMarking(Boolean dscpMarking) {
        this.dscpMarking = dscpMarking;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dscp_video")
    public Long dscpVideo;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withDscpVideo(Long dscpVideo) {
        this.dscpVideo = dscpVideo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum entryExitChime;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withEntryExitChime(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingEntryExitChimeEnum entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_reactions")
    public Boolean meetingReactions;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withMeetingReactions(Boolean meetingReactions) {
        this.meetingReactions = meetingReactions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("original_audio")
    public Boolean originalAudio;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withOriginalAudio(Boolean originalAudio) {
        this.originalAudio = originalAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p2p_connetion")
    public Boolean p2pConnetion;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withP2pConnetion(Boolean p2pConnetion) {
        this.p2pConnetion = p2pConnetion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("p2p_ports")
    public Boolean p2pPorts;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withP2pPorts(Boolean p2pPorts) {
        this.p2pPorts = p2pPorts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports_range")
    public String portsRange;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withPortsRange(String portsRange) {
        this.portsRange = portsRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("post_meeting_feedback")
    public Boolean postMeetingFeedback;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withPostMeetingFeedback(Boolean postMeetingFeedback) {
        this.postMeetingFeedback = postMeetingFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_play_own_voice")
    public Boolean recordPlayOwnVoice;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withRecordPlayOwnVoice(Boolean recordPlayOwnVoice) {
        this.recordPlayOwnVoice = recordPlayOwnVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sending_default_email_invites")
    public Boolean sendingDefaultEmailInvites;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withSendingDefaultEmailInvites(Boolean sendingDefaultEmailInvites) {
        this.sendingDefaultEmailInvites = sendingDefaultEmailInvites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_a_join_from_your_browser_link")
    public Boolean showAJoinFromYourBrowserLink;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withShowAJoinFromYourBrowserLink(Boolean showAJoinFromYourBrowserLink) {
        this.showAJoinFromYourBrowserLink = showAJoinFromYourBrowserLink;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stereo_audio")
    public Boolean stereoAudio;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withStereoAudio(Boolean stereoAudio) {
        this.stereoAudio = stereoAudio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("use_html_format_email")
    public Boolean useHtmlFormatEmail;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withUseHtmlFormatEmail(Boolean useHtmlFormatEmail) {
        this.useHtmlFormatEmail = useHtmlFormatEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background_settings")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings virtualBackgroundSettings;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withVirtualBackgroundSettings(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingVirtualBackgroundSettings virtualBackgroundSettings) {
        this.virtualBackgroundSettings = virtualBackgroundSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("watermark")
    public Boolean watermark;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withWatermark(Boolean watermark) {
        this.watermark = watermark;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("webinar_question_answer")
    public Boolean webinarQuestionAnswer;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withWebinarQuestionAnswer(Boolean webinarQuestionAnswer) {
        this.webinarQuestionAnswer = webinarQuestionAnswer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whiteboard")
    public Boolean whiteboard;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withWhiteboard(Boolean whiteboard) {
        this.whiteboard = whiteboard;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum whoCanShareScreen;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withWhoCanShareScreen(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenEnum whoCanShareScreen) {
        this.whoCanShareScreen = whoCanShareScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen_when_someone_is_sharing")
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withWhoCanShareScreenWhenSomeoneIsSharing(AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeetingWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing) {
        this.whoCanShareScreenWhenSomeoneIsSharing = whoCanShareScreenWhenSomeoneIsSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workplace_by_facebook")
    public Boolean workplaceByFacebook;
    public AccountSettingsUpdateApplicationJsonUpdateAccountSettingsInMeeting withWorkplaceByFacebook(Boolean workplaceByFacebook) {
        this.workplaceByFacebook = workplaceByFacebook;
        return this;
    }
}