package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RecordingsListRecordingListRecordingFileListRecordingFiles
 * Recording file object.
**/
public class RecordingsListRecordingListRecordingFileListRecordingFiles {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deleted_time")
    public String deletedTime;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withDeletedTime(String deletedTime) {
        this.deletedTime = deletedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("download_url")
    public String downloadUrl;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withDownloadUrl(String downloadUrl) {
        this.downloadUrl = downloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_size")
    public Double fileSize;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withFileSize(Double fileSize) {
        this.fileSize = fileSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_type")
    public String fileType;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withFileType(String fileType) {
        this.fileType = fileType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meeting_id")
    public String meetingId;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withMeetingId(String meetingId) {
        this.meetingId = meetingId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("play_url")
    public String playUrl;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withPlayUrl(String playUrl) {
        this.playUrl = playUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_end")
    public String recordingEnd;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withRecordingEnd(String recordingEnd) {
        this.recordingEnd = recordingEnd;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_start")
    public String recordingStart;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withRecordingStart(String recordingStart) {
        this.recordingStart = recordingStart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_type")
    public String recordingType;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withRecordingType(String recordingType) {
        this.recordingType = recordingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum status;
    public RecordingsListRecordingListRecordingFileListRecordingFiles withStatus(RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum status) {
        this.status = status;
        return this;
    }
}