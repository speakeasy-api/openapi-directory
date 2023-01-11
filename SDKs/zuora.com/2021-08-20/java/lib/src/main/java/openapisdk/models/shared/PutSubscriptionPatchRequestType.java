package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionPatchRequestType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PutSubscriptionPatchRequestType withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratePlans")
    public PutSubscriptionPatchRequestTypeRatePlans[] ratePlans;
    public PutSubscriptionPatchRequestType withRatePlans(PutSubscriptionPatchRequestTypeRatePlans[] ratePlans) {
        this.ratePlans = ratePlans;
        return this;
    }
}