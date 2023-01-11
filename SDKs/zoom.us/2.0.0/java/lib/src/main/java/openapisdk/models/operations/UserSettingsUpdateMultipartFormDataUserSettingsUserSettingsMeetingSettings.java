package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_live_streaming")
    public Boolean allowLiveStreaming;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withAllowLiveStreaming(Boolean allowLiveStreaming) {
        this.allowLiveStreaming = allowLiveStreaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_live_streaming_service")
    public Boolean customLiveStreamingService;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withCustomLiveStreamingService(Boolean customLiveStreamingService) {
        this.customLiveStreamingService = customLiveStreamingService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_service_instructions")
    public String customServiceInstructions;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withCustomServiceInstructions(String customServiceInstructions) {
        this.customServiceInstructions = customServiceInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center_regions")
    public String[] dataCenterRegions;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withDataCenterRegions(String[] dataCenterRegions) {
        this.dataCenterRegions = dataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum entryExitChime;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withEntryExitChime(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_verbal_feedback")
    public Boolean nonVerbalFeedback;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withNonVerbalFeedback(Boolean nonVerbalFeedback) {
        this.nonVerbalFeedback = nonVerbalFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_play_voice")
    public Boolean recordPlayVoice;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withRecordPlayVoice(Boolean recordPlayVoice) {
        this.recordPlayVoice = recordPlayVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_support")
    public Boolean remoteSupport;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withRemoteSupport(Boolean remoteSupport) {
        this.remoteSupport = remoteSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_dual_camera")
    public Boolean shareDualCamera;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withShareDualCamera(Boolean shareDualCamera) {
        this.shareDualCamera = shareDualCamera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background_settings")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings virtualBackgroundSettings;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withVirtualBackgroundSettings(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings virtualBackgroundSettings) {
        this.virtualBackgroundSettings = virtualBackgroundSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum whoCanShareScreen;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withWhoCanShareScreen(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum whoCanShareScreen) {
        this.whoCanShareScreen = whoCanShareScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen_when_someone_is_sharing")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withWhoCanShareScreenWhenSomeoneIsSharing(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing) {
        this.whoCanShareScreenWhenSomeoneIsSharing = whoCanShareScreenWhenSomeoneIsSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workplace_by_facebook")
    public Boolean workplaceByFacebook;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsMeetingSettings withWorkplaceByFacebook(Boolean workplaceByFacebook) {
        this.workplaceByFacebook = workplaceByFacebook;
        return this;
    }
}