package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateOrderRatePlanOverride
 * Information about an order action of type `addProduct`. 
 * 
 * If you want to create a pending order through the "Add product" order action, and if the charge's trigger condition is `Specific Date`, you must set a charge number in the `chargeNumber` field for the "Add product" order action. In this case, if you do not set it, Zuora will not generate the charge number for you.
 * 
 * See more information about pending orders in [Pending Order and Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/Pending_Order_and_Subscription). 
 * 
**/
public class CreateOrderRatePlanOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("chargeOverrides")
    public CreateOrderChargeOverride[] chargeOverrides;
    public CreateOrderRatePlanOverride withChargeOverrides(CreateOrderChargeOverride[] chargeOverrides) {
        this.chargeOverrides = chargeOverrides;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customFields")
    public java.util.Map<String, Object> customFields;
    public CreateOrderRatePlanOverride withCustomFields(java.util.Map<String, Object> customFields) {
        this.customFields = customFields;
        return this;
    }
    @JsonProperty("productRatePlanId")
    public String productRatePlanId;
    public CreateOrderRatePlanOverride withProductRatePlanId(String productRatePlanId) {
        this.productRatePlanId = productRatePlanId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uniqueToken")
    public String uniqueToken;
    public CreateOrderRatePlanOverride withUniqueToken(String uniqueToken) {
        this.uniqueToken = uniqueToken;
        return this;
    }
}