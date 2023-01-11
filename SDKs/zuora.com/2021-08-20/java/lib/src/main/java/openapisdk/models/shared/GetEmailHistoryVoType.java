package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEmailHistoryVoType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bcc")
    public String bcc;
    public GetEmailHistoryVoType withBcc(String bcc) {
        this.bcc = bcc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cc")
    public String cc;
    public GetEmailHistoryVoType withCc(String cc) {
        this.cc = cc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public GetEmailHistoryVoType withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventCategory")
    public String eventCategory;
    public GetEmailHistoryVoType withEventCategory(String eventCategory) {
        this.eventCategory = eventCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fromEmail")
    public String fromEmail;
    public GetEmailHistoryVoType withFromEmail(String fromEmail) {
        this.fromEmail = fromEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public String notification;
    public GetEmailHistoryVoType withNotification(String notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("replyTo")
    public String replyTo;
    public GetEmailHistoryVoType withReplyTo(String replyTo) {
        this.replyTo = replyTo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("result")
    public String result;
    public GetEmailHistoryVoType withResult(String result) {
        this.result = result;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sendTime")
    public String sendTime;
    public GetEmailHistoryVoType withSendTime(String sendTime) {
        this.sendTime = sendTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public GetEmailHistoryVoType withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("toEmail")
    public String toEmail;
    public GetEmailHistoryVoType withToEmail(String toEmail) {
        this.toEmail = toEmail;
        return this;
    }
}