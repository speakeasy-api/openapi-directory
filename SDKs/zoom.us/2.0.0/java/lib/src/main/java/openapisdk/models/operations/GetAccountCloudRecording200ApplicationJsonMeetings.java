package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetAccountCloudRecording200ApplicationJsonMeetings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public GetAccountCloudRecording200ApplicationJsonMeetings withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public GetAccountCloudRecording200ApplicationJsonMeetings withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetAccountCloudRecording200ApplicationJsonMeetings withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_count")
    public Long recordingCount;
    public GetAccountCloudRecording200ApplicationJsonMeetings withRecordingCount(Long recordingCount) {
        this.recordingCount = recordingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_files")
    public GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles[] recordingFiles;
    public GetAccountCloudRecording200ApplicationJsonMeetings withRecordingFiles(GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles[] recordingFiles) {
        this.recordingFiles = recordingFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public GetAccountCloudRecording200ApplicationJsonMeetings withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public GetAccountCloudRecording200ApplicationJsonMeetings withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_size")
    public Long totalSize;
    public GetAccountCloudRecording200ApplicationJsonMeetings withTotalSize(Long totalSize) {
        this.totalSize = totalSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public GetAccountCloudRecording200ApplicationJsonMeetings withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}