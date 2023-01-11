package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssignSipTrunkNumbersApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_numbers")
    public String[] phoneNumbers;
    public AssignSipTrunkNumbersApplicationJson withPhoneNumbers(String[] phoneNumbers) {
        this.phoneNumbers = phoneNumbers;
        return this;
    }
}