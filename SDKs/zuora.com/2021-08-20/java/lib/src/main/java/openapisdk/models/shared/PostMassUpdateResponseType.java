package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostMassUpdateResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bulkKey")
    public String bulkKey;
    public PostMassUpdateResponseType withBulkKey(String bulkKey) {
        this.bulkKey = bulkKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostMassUpdateResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}