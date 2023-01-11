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
 * Meeting200ApplicationJson
 * Meeting object.
**/
public class Meeting200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("agenda")
    public String agenda;
    public Meeting200ApplicationJson withAgenda(String agenda) {
        this.agenda = agenda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assistant_id")
    public String assistantId;
    public Meeting200ApplicationJson withAssistantId(String assistantId) {
        this.assistantId = assistantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Meeting200ApplicationJson withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public Long duration;
    public Meeting200ApplicationJson withDuration(Long duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encrypted_password")
    public String encryptedPassword;
    public Meeting200ApplicationJson withEncryptedPassword(String encryptedPassword) {
        this.encryptedPassword = encryptedPassword;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("h323_password")
    public String h323Password;
    public Meeting200ApplicationJson withH323Password(String h323Password) {
        this.h323Password = h323Password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_email")
    public String hostEmail;
    public Meeting200ApplicationJson withHostEmail(String hostEmail) {
        this.hostEmail = hostEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("host_id")
    public String hostId;
    public Meeting200ApplicationJson withHostId(String hostId) {
        this.hostId = hostId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Meeting200ApplicationJson withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("join_url")
    public String joinUrl;
    public Meeting200ApplicationJson withJoinUrl(String joinUrl) {
        this.joinUrl = joinUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("occurrences")
    public Meeting200ApplicationJsonOccurrences[] occurrences;
    public Meeting200ApplicationJson withOccurrences(Meeting200ApplicationJsonOccurrences[] occurrences) {
        this.occurrences = occurrences;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public Meeting200ApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pmi")
    public Long pmi;
    public Meeting200ApplicationJson withPmi(Long pmi) {
        this.pmi = pmi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recurrence")
    public Meeting200ApplicationJsonRecurrence recurrence;
    public Meeting200ApplicationJson withRecurrence(Meeting200ApplicationJsonRecurrence recurrence) {
        this.recurrence = recurrence;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public Meeting200ApplicationJsonSettings settings;
    public Meeting200ApplicationJson withSettings(Meeting200ApplicationJsonSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("start_time")
    public OffsetDateTime startTime;
    public Meeting200ApplicationJson withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_url")
    public String startUrl;
    public Meeting200ApplicationJson withStartUrl(String startUrl) {
        this.startUrl = startUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public Meeting200ApplicationJsonStatusEnum status;
    public Meeting200ApplicationJson withStatus(Meeting200ApplicationJsonStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public Meeting200ApplicationJson withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topic")
    public String topic;
    public Meeting200ApplicationJson withTopic(String topic) {
        this.topic = topic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tracking_fields")
    public Meeting200ApplicationJsonTrackingFields[] trackingFields;
    public Meeting200ApplicationJson withTrackingFields(Meeting200ApplicationJsonTrackingFields[] trackingFields) {
        this.trackingFields = trackingFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public Long type;
    public Meeting200ApplicationJson withType(Long type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uuid")
    public String uuid;
    public Meeting200ApplicationJson withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}