package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListArchivedFiles200ApplicationJsonMeetings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("archive_files")
    public ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles[] archiveFiles;
    public ListArchivedFiles200ApplicationJsonMeetings withArchiveFiles(ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles[] archiveFiles) {
        this.archiveFiles = archiveFiles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public ListArchivedFiles200ApplicationJsonMeetings withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public ListArchivedFiles200ApplicationJsonMeetings withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ListArchivedFiles200ApplicationJsonMeetings withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recording_count")
    public Long recordingCount;
    public ListArchivedFiles200ApplicationJsonMeetings withRecordingCount(Long recordingCount) {
        this.recordingCount = recordingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_time")
    public String startTime;
    public ListArchivedFiles200ApplicationJsonMeetings withStartTime(String startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public ListArchivedFiles200ApplicationJsonMeetings withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public ListArchivedFiles200ApplicationJsonMeetings withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_size")
    public Long totalSize;
    public ListArchivedFiles200ApplicationJsonMeetings withTotalSize(Long totalSize) {
        this.totalSize = totalSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public ListArchivedFiles200ApplicationJsonMeetings withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public ListArchivedFiles200ApplicationJsonMeetings withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}