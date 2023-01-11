package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetGroupSettings200ApplicationJson1Recording {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_user_access_recording")
    public Boolean accountUserAccessRecording;
    public GetGroupSettings200ApplicationJson1Recording withAccountUserAccessRecording(Boolean accountUserAccessRecording) {
        this.accountUserAccessRecording = accountUserAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archive")
    public GetGroupSettings200ApplicationJson1RecordingArchive archive;
    public GetGroupSettings200ApplicationJson1Recording withArchive(GetGroupSettings200ApplicationJson1RecordingArchive archive) {
        this.archive = archive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auto_recording")
    public String autoRecording;
    public GetGroupSettings200ApplicationJson1Recording withAutoRecording(String autoRecording) {
        this.autoRecording = autoRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording")
    public Boolean cloudRecording;
    public GetGroupSettings200ApplicationJson1Recording withCloudRecording(Boolean cloudRecording) {
        this.cloudRecording = cloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download")
    public Boolean cloudRecordingDownload;
    public GetGroupSettings200ApplicationJson1Recording withCloudRecordingDownload(Boolean cloudRecordingDownload) {
        this.cloudRecordingDownload = cloudRecordingDownload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloud_recording_download_host")
    public Boolean cloudRecordingDownloadHost;
    public GetGroupSettings200ApplicationJson1Recording withCloudRecordingDownloadHost(Boolean cloudRecordingDownloadHost) {
        this.cloudRecordingDownloadHost = cloudRecordingDownloadHost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_delete_cloud_recording")
    public Boolean hostDeleteCloudRecording;
    public GetGroupSettings200ApplicationJson1Recording withHostDeleteCloudRecording(Boolean hostDeleteCloudRecording) {
        this.hostDeleteCloudRecording = hostDeleteCloudRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_address_access_control")
    public GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl ipAddressAccessControl;
    public GetGroupSettings200ApplicationJson1Recording withIpAddressAccessControl(GetGroupSettings200ApplicationJson1RecordingIpAddressAccessControl ipAddressAccessControl) {
        this.ipAddressAccessControl = ipAddressAccessControl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("local_recording")
    public Boolean localRecording;
    public GetGroupSettings200ApplicationJson1Recording withLocalRecording(Boolean localRecording) {
        this.localRecording = localRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prevent_host_access_recording")
    public Boolean preventHostAccessRecording;
    public GetGroupSettings200ApplicationJson1Recording withPreventHostAccessRecording(Boolean preventHostAccessRecording) {
        this.preventHostAccessRecording = preventHostAccessRecording;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_audio_file")
    public Boolean recordAudioFile;
    public GetGroupSettings200ApplicationJson1Recording withRecordAudioFile(Boolean recordAudioFile) {
        this.recordAudioFile = recordAudioFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_gallery_view")
    public Boolean recordGalleryView;
    public GetGroupSettings200ApplicationJson1Recording withRecordGalleryView(Boolean recordGalleryView) {
        this.recordGalleryView = recordGalleryView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("record_speaker_view")
    public Boolean recordSpeakerView;
    public GetGroupSettings200ApplicationJson1Recording withRecordSpeakerView(Boolean recordSpeakerView) {
        this.recordSpeakerView = recordSpeakerView;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_audio_transcript")
    public Boolean recordingAudioTranscript;
    public GetGroupSettings200ApplicationJson1Recording withRecordingAudioTranscript(Boolean recordingAudioTranscript) {
        this.recordingAudioTranscript = recordingAudioTranscript;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("save_chat_text")
    public Boolean saveChatText;
    public GetGroupSettings200ApplicationJson1Recording withSaveChatText(Boolean saveChatText) {
        this.saveChatText = saveChatText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("show_timestamp")
    public Boolean showTimestamp;
    public GetGroupSettings200ApplicationJson1Recording withShowTimestamp(Boolean showTimestamp) {
        this.showTimestamp = showTimestamp;
        return this;
    }
}