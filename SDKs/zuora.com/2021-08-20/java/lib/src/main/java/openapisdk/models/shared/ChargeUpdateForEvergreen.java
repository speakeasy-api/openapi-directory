package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeUpdateForEvergreen
 * The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
**/
public class ChargeUpdateForEvergreen {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public BillingUpdate billing;
    public ChargeUpdateForEvergreen withBilling(BillingUpdate billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public ChargeUpdateForEvergreen withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public ChargeUpdateForEvergreen withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ChargeUpdateForEvergreen withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public TriggerParams effectiveDate;
    public ChargeUpdateForEvergreen withEffectiveDate(TriggerParams effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public PricingUpdateForEvergreen pricing;
    public ChargeUpdateForEvergreen withPricing(PricingUpdateForEvergreen pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public ChargeUpdateForEvergreen withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}