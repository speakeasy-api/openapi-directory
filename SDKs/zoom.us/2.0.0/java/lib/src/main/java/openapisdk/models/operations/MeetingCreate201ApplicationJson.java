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
 * MeetingCreate201ApplicationJson
 * Meeting object
**/
public class MeetingCreate201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agenda")
    public String agenda;
    public MeetingCreate201ApplicationJson withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistant_id")
    public String assistantId;
    public MeetingCreate201ApplicationJson withAssistantId(String assistantId) {
        this.assistantId = assistantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public MeetingCreate201ApplicationJson withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public MeetingCreate201ApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("h323_password")
    public String h323Password;
    public MeetingCreate201ApplicationJson withH323Password(String h323Password) {
        this.h323Password = h323Password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_email")
    public String hostEmail;
    public MeetingCreate201ApplicationJson withHostEmail(String hostEmail) {
        this.hostEmail = hostEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public MeetingCreate201ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_url")
    public String joinUrl;
    public MeetingCreate201ApplicationJson withJoinUrl(String joinUrl) {
        this.joinUrl = joinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrences")
    public MeetingCreate201ApplicationJsonOccurrences[] occurrences;
    public MeetingCreate201ApplicationJson withOccurrences(MeetingCreate201ApplicationJsonOccurrences[] occurrences) {
        this.occurrences = occurrences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public MeetingCreate201ApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi")
    public Long pmi;
    public MeetingCreate201ApplicationJson withPmi(Long pmi) {
        this.pmi = pmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrence")
    public MeetingCreate201ApplicationJsonRecurrence recurrence;
    public MeetingCreate201ApplicationJson withRecurrence(MeetingCreate201ApplicationJsonRecurrence recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_url")
    public String registrationUrl;
    public MeetingCreate201ApplicationJson withRegistrationUrl(String registrationUrl) {
        this.registrationUrl = registrationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public MeetingCreate201ApplicationJsonSettings settings;
    public MeetingCreate201ApplicationJson withSettings(MeetingCreate201ApplicationJsonSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public MeetingCreate201ApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_url")
    public String startUrl;
    public MeetingCreate201ApplicationJson withStartUrl(String startUrl) {
        this.startUrl = startUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public MeetingCreate201ApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public MeetingCreate201ApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public MeetingCreate201ApplicationJsonTrackingFields[] trackingFields;
    public MeetingCreate201ApplicationJson withTrackingFields(MeetingCreate201ApplicationJsonTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public MeetingCreate201ApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
}