package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OneTimePerUnitPricingOverride
 * Pricing information about a one-time charge that uses the "per unit" charge model. In this charge model, the charge has a fixed price per unit purchased.
 * 
**/
public class OneTimePerUnitPricingOverride {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("listPrice")
    public Double listPrice;
    public OneTimePerUnitPricingOverride withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public Double quantity;
    public OneTimePerUnitPricingOverride withQuantity(Double quantity) {
        this.quantity = quantity;
        return this;
    }
}