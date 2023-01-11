package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApiException
 * The object returned for a bad request
**/
public class ApiException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorNumber")
    public Double errorNumber;
    public ApiException withErrorNumber(Double errorNumber) {
        this.errorNumber = errorNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public ApiException withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public ApiException withType(String type) {
        this.type = type;
        return this;
    }
}