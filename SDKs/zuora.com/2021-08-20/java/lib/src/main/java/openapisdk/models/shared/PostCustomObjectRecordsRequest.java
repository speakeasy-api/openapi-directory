package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCustomObjectRecordsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowPartialSuccess")
    public Boolean allowPartialSuccess;
    public PostCustomObjectRecordsRequest withAllowPartialSuccess(Boolean allowPartialSuccess) {
        this.allowPartialSuccess = allowPartialSuccess;
        return this;
    }
    @JsonProperty("records")
    public java.util.Map<String, Object>[] records;
    public PostCustomObjectRecordsRequest withRecords(java.util.Map<String, Object>[] records) {
        this.records = records;
        return this;
    }
}