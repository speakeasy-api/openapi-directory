package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ChargeUpdate
 * The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
**/
public class ChargeUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public BillingUpdate billing;
    public ChargeUpdate withBilling(BillingUpdate billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public ChargeUpdate withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public ChargeUpdate withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ChargeUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public TriggerParams effectiveDate;
    public ChargeUpdate withEffectiveDate(TriggerParams effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public PricingUpdate pricing;
    public ChargeUpdate withPricing(PricingUpdate pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public ChargeUpdate withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}