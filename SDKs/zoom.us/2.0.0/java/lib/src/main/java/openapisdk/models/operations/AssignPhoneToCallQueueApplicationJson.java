package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignPhoneToCallQueueApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public AssignPhoneToCallQueueApplicationJsonPhoneNumbers[] phoneNumbers;
    public AssignPhoneToCallQueueApplicationJson withPhoneNumbers(AssignPhoneToCallQueueApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}