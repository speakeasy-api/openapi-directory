package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_live_streaming")
    public Boolean allowLiveStreaming;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withAllowLiveStreaming(Boolean allowLiveStreaming) {
        this.allowLiveStreaming = allowLiveStreaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_live_streaming_service")
    public Boolean customLiveStreamingService;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withCustomLiveStreamingService(Boolean customLiveStreamingService) {
        this.customLiveStreamingService = customLiveStreamingService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_service_instructions")
    public String customServiceInstructions;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withCustomServiceInstructions(String customServiceInstructions) {
        this.customServiceInstructions = customServiceInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center_regions")
    public String[] dataCenterRegions;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withDataCenterRegions(String[] dataCenterRegions) {
        this.dataCenterRegions = dataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum entryExitChime;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withEntryExitChime(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_verbal_feedback")
    public Boolean nonVerbalFeedback;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withNonVerbalFeedback(Boolean nonVerbalFeedback) {
        this.nonVerbalFeedback = nonVerbalFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_play_voice")
    public Boolean recordPlayVoice;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withRecordPlayVoice(Boolean recordPlayVoice) {
        this.recordPlayVoice = recordPlayVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_support")
    public Boolean remoteSupport;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withRemoteSupport(Boolean remoteSupport) {
        this.remoteSupport = remoteSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_dual_camera")
    public Boolean shareDualCamera;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withShareDualCamera(Boolean shareDualCamera) {
        this.shareDualCamera = shareDualCamera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background_settings")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings virtualBackgroundSettings;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withVirtualBackgroundSettings(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings virtualBackgroundSettings) {
        this.virtualBackgroundSettings = virtualBackgroundSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum whoCanShareScreen;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withWhoCanShareScreen(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum whoCanShareScreen) {
        this.whoCanShareScreen = whoCanShareScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen_when_someone_is_sharing")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withWhoCanShareScreenWhenSomeoneIsSharing(UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing) {
        this.whoCanShareScreenWhenSomeoneIsSharing = whoCanShareScreenWhenSomeoneIsSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workplace_by_facebook")
    public Boolean workplaceByFacebook;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsMeetingSettings withWorkplaceByFacebook(Boolean workplaceByFacebook) {
        this.workplaceByFacebook = workplaceByFacebook;
        return this;
    }
}