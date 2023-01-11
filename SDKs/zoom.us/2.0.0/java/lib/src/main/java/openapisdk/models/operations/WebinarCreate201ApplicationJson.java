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
 * WebinarCreate201ApplicationJson
 * Webinar object.
**/
public class WebinarCreate201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agenda")
    public String agenda;
    public WebinarCreate201ApplicationJson withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public WebinarCreate201ApplicationJson withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public WebinarCreate201ApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_email")
    public String hostEmail;
    public WebinarCreate201ApplicationJson withHostEmail(String hostEmail) {
        this.hostEmail = hostEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public WebinarCreate201ApplicationJson withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public WebinarCreate201ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_url")
    public String joinUrl;
    public WebinarCreate201ApplicationJson withJoinUrl(String joinUrl) {
        this.joinUrl = joinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrences")
    public WebinarCreate201ApplicationJsonOccurrences[] occurrences;
    public WebinarCreate201ApplicationJson withOccurrences(WebinarCreate201ApplicationJsonOccurrences[] occurrences) {
        this.occurrences = occurrences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public WebinarCreate201ApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrence")
    public WebinarCreate201ApplicationJsonRecurrenceWebinar recurrence;
    public WebinarCreate201ApplicationJson withRecurrence(WebinarCreate201ApplicationJsonRecurrenceWebinar recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrants_confirmation_email")
    public Boolean registrantsConfirmationEmail;
    public WebinarCreate201ApplicationJson withRegistrantsConfirmationEmail(Boolean registrantsConfirmationEmail) {
        this.registrantsConfirmationEmail = registrantsConfirmationEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public WebinarCreate201ApplicationJsonSettings settings;
    public WebinarCreate201ApplicationJson withSettings(WebinarCreate201ApplicationJsonSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public WebinarCreate201ApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_url")
    public String startUrl;
    public WebinarCreate201ApplicationJson withStartUrl(String startUrl) {
        this.startUrl = startUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("template_id")
    public String templateId;
    public WebinarCreate201ApplicationJson withTemplateId(String templateId) {
        this.templateId = templateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public WebinarCreate201ApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public WebinarCreate201ApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public WebinarCreate201ApplicationJsonTrackingFields[] trackingFields;
    public WebinarCreate201ApplicationJson withTrackingFields(WebinarCreate201ApplicationJsonTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public WebinarCreate201ApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public WebinarCreate201ApplicationJson withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}