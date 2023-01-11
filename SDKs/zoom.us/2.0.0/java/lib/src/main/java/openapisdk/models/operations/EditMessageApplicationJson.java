package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EditMessageApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public EditMessageApplicationJson withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_channel")
    public String toChannel;
    public EditMessageApplicationJson withToChannel(String toChannel) {
        this.toChannel = toChannel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_contact")
    public String toContact;
    public EditMessageApplicationJson withToContact(String toContact) {
        this.toContact = toContact;
        return this;
    }
}