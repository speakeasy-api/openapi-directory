package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPublicEmailTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PostPublicEmailTemplateRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bccEmailAddress")
    public String bccEmailAddress;
    public PostPublicEmailTemplateRequest withBccEmailAddress(String bccEmailAddress) {
        this.bccEmailAddress = bccEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailAddress")
    public String ccEmailAddress;
    public PostPublicEmailTemplateRequest withCcEmailAddress(String ccEmailAddress) {
        this.ccEmailAddress = ccEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailType")
    public PostPublicEmailTemplateRequestCcEmailTypeEnum ccEmailType;
    public PostPublicEmailTemplateRequest withCcEmailType(PostPublicEmailTemplateRequestCcEmailTypeEnum ccEmailType) {
        this.ccEmailType = ccEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostPublicEmailTemplateRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("emailBody")
    public String emailBody;
    public PostPublicEmailTemplateRequest withEmailBody(String emailBody) {
        this.emailBody = emailBody;
        return this;
    }
    @JsonProperty("emailSubject")
    public String emailSubject;
    public PostPublicEmailTemplateRequest withEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public PostPublicEmailTemplateRequestEncodingTypeEnum encodingType;
    public PostPublicEmailTemplateRequest withEncodingType(PostPublicEmailTemplateRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
    @JsonProperty("eventTypeName")
    public String eventTypeName;
    public PostPublicEmailTemplateRequest withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeNamespace")
    public String eventTypeNamespace;
    public PostPublicEmailTemplateRequest withEventTypeNamespace(String eventTypeNamespace) {
        this.eventTypeNamespace = eventTypeNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromEmailAddress")
    public String fromEmailAddress;
    public PostPublicEmailTemplateRequest withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonProperty("fromEmailType")
    public PostPublicEmailTemplateRequestFromEmailTypeEnum fromEmailType;
    public PostPublicEmailTemplateRequest withFromEmailType(PostPublicEmailTemplateRequestFromEmailTypeEnum fromEmailType) {
        this.fromEmailType = fromEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromName")
    public String fromName;
    public PostPublicEmailTemplateRequest withFromName(String fromName) {
        this.fromName = fromName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isHtml")
    public Boolean isHtml;
    public PostPublicEmailTemplateRequest withIsHtml(Boolean isHtml) {
        this.isHtml = isHtml;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PostPublicEmailTemplateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmailAddress")
    public String replyToEmailAddress;
    public PostPublicEmailTemplateRequest withReplyToEmailAddress(String replyToEmailAddress) {
        this.replyToEmailAddress = replyToEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmailType")
    public PostPublicEmailTemplateRequestReplyToEmailTypeEnum replyToEmailType;
    public PostPublicEmailTemplateRequest withReplyToEmailType(PostPublicEmailTemplateRequestReplyToEmailTypeEnum replyToEmailType) {
        this.replyToEmailType = replyToEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toEmailAddress")
    public String toEmailAddress;
    public PostPublicEmailTemplateRequest withToEmailAddress(String toEmailAddress) {
        this.toEmailAddress = toEmailAddress;
        return this;
    }
    @JsonProperty("toEmailType")
    public PostPublicEmailTemplateRequestToEmailTypeEnum toEmailType;
    public PostPublicEmailTemplateRequest withToEmailType(PostPublicEmailTemplateRequestToEmailTypeEnum toEmailType) {
        this.toEmailType = toEmailType;
        return this;
    }
}