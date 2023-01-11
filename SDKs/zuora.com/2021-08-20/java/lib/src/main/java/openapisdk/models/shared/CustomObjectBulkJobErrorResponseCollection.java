package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CustomObjectBulkJobErrorResponseCollection {
    @JsonProperty("errors")
    public CustomObjectBulkJobErrorResponse[] errors;
    public CustomObjectBulkJobErrorResponseCollection withErrors(CustomObjectBulkJobErrorResponse[] errors) {
        this.errors = errors;
        return this;
    }
}