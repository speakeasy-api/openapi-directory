package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderChargeOverride
 * Charge associated with a rate plan.
 * 
**/
public class CreateOrderChargeOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billing")
    public CreateOrderChargeOverrideBilling billing;
    public CreateOrderChargeOverride withBilling(CreateOrderChargeOverrideBilling billing) {
        this.billing = billing;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeNumber")
    public String chargeNumber;
    public CreateOrderChargeOverride withChargeNumber(String chargeNumber) {
        this.chargeNumber = chargeNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public CreateOrderChargeOverride withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateOrderChargeOverride withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endDate")
    public EndConditions endDate;
    public CreateOrderChargeOverride withEndDate(EndConditions endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pricing")
    public CreateOrderChargeOverridePricing pricing;
    public CreateOrderChargeOverride withPricing(CreateOrderChargeOverridePricing pricing) {
        this.pricing = pricing;
        return this;
    }
    @JsonProperty("productRatePlanChargeId")
    public String productRatePlanChargeId;
    public CreateOrderChargeOverride withProductRatePlanChargeId(String productRatePlanChargeId) {
        this.productRatePlanChargeId = productRatePlanChargeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecCode")
    public String revRecCode;
    public CreateOrderChargeOverride withRevRecCode(String revRecCode) {
        this.revRecCode = revRecCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revRecTriggerCondition")
    public CreateOrderChargeOverrideRevRecTriggerConditionEnum revRecTriggerCondition;
    public CreateOrderChargeOverride withRevRecTriggerCondition(CreateOrderChargeOverrideRevRecTriggerConditionEnum revRecTriggerCondition) {
        this.revRecTriggerCondition = revRecTriggerCondition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRuleName")
    public CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum revenueRecognitionRuleName;
    public CreateOrderChargeOverride withRevenueRecognitionRuleName(CreateOrderChargeOverrideRevenueRecognitionRuleNameEnum revenueRecognitionRuleName) {
        this.revenueRecognitionRuleName = revenueRecognitionRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startDate")
    public CreateOrderTriggerParams startDate;
    public CreateOrderChargeOverride withStartDate(CreateOrderTriggerParams startDate) {
        this.startDate = startDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public CreateOrderChargeOverride withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}