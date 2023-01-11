package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PastMeetingDetails200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public PastMeetingDetails200ApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public PastMeetingDetails200ApplicationJson withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public PastMeetingDetails200ApplicationJson withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PastMeetingDetails200ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants_count")
    public Long participantsCount;
    public PastMeetingDetails200ApplicationJson withParticipantsCount(Long participantsCount) {
        this.participantsCount = participantsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public PastMeetingDetails200ApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public PastMeetingDetails200ApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_minutes")
    public Long totalMinutes;
    public PastMeetingDetails200ApplicationJson withTotalMinutes(Long totalMinutes) {
        this.totalMinutes = totalMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public PastMeetingDetails200ApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_email")
    public String userEmail;
    public PastMeetingDetails200ApplicationJson withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public PastMeetingDetails200ApplicationJson withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public PastMeetingDetails200ApplicationJson withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}