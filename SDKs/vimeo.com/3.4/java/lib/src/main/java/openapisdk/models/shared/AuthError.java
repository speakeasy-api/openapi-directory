package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AuthError {
    @JsonProperty("error")
    public String error;
    public AuthError withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("error_description")
    public String errorDescription;
    public AuthError withErrorDescription(String errorDescription) {
        this.errorDescription = errorDescription;
        return this;
    }
}