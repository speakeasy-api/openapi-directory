package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ErrorResponse {
    @JsonProperty("error")
    public ErrorDetail error;
    public ErrorResponse withError(ErrorDetail error) {
        this.error = error;
        return this;
    }
}