package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class QueryCustomObjectRecordsResponse {
    @JsonProperty("count")
    public Long count;
    public QueryCustomObjectRecordsResponse withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonProperty("records")
    public java.util.Map<String, Object>[] records;
    public QueryCustomObjectRecordsResponse withRecords(java.util.Map<String, Object>[] records) {
        this.records = records;
        return this;
    }
}