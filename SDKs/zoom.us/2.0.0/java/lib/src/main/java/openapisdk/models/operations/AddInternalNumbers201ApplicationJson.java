package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddInternalNumbers201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("internal_numbers")
    public AddInternalNumbers201ApplicationJsonInternalNumbers[] internalNumbers;
    public AddInternalNumbers201ApplicationJson withInternalNumbers(AddInternalNumbers201ApplicationJsonInternalNumbers[] internalNumbers) {
        this.internalNumbers = internalNumbers;
        return this;
    }
}