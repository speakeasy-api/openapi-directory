package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProxyModifyProductRatePlanChargeTier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Price")
    public Double price;
    public ProxyModifyProductRatePlanChargeTier withPrice(Double price) {
        this.price = price;
        return this;
    }
}