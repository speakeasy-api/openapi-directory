package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignPhoneNumber200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public AssignPhoneNumber200ApplicationJsonPhoneNumbers[] phoneNumbers;
    public AssignPhoneNumber200ApplicationJson withPhoneNumbers(AssignPhoneNumber200ApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}