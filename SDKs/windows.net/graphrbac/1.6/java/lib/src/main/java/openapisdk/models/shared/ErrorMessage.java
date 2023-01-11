package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorMessage
 * Active Directory error message.
**/
public class ErrorMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ErrorMessage withValue(String value) {
        this.value = value;
        return this;
    }
}