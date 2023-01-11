package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Double fileSize;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withFileSize(Double fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_type")
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum fileType;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withFileType(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_id")
    public String meetingId;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("play_url")
    public String playUrl;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withPlayUrl(String playUrl) {
        this.playUrl = playUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_end")
    public String recordingEnd;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withRecordingEnd(String recordingEnd) {
        this.recordingEnd = recordingEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_start")
    public String recordingStart;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withRecordingStart(String recordingStart) {
        this.recordingStart = recordingStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_type")
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum recordingType;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withRecordingType(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum status;
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles withStatus(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum status) {
        this.status = status;
        return this;
    }
}