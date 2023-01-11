package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBulkInventory200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAttributes")
    public java.util.Map<String, Object> additionalAttributes;
    public UpdateBulkInventory200ApplicationJson withAdditionalAttributes(java.util.Map<String, Object> additionalAttributes) {
        this.additionalAttributes = additionalAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public java.util.Map<String, Object> errors;
    public UpdateBulkInventory200ApplicationJson withErrors(java.util.Map<String, Object> errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("feedId")
    public String feedId;
    public UpdateBulkInventory200ApplicationJson withFeedId(String feedId) {
        this.feedId = feedId;
        return this;
    }
}