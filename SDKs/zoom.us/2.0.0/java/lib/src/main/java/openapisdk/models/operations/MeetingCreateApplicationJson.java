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
 * MeetingCreateApplicationJson
 * Base object for meeting.
**/
public class MeetingCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agenda")
    public String agenda;
    public MeetingCreateApplicationJson withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public MeetingCreateApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public MeetingCreateApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrence")
    public MeetingCreateApplicationJsonRecurrence recurrence;
    public MeetingCreateApplicationJson withRecurrence(MeetingCreateApplicationJsonRecurrence recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for")
    public String scheduleFor;
    public MeetingCreateApplicationJson withScheduleFor(String scheduleFor) {
        this.scheduleFor = scheduleFor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public MeetingCreateApplicationJsonSettings settings;
    public MeetingCreateApplicationJson withSettings(MeetingCreateApplicationJsonSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public MeetingCreateApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_id")
    public String templateId;
    public MeetingCreateApplicationJson withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public MeetingCreateApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public MeetingCreateApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public MeetingCreateApplicationJsonTrackingFields[] trackingFields;
    public MeetingCreateApplicationJson withTrackingFields(MeetingCreateApplicationJsonTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public MeetingCreateApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
}