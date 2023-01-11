package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderPatchRequestType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PutOrderPatchRequestType withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public PutOrderPatchRequestTypeSubscriptions[] subscriptions;
    public PutOrderPatchRequestType withSubscriptions(PutOrderPatchRequestTypeSubscriptions[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
}