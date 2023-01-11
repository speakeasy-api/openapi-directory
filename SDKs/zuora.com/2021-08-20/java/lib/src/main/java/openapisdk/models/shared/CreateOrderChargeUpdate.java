package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderChargeUpdate
 * The JSON object containing the information for a charge update in the 'UpdateProduct' type order action.
**/
public class CreateOrderChargeUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public BillingUpdate billing;
    public CreateOrderChargeUpdate withBilling(BillingUpdate billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public CreateOrderChargeUpdate withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public CreateOrderChargeUpdate withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateOrderChargeUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("effectiveDate")
    public CreateOrderUpdateProductTriggerParams effectiveDate;
    public CreateOrderChargeUpdate withEffectiveDate(CreateOrderUpdateProductTriggerParams effectiveDate) {
        this.effectiveDate = effectiveDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public CreateOrderPricingUpdate pricing;
    public CreateOrderChargeUpdate withPricing(CreateOrderPricingUpdate pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public CreateOrderChargeUpdate withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}