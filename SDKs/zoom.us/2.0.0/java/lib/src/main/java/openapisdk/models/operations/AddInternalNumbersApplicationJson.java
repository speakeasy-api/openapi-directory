package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddInternalNumbersApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_numbers")
    public AddInternalNumbersApplicationJsonInternalNumbers[] internalNumbers;
    public AddInternalNumbersApplicationJson withInternalNumbers(AddInternalNumbersApplicationJsonInternalNumbers[] internalNumbers) {
        this.internalNumbers = internalNumbers;
        return this;
    }
}