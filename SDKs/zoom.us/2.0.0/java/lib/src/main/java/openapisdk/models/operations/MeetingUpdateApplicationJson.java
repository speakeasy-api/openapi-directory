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
 * MeetingUpdateApplicationJson
 * Base object for sessions.
**/
public class MeetingUpdateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agenda")
    public String agenda;
    public MeetingUpdateApplicationJson withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public MeetingUpdateApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public MeetingUpdateApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrence")
    public MeetingUpdateApplicationJsonRecurrence recurrence;
    public MeetingUpdateApplicationJson withRecurrence(MeetingUpdateApplicationJsonRecurrence recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule_for")
    public String scheduleFor;
    public MeetingUpdateApplicationJson withScheduleFor(String scheduleFor) {
        this.scheduleFor = scheduleFor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public MeetingUpdateApplicationJsonSettings settings;
    public MeetingUpdateApplicationJson withSettings(MeetingUpdateApplicationJsonSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public MeetingUpdateApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_id")
    public String templateId;
    public MeetingUpdateApplicationJson withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public MeetingUpdateApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public MeetingUpdateApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public MeetingUpdateApplicationJsonTrackingFields[] trackingFields;
    public MeetingUpdateApplicationJson withTrackingFields(MeetingUpdateApplicationJsonTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public MeetingUpdateApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
}