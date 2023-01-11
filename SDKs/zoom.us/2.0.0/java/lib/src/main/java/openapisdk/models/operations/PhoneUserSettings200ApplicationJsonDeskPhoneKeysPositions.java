package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_number")
    public String primaryNumber;
    public PhoneUserSettings200ApplicationJsonDeskPhoneKeysPositions withPrimaryNumber(String primaryNumber) {
        this.primaryNumber = primaryNumber;
        return this;
    }
}