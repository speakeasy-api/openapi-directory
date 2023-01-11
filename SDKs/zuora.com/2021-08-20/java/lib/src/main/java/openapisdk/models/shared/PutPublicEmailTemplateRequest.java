package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutPublicEmailTemplateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public PutPublicEmailTemplateRequest withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bccEmailAddress")
    public String bccEmailAddress;
    public PutPublicEmailTemplateRequest withBccEmailAddress(String bccEmailAddress) {
        this.bccEmailAddress = bccEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailAddress")
    public String ccEmailAddress;
    public PutPublicEmailTemplateRequest withCcEmailAddress(String ccEmailAddress) {
        this.ccEmailAddress = ccEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ccEmailType")
    public PutPublicEmailTemplateRequestCcEmailTypeEnum ccEmailType;
    public PutPublicEmailTemplateRequest withCcEmailType(PutPublicEmailTemplateRequestCcEmailTypeEnum ccEmailType) {
        this.ccEmailType = ccEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutPublicEmailTemplateRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailBody")
    public String emailBody;
    public PutPublicEmailTemplateRequest withEmailBody(String emailBody) {
        this.emailBody = emailBody;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("emailSubject")
    public String emailSubject;
    public PutPublicEmailTemplateRequest withEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encodingType")
    public PutPublicEmailTemplateRequestEncodingTypeEnum encodingType;
    public PutPublicEmailTemplateRequest withEncodingType(PutPublicEmailTemplateRequestEncodingTypeEnum encodingType) {
        this.encodingType = encodingType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromEmailAddress")
    public String fromEmailAddress;
    public PutPublicEmailTemplateRequest withFromEmailAddress(String fromEmailAddress) {
        this.fromEmailAddress = fromEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromEmailType")
    public PutPublicEmailTemplateRequestFromEmailTypeEnum fromEmailType;
    public PutPublicEmailTemplateRequest withFromEmailType(PutPublicEmailTemplateRequestFromEmailTypeEnum fromEmailType) {
        this.fromEmailType = fromEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromName")
    public String fromName;
    public PutPublicEmailTemplateRequest withFromName(String fromName) {
        this.fromName = fromName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isHtml")
    public Boolean isHtml;
    public PutPublicEmailTemplateRequest withIsHtml(Boolean isHtml) {
        this.isHtml = isHtml;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PutPublicEmailTemplateRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmailAddress")
    public String replyToEmailAddress;
    public PutPublicEmailTemplateRequest withReplyToEmailAddress(String replyToEmailAddress) {
        this.replyToEmailAddress = replyToEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyToEmailType")
    public PutPublicEmailTemplateRequestReplyToEmailTypeEnum replyToEmailType;
    public PutPublicEmailTemplateRequest withReplyToEmailType(PutPublicEmailTemplateRequestReplyToEmailTypeEnum replyToEmailType) {
        this.replyToEmailType = replyToEmailType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toEmailAddress")
    public String toEmailAddress;
    public PutPublicEmailTemplateRequest withToEmailAddress(String toEmailAddress) {
        this.toEmailAddress = toEmailAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toEmailType")
    public PutPublicEmailTemplateRequestToEmailTypeEnum toEmailType;
    public PutPublicEmailTemplateRequest withToEmailType(PutPublicEmailTemplateRequestToEmailTypeEnum toEmailType) {
        this.toEmailType = toEmailType;
        return this;
    }
}