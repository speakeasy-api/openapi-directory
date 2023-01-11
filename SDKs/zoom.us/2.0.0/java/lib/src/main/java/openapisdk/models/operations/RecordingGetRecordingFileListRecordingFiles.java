package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordingGetRecordingFileListRecordingFiles
 * Recording file object.
**/
public class RecordingGetRecordingFileListRecordingFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted_time")
    public String deletedTime;
    public RecordingGetRecordingFileListRecordingFiles withDeletedTime(String deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public RecordingGetRecordingFileListRecordingFiles withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Double fileSize;
    public RecordingGetRecordingFileListRecordingFiles withFileSize(Double fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_type")
    public String fileType;
    public RecordingGetRecordingFileListRecordingFiles withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RecordingGetRecordingFileListRecordingFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_id")
    public String meetingId;
    public RecordingGetRecordingFileListRecordingFiles withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("play_url")
    public String playUrl;
    public RecordingGetRecordingFileListRecordingFiles withPlayUrl(String playUrl) {
        this.playUrl = playUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_end")
    public String recordingEnd;
    public RecordingGetRecordingFileListRecordingFiles withRecordingEnd(String recordingEnd) {
        this.recordingEnd = recordingEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_start")
    public String recordingStart;
    public RecordingGetRecordingFileListRecordingFiles withRecordingStart(String recordingStart) {
        this.recordingStart = recordingStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_type")
    public String recordingType;
    public RecordingGetRecordingFileListRecordingFiles withRecordingType(String recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RecordingGetRecordingFileListRecordingFilesStatusEnum status;
    public RecordingGetRecordingFileListRecordingFiles withStatus(RecordingGetRecordingFileListRecordingFilesStatusEnum status) {
        this.status = status;
        return this;
    }
}