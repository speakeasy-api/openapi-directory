package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ask_host_to_confirm_disclaimer")
    public Boolean askHostToConfirmDisclaimer;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withAskHostToConfirmDisclaimer(Boolean askHostToConfirmDisclaimer) {
        this.askHostToConfirmDisclaimer = askHostToConfirmDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ask_participants_to_consent_disclaimer")
    public Boolean askParticipantsToConsentDisclaimer;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withAskParticipantsToConsentDisclaimer(Boolean askParticipantsToConsentDisclaimer) {
        this.askParticipantsToConsentDisclaimer = askParticipantsToConsentDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr")
    public Boolean autoDeleteCmr;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withAutoDeleteCmr(Boolean autoDeleteCmr) {
        this.autoDeleteCmr = autoDeleteCmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr_days")
    public Long autoDeleteCmrDays;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withAutoDeleteCmrDays(Long autoDeleteCmrDays) {
        this.autoDeleteCmrDays = autoDeleteCmrDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum autoRecording;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withAutoRecording(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_pause_stop_recording")
    public Boolean hostPauseStopRecording;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withHostPauseStopRecording(Boolean hostPauseStopRecording) {
        this.hostPauseStopRecording = hostPauseStopRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl ipAddressAccessControl;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withIpAddressAccessControl(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_audio_file")
    public Boolean recordAudioFile;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withRecordAudioFile(Boolean recordAudioFile) {
        this.recordAudioFile = recordAudioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_gallery_view")
    public Boolean recordGalleryView;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withRecordGalleryView(Boolean recordGalleryView) {
        this.recordGalleryView = recordGalleryView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_speaker_view")
    public Boolean recordSpeakerView;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withRecordSpeakerView(Boolean recordSpeakerView) {
        this.recordSpeakerView = recordSpeakerView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_audio_transcript")
    public Boolean recordingAudioTranscript;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withRecordingAudioTranscript(Boolean recordingAudioTranscript) {
        this.recordingAudioTranscript = recordingAudioTranscript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_disclaimer")
    public Boolean recordingDisclaimer;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withRecordingDisclaimer(Boolean recordingDisclaimer) {
        this.recordingDisclaimer = recordingDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_password_requirement")
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement recordingPasswordRequirement;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withRecordingPasswordRequirement(UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettingsRecordingPasswordRequirement recordingPasswordRequirement) {
        this.recordingPasswordRequirement = recordingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("save_chat_text")
    public Boolean saveChatText;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withSaveChatText(Boolean saveChatText) {
        this.saveChatText = saveChatText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_timestamp")
    public Boolean showTimestamp;
    public UserSettingsUpdateMultipartFormDataUserSettingsUserSettingsRecordingSettings withShowTimestamp(Boolean showTimestamp) {
        this.showTimestamp = showTimestamp;
        return this;
    }
}