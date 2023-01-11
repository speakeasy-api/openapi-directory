package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignPhoneNumbersAutoReceptionistApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers[] phoneNumbers;
    public AssignPhoneNumbersAutoReceptionistApplicationJson withPhoneNumbers(AssignPhoneNumbersAutoReceptionistApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}