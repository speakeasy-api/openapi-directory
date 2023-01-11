package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendaChatMessageApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("at_items")
    public SendaChatMessageApplicationJsonAtItems[] atItems;
    public SendaChatMessageApplicationJson withAtItems(SendaChatMessageApplicationJsonAtItems[] atItems) {
        this.atItems = atItems;
        return this;
    }
    @JsonProperty("message")
    public String message;
    public SendaChatMessageApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_channel")
    public String toChannel;
    public SendaChatMessageApplicationJson withToChannel(String toChannel) {
        this.toChannel = toChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_contact")
    public String toContact;
    public SendaChatMessageApplicationJson withToContact(String toContact) {
        this.toContact = toContact;
        return this;
    }
}