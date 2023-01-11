package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettings200ApplicationJsonAccountSettingsRecording
 * Account Settings: Recording.
**/
public class AccountSettings200ApplicationJsonAccountSettingsRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_user_access_recording")
    public Boolean accountUserAccessRecording;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withAccountUserAccessRecording(Boolean accountUserAccessRecording) {
        this.accountUserAccessRecording = accountUserAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_recovery_deleted_cloud_recordings")
    public Boolean allowRecoveryDeletedCloudRecordings;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withAllowRecoveryDeletedCloudRecordings(Boolean allowRecoveryDeletedCloudRecordings) {
        this.allowRecoveryDeletedCloudRecordings = allowRecoveryDeletedCloudRecordings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archive")
    public AccountSettings200ApplicationJsonAccountSettingsRecordingArchive archive;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withArchive(AccountSettings200ApplicationJsonAccountSettingsRecordingArchive archive) {
        this.archive = archive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr")
    public Boolean autoDeleteCmr;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withAutoDeleteCmr(Boolean autoDeleteCmr) {
        this.autoDeleteCmr = autoDeleteCmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr_days")
    public Long autoDeleteCmrDays;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withAutoDeleteCmrDays(Long autoDeleteCmrDays) {
        this.autoDeleteCmrDays = autoDeleteCmrDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum autoRecording;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withAutoRecording(AccountSettings200ApplicationJsonAccountSettingsRecordingAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download")
    public Boolean cloudRecordingDownload;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withCloudRecordingDownload(Boolean cloudRecordingDownload) {
        this.cloudRecordingDownload = cloudRecordingDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download_host")
    public Boolean cloudRecordingDownloadHost;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withCloudRecordingDownloadHost(Boolean cloudRecordingDownloadHost) {
        this.cloudRecordingDownloadHost = cloudRecordingDownloadHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_delete_cloud_recording")
    public Boolean hostDeleteCloudRecording;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withHostDeleteCloudRecording(Boolean hostDeleteCloudRecording) {
        this.hostDeleteCloudRecording = hostDeleteCloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl ipAddressAccessControl;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withIpAddressAccessControl(AccountSettings200ApplicationJsonAccountSettingsRecordingIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prevent_host_access_recording")
    public Boolean preventHostAccessRecording;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withPreventHostAccessRecording(Boolean preventHostAccessRecording) {
        this.preventHostAccessRecording = preventHostAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_audio_file")
    public Boolean recordAudioFile;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withRecordAudioFile(Boolean recordAudioFile) {
        this.recordAudioFile = recordAudioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_gallery_view")
    public Boolean recordGalleryView;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withRecordGalleryView(Boolean recordGalleryView) {
        this.recordGalleryView = recordGalleryView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_speaker_view")
    public Boolean recordSpeakerView;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withRecordSpeakerView(Boolean recordSpeakerView) {
        this.recordSpeakerView = recordSpeakerView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_audio_transcript")
    public Boolean recordingAudioTranscript;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withRecordingAudioTranscript(Boolean recordingAudioTranscript) {
        this.recordingAudioTranscript = recordingAudioTranscript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_disclaimer")
    public Boolean recordingDisclaimer;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withRecordingDisclaimer(Boolean recordingDisclaimer) {
        this.recordingDisclaimer = recordingDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_password_requirement")
    public AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement recordingPasswordRequirement;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withRecordingPasswordRequirement(AccountSettings200ApplicationJsonAccountSettingsRecordingRecordingPasswordRequirement recordingPasswordRequirement) {
        this.recordingPasswordRequirement = recordingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_password_for_existing_cloud_recordings")
    public Boolean requiredPasswordForExistingCloudRecordings;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withRequiredPasswordForExistingCloudRecordings(Boolean requiredPasswordForExistingCloudRecordings) {
        this.requiredPasswordForExistingCloudRecordings = requiredPasswordForExistingCloudRecordings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("save_chat_text")
    public Boolean saveChatText;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withSaveChatText(Boolean saveChatText) {
        this.saveChatText = saveChatText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_timestamp")
    public Boolean showTimestamp;
    public AccountSettings200ApplicationJsonAccountSettingsRecording withShowTimestamp(Boolean showTimestamp) {
        this.showTimestamp = showTimestamp;
        return this;
    }
}