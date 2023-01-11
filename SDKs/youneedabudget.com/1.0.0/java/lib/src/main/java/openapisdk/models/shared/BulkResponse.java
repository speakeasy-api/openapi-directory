package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BulkResponse {
    @JsonProperty("data")
    public BulkResponseData data;
    public BulkResponse withData(BulkResponseData data) {
        this.data = data;
        return this;
    }
}