package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCustomObjectRecordsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public CustomObjectRecordsErrorResponse error;
    public PostCustomObjectRecordsResponse withError(CustomObjectRecordsErrorResponse error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("records")
    public java.util.Map<String, Object>[] records;
    public PostCustomObjectRecordsResponse withRecords(java.util.Map<String, Object>[] records) {
        this.records = records;
        return this;
    }
}