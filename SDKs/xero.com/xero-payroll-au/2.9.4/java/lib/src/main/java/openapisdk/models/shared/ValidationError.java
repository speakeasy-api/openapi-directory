package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValidationError

 * https://developer.xero.com/documentation/api/http-response-codes
**/
public class ValidationError {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ValidationError withMessage(String message) {
        this.message = message;
        return this;
    }
}