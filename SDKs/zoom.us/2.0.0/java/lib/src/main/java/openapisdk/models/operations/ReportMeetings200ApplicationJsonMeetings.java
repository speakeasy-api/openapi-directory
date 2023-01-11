package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ReportMeetings200ApplicationJsonMeetings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("custom_keys")
    public ReportMeetings200ApplicationJsonMeetingsCustomKeys[] customKeys;
    public ReportMeetings200ApplicationJsonMeetings withCustomKeys(ReportMeetings200ApplicationJsonMeetingsCustomKeys[] customKeys) {
        this.customKeys = customKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public ReportMeetings200ApplicationJsonMeetings withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("end_time")
    public OffsetDateTime endTime;
    public ReportMeetings200ApplicationJsonMeetings withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ReportMeetings200ApplicationJsonMeetings withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("participants_count")
    public Long participantsCount;
    public ReportMeetings200ApplicationJsonMeetings withParticipantsCount(Long participantsCount) {
        this.participantsCount = participantsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public String source;
    public ReportMeetings200ApplicationJsonMeetings withSource(String source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public ReportMeetings200ApplicationJsonMeetings withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public ReportMeetings200ApplicationJsonMeetings withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_minutes")
    public Long totalMinutes;
    public ReportMeetings200ApplicationJsonMeetings withTotalMinutes(Long totalMinutes) {
        this.totalMinutes = totalMinutes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public ReportMeetings200ApplicationJsonMeetings withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_email")
    public String userEmail;
    public ReportMeetings200ApplicationJsonMeetings withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public ReportMeetings200ApplicationJsonMeetings withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public ReportMeetings200ApplicationJsonMeetings withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}