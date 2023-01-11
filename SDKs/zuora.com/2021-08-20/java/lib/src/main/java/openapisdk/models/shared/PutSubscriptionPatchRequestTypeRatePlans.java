package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutSubscriptionPatchRequestTypeRatePlans {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charges")
    public PutSubscriptionPatchRequestTypeRatePlansCharges[] charges;
    public PutSubscriptionPatchRequestTypeRatePlans withCharges(PutSubscriptionPatchRequestTypeRatePlansCharges[] charges) {
        this.charges = charges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public PutSubscriptionPatchRequestTypeRatePlans withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonProperty("ratePlanId")
    public String ratePlanId;
    public PutSubscriptionPatchRequestTypeRatePlans withRatePlanId(String ratePlanId) {
        this.ratePlanId = ratePlanId;
        return this;
    }
}