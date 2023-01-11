package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OneTimeFlatFeePricingOverride
 * Pricing information about a one-time charge that uses the "flat fee" charge model. In this charge model, the charge has a fixed price.
 * 
**/
public class OneTimeFlatFeePricingOverride {
    @JsonProperty("listPrice")
    public Double listPrice;
    public OneTimeFlatFeePricingOverride withListPrice(Double listPrice) {
        this.listPrice = listPrice;
        return this;
    }
}