package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * RecordingsListRecordingListRecordingFileList
 * List of recording file.
**/
public class RecordingsListRecordingListRecordingFileList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("account_id")
    public String accountId;
    public RecordingsListRecordingListRecordingFileList withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public RecordingsListRecordingListRecordingFileList withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public RecordingsListRecordingListRecordingFileList withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public RecordingsListRecordingListRecordingFileList withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_count")
    public String recordingCount;
    public RecordingsListRecordingListRecordingFileList withRecordingCount(String recordingCount) {
        this.recordingCount = recordingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_files")
    public RecordingsListRecordingListRecordingFileListRecordingFiles[] recordingFiles;
    public RecordingsListRecordingListRecordingFileList withRecordingFiles(RecordingsListRecordingListRecordingFileListRecordingFiles[] recordingFiles) {
        this.recordingFiles = recordingFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public RecordingsListRecordingListRecordingFileList withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public RecordingsListRecordingListRecordingFileList withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_size")
    public String totalSize;
    public RecordingsListRecordingListRecordingFileList withTotalSize(String totalSize) {
        this.totalSize = totalSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public RecordingsListRecordingListRecordingFileList withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public RecordingsListRecordingListRecordingFileList withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}