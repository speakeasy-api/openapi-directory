package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignPhoneNumbersSlgApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public AssignPhoneNumbersSlgApplicationJsonPhoneNumbers[] phoneNumbers;
    public AssignPhoneNumbersSlgApplicationJson withPhoneNumbers(AssignPhoneNumbersSlgApplicationJsonPhoneNumbers[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}