package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetPublicEmailTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public GetPublicEmailTemplateResponse withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bccEmailAddress")
    public String bccEmailAddress;
    public GetPublicEmailTemplateResponse withBccEmailAddress(String bccEmailAddress) {
        this.bccEmailAddress = bccEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailAddress")
    public String ccEmailAddress;
    public GetPublicEmailTemplateResponse withCcEmailAddress(String ccEmailAddress) {
        this.ccEmailAddress = ccEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailType")
    public GetPublicEmailTemplateResponseCcEmailTypeEnum ccEmailType;
    public GetPublicEmailTemplateResponse withCcEmailType(GetPublicEmailTemplateResponseCcEmailTypeEnum ccEmailType) {
        this.ccEmailType = ccEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public GetPublicEmailTemplateResponse withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdOn")
    public OffsetDateTime createdOn;
    public GetPublicEmailTemplateResponse withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetPublicEmailTemplateResponse withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailBody")
    public String emailBody;
    public GetPublicEmailTemplateResponse withEmailBody(String emailBody) {
        this.emailBody = emailBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailSubject")
    public String emailSubject;
    public GetPublicEmailTemplateResponse withEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public GetPublicEmailTemplateResponseEncodingTypeEnum encodingType;
    public GetPublicEmailTemplateResponse withEncodingType(GetPublicEmailTemplateResponseEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeName")
    public String eventTypeName;
    public GetPublicEmailTemplateResponse withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeNamespace")
    public String eventTypeNamespace;
    public GetPublicEmailTemplateResponse withEventTypeNamespace(String eventTypeNamespace) {
        this.eventTypeNamespace = eventTypeNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromEmailAddress")
    public String fromEmailAddress;
    public GetPublicEmailTemplateResponse withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromEmailType")
    public GetPublicEmailTemplateResponseFromEmailTypeEnum fromEmailType;
    public GetPublicEmailTemplateResponse withFromEmailType(GetPublicEmailTemplateResponseFromEmailTypeEnum fromEmailType) {
        this.fromEmailType = fromEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromName")
    public String fromName;
    public GetPublicEmailTemplateResponse withFromName(String fromName) {
        this.fromName = fromName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPublicEmailTemplateResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isHtml")
    public Boolean isHtml;
    public GetPublicEmailTemplateResponse withIsHtml(Boolean isHtml) {
        this.isHtml = isHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetPublicEmailTemplateResponse withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmailAddress")
    public String replyToEmailAddress;
    public GetPublicEmailTemplateResponse withReplyToEmailAddress(String replyToEmailAddress) {
        this.replyToEmailAddress = replyToEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmailType")
    public GetPublicEmailTemplateResponseReplyToEmailTypeEnum replyToEmailType;
    public GetPublicEmailTemplateResponse withReplyToEmailType(GetPublicEmailTemplateResponseReplyToEmailTypeEnum replyToEmailType) {
        this.replyToEmailType = replyToEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toEmailAddress")
    public String toEmailAddress;
    public GetPublicEmailTemplateResponse withToEmailAddress(String toEmailAddress) {
        this.toEmailAddress = toEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toEmailType")
    public GetPublicEmailTemplateResponseToEmailTypeEnum toEmailType;
    public GetPublicEmailTemplateResponse withToEmailType(GetPublicEmailTemplateResponseToEmailTypeEnum toEmailType) {
        this.toEmailType = toEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updatedBy")
    public String updatedBy;
    public GetPublicEmailTemplateResponse withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updatedOn")
    public OffsetDateTime updatedOn;
    public GetPublicEmailTemplateResponse withUpdatedOn(OffsetDateTime updatedOn) {
        this.updatedOn = updatedOn;
        return this;
    }
}