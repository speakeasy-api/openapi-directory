package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BulkResponseData {
    @JsonProperty("bulk")
    public BulkResponseDataBulk bulk;
    public BulkResponseData withBulk(BulkResponseDataBulk bulk) {
        this.bulk = bulk;
        return this;
    }
}