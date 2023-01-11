package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomObjectRecordsBatchUpdatePartialSuccessResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CustomObjectRecordsErrorResponse error;
    public CustomObjectRecordsBatchUpdatePartialSuccessResponse withError(CustomObjectRecordsErrorResponse error) {
        this.error = error;
        return this;
    }
}