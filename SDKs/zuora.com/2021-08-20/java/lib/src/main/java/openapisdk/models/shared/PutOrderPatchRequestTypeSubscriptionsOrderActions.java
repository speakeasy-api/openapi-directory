package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutOrderPatchRequestTypeSubscriptionsOrderActions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PutOrderPatchRequestTypeSubscriptionsOrderActions withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("orderActionId")
    public String orderActionId;
    public PutOrderPatchRequestTypeSubscriptionsOrderActions withOrderActionId(String orderActionId) {
        this.orderActionId = orderActionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sequence")
    public Long sequence;
    public PutOrderPatchRequestTypeSubscriptionsOrderActions withSequence(Long sequence) {
        this.sequence = sequence;
        return this;
    }
}