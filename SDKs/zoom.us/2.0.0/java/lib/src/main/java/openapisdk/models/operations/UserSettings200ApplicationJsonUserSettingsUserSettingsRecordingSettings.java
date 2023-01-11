package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ask_host_to_confirm_disclaimer")
    public Boolean askHostToConfirmDisclaimer;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withAskHostToConfirmDisclaimer(Boolean askHostToConfirmDisclaimer) {
        this.askHostToConfirmDisclaimer = askHostToConfirmDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ask_participants_to_consent_disclaimer")
    public Boolean askParticipantsToConsentDisclaimer;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withAskParticipantsToConsentDisclaimer(Boolean askParticipantsToConsentDisclaimer) {
        this.askParticipantsToConsentDisclaimer = askParticipantsToConsentDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr")
    public Boolean autoDeleteCmr;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withAutoDeleteCmr(Boolean autoDeleteCmr) {
        this.autoDeleteCmr = autoDeleteCmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr_days")
    public Long autoDeleteCmrDays;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withAutoDeleteCmrDays(Long autoDeleteCmrDays) {
        this.autoDeleteCmrDays = autoDeleteCmrDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum autoRecording;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withAutoRecording(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_pause_stop_recording")
    public Boolean hostPauseStopRecording;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withHostPauseStopRecording(Boolean hostPauseStopRecording) {
        this.hostPauseStopRecording = hostPauseStopRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl ipAddressAccessControl;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withIpAddressAccessControl(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_audio_file")
    public Boolean recordAudioFile;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withRecordAudioFile(Boolean recordAudioFile) {
        this.recordAudioFile = recordAudioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_gallery_view")
    public Boolean recordGalleryView;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withRecordGalleryView(Boolean recordGalleryView) {
        this.recordGalleryView = recordGalleryView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_speaker_view")
    public Boolean recordSpeakerView;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withRecordSpeakerView(Boolean recordSpeakerView) {
        this.recordSpeakerView = recordSpeakerView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_audio_transcript")
    public Boolean recordingAudioTranscript;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withRecordingAudioTranscript(Boolean recordingAudioTranscript) {
        this.recordingAudioTranscript = recordingAudioTranscript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_disclaimer")
    public Boolean recordingDisclaimer;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withRecordingDisclaimer(Boolean recordingDisclaimer) {
        this.recordingDisclaimer = recordingDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_password_requirement")
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement recordingPasswordRequirement;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withRecordingPasswordRequirement(UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement recordingPasswordRequirement) {
        this.recordingPasswordRequirement = recordingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("save_chat_text")
    public Boolean saveChatText;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withSaveChatText(Boolean saveChatText) {
        this.saveChatText = saveChatText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_timestamp")
    public Boolean showTimestamp;
    public UserSettings200ApplicationJsonUserSettingsUserSettingsRecordingSettings withShowTimestamp(Boolean showTimestamp) {
        this.showTimestamp = showTimestamp;
        return this;
    }
}