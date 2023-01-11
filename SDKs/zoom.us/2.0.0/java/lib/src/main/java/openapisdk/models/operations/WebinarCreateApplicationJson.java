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
 * WebinarCreateApplicationJson
 * Base webinar object for sessions.
**/
public class WebinarCreateApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agenda")
    public String agenda;
    public WebinarCreateApplicationJson withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public WebinarCreateApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public WebinarCreateApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrence")
    public WebinarCreateApplicationJsonRecurrenceWebinar recurrence;
    public WebinarCreateApplicationJson withRecurrence(WebinarCreateApplicationJsonRecurrenceWebinar recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public WebinarCreateApplicationJsonSettings settings;
    public WebinarCreateApplicationJson withSettings(WebinarCreateApplicationJsonSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public WebinarCreateApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public WebinarCreateApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public WebinarCreateApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public WebinarCreateApplicationJsonTrackingFields[] trackingFields;
    public WebinarCreateApplicationJson withTrackingFields(WebinarCreateApplicationJsonTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreateApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
}