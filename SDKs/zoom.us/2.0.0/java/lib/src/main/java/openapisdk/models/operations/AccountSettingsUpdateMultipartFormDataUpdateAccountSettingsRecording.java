package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording
 * Account Settings: Recording.
**/
public class AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_user_access_recording")
    public Boolean accountUserAccessRecording;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withAccountUserAccessRecording(Boolean accountUserAccessRecording) {
        this.accountUserAccessRecording = accountUserAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_recovery_deleted_cloud_recordings")
    public Boolean allowRecoveryDeletedCloudRecordings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withAllowRecoveryDeletedCloudRecordings(Boolean allowRecoveryDeletedCloudRecordings) {
        this.allowRecoveryDeletedCloudRecordings = allowRecoveryDeletedCloudRecordings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archive")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive archive;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withArchive(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingArchive archive) {
        this.archive = archive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr")
    public Boolean autoDeleteCmr;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withAutoDeleteCmr(Boolean autoDeleteCmr) {
        this.autoDeleteCmr = autoDeleteCmr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_delete_cmr_days")
    public Long autoDeleteCmrDays;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withAutoDeleteCmrDays(Long autoDeleteCmrDays) {
        this.autoDeleteCmrDays = autoDeleteCmrDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum autoRecording;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withAutoRecording(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingAutoRecordingEnum autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download")
    public Boolean cloudRecordingDownload;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withCloudRecordingDownload(Boolean cloudRecordingDownload) {
        this.cloudRecordingDownload = cloudRecordingDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download_host")
    public Boolean cloudRecordingDownloadHost;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withCloudRecordingDownloadHost(Boolean cloudRecordingDownloadHost) {
        this.cloudRecordingDownloadHost = cloudRecordingDownloadHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_delete_cloud_recording")
    public Boolean hostDeleteCloudRecording;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withHostDeleteCloudRecording(Boolean hostDeleteCloudRecording) {
        this.hostDeleteCloudRecording = hostDeleteCloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl ipAddressAccessControl;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withIpAddressAccessControl(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prevent_host_access_recording")
    public Boolean preventHostAccessRecording;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withPreventHostAccessRecording(Boolean preventHostAccessRecording) {
        this.preventHostAccessRecording = preventHostAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_audio_file")
    public Boolean recordAudioFile;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withRecordAudioFile(Boolean recordAudioFile) {
        this.recordAudioFile = recordAudioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_gallery_view")
    public Boolean recordGalleryView;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withRecordGalleryView(Boolean recordGalleryView) {
        this.recordGalleryView = recordGalleryView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_speaker_view")
    public Boolean recordSpeakerView;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withRecordSpeakerView(Boolean recordSpeakerView) {
        this.recordSpeakerView = recordSpeakerView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_audio_transcript")
    public Boolean recordingAudioTranscript;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withRecordingAudioTranscript(Boolean recordingAudioTranscript) {
        this.recordingAudioTranscript = recordingAudioTranscript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_disclaimer")
    public Boolean recordingDisclaimer;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withRecordingDisclaimer(Boolean recordingDisclaimer) {
        this.recordingDisclaimer = recordingDisclaimer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_password_requirement")
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement recordingPasswordRequirement;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withRecordingPasswordRequirement(AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecordingRecordingPasswordRequirement recordingPasswordRequirement) {
        this.recordingPasswordRequirement = recordingPasswordRequirement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_password_for_existing_cloud_recordings")
    public Boolean requiredPasswordForExistingCloudRecordings;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withRequiredPasswordForExistingCloudRecordings(Boolean requiredPasswordForExistingCloudRecordings) {
        this.requiredPasswordForExistingCloudRecordings = requiredPasswordForExistingCloudRecordings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("save_chat_text")
    public Boolean saveChatText;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withSaveChatText(Boolean saveChatText) {
        this.saveChatText = saveChatText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_timestamp")
    public Boolean showTimestamp;
    public AccountSettingsUpdateMultipartFormDataUpdateAccountSettingsRecording withShowTimestamp(Boolean showTimestamp) {
        this.showTimestamp = showTimestamp;
        return this;
    }
}