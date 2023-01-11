package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BadRequestResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Errors")
    public BadRequestResponseErrors[] errors;
    public BadRequestResponse withErrors(BadRequestResponseErrors[] errors) {
        this.errors = errors;
        return this;
    }
}