package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserMessageContract {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("body")
    public String body;
    public UserMessageContract withBody(String body) {
        this.body = body;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdFormatted")
    public String createdFormatted;
    public UserMessageContract withCreatedFormatted(String createdFormatted) {
        this.createdFormatted = createdFormatted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highPriority")
    public Boolean highPriority;
    public UserMessageContract withHighPriority(Boolean highPriority) {
        this.highPriority = highPriority;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public UserMessageContract withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbox")
    public UserMessageContractInboxEnum inbox;
    public UserMessageContract withInbox(UserMessageContractInboxEnum inbox) {
        this.inbox = inbox;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("read")
    public Boolean read;
    public UserMessageContract withRead(Boolean read) {
        this.read = read;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiver")
    public UserForApiContract receiver;
    public UserMessageContract withReceiver(UserForApiContract receiver) {
        this.receiver = receiver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sender")
    public UserForApiContract sender;
    public UserMessageContract withSender(UserForApiContract sender) {
        this.sender = sender;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;
    public UserMessageContract withSubject(String subject) {
        this.subject = subject;
        return this;
    }
}