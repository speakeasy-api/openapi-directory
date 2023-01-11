package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_live_streaming")
    public Boolean allowLiveStreaming;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withAllowLiveStreaming(Boolean allowLiveStreaming) {
        this.allowLiveStreaming = allowLiveStreaming;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotation")
    public Boolean annotation;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withAnnotation(Boolean annotation) {
        this.annotation = annotation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attendee_on_hold")
    public Boolean attendeeOnHold;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withAttendeeOnHold(Boolean attendeeOnHold) {
        this.attendeeOnHold = attendeeOnHold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_saving_chat")
    public Boolean autoSavingChat;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withAutoSavingChat(Boolean autoSavingChat) {
        this.autoSavingChat = autoSavingChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("breakout_room")
    public Boolean breakoutRoom;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withBreakoutRoom(Boolean breakoutRoom) {
        this.breakoutRoom = breakoutRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chat")
    public Boolean chat;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withChat(Boolean chat) {
        this.chat = chat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_caption")
    public Boolean closedCaption;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withClosedCaption(Boolean closedCaption) {
        this.closedCaption = closedCaption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("co_host")
    public Boolean coHost;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withCoHost(Boolean coHost) {
        this.coHost = coHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_data_center_regions")
    public Boolean customDataCenterRegions;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withCustomDataCenterRegions(Boolean customDataCenterRegions) {
        this.customDataCenterRegions = customDataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_live_streaming_service")
    public Boolean customLiveStreamingService;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withCustomLiveStreamingService(Boolean customLiveStreamingService) {
        this.customLiveStreamingService = customLiveStreamingService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_service_instructions")
    public String customServiceInstructions;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withCustomServiceInstructions(String customServiceInstructions) {
        this.customServiceInstructions = customServiceInstructions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data_center_regions")
    public String[] dataCenterRegions;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withDataCenterRegions(String[] dataCenterRegions) {
        this.dataCenterRegions = dataCenterRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("e2e_encryption")
    public Boolean e2eEncryption;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withE2eEncryption(Boolean e2eEncryption) {
        this.e2eEncryption = e2eEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entry_exit_chime")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum entryExitChime;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withEntryExitChime(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsEntryExitChimeEnum entryExitChime) {
        this.entryExitChime = entryExitChime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("far_end_camera_control")
    public Boolean farEndCameraControl;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withFarEndCameraControl(Boolean farEndCameraControl) {
        this.farEndCameraControl = farEndCameraControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedback")
    public Boolean feedback;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withFeedback(Boolean feedback) {
        this.feedback = feedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_transfer")
    public Boolean fileTransfer;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withFileTransfer(Boolean fileTransfer) {
        this.fileTransfer = fileTransfer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("group_hd")
    public Boolean groupHd;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withGroupHd(Boolean groupHd) {
        this.groupHd = groupHd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("non_verbal_feedback")
    public Boolean nonVerbalFeedback;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withNonVerbalFeedback(Boolean nonVerbalFeedback) {
        this.nonVerbalFeedback = nonVerbalFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("polling")
    public Boolean polling;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withPolling(Boolean polling) {
        this.polling = polling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("private_chat")
    public Boolean privateChat;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withPrivateChat(Boolean privateChat) {
        this.privateChat = privateChat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_play_voice")
    public Boolean recordPlayVoice;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withRecordPlayVoice(Boolean recordPlayVoice) {
        this.recordPlayVoice = recordPlayVoice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_control")
    public Boolean remoteControl;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withRemoteControl(Boolean remoteControl) {
        this.remoteControl = remoteControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("remote_support")
    public Boolean remoteSupport;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withRemoteSupport(Boolean remoteSupport) {
        this.remoteSupport = remoteSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_permission_to_unmute")
    public Boolean requestPermissionToUnmute;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withRequestPermissionToUnmute(Boolean requestPermissionToUnmute) {
        this.requestPermissionToUnmute = requestPermissionToUnmute;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("screen_sharing")
    public Boolean screenSharing;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withScreenSharing(Boolean screenSharing) {
        this.screenSharing = screenSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("share_dual_camera")
    public Boolean shareDualCamera;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withShareDualCamera(Boolean shareDualCamera) {
        this.shareDualCamera = shareDualCamera;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_meeting_control_toolbar")
    public Boolean showMeetingControlToolbar;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withShowMeetingControlToolbar(Boolean showMeetingControlToolbar) {
        this.showMeetingControlToolbar = showMeetingControlToolbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background")
    public Boolean virtualBackground;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withVirtualBackground(Boolean virtualBackground) {
        this.virtualBackground = virtualBackground;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("virtual_background_settings")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings virtualBackgroundSettings;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withVirtualBackgroundSettings(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsVirtualBackgroundSettings virtualBackgroundSettings) {
        this.virtualBackgroundSettings = virtualBackgroundSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waiting_room")
    public Boolean waitingRoom;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withWaitingRoom(Boolean waitingRoom) {
        this.waitingRoom = waitingRoom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum whoCanShareScreen;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withWhoCanShareScreen(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenEnum whoCanShareScreen) {
        this.whoCanShareScreen = whoCanShareScreen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("who_can_share_screen_when_someone_is_sharing")
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withWhoCanShareScreenWhenSomeoneIsSharing(UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettingsWhoCanShareScreenWhenSomeoneIsSharingEnum whoCanShareScreenWhenSomeoneIsSharing) {
        this.whoCanShareScreenWhenSomeoneIsSharing = whoCanShareScreenWhenSomeoneIsSharing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workplace_by_facebook")
    public Boolean workplaceByFacebook;
    public UserSettingsUpdateApplicationJsonUserSettingsUserSettingsMeetingSettings withWorkplaceByFacebook(Boolean workplaceByFacebook) {
        this.workplaceByFacebook = workplaceByFacebook;
        return this;
    }
}