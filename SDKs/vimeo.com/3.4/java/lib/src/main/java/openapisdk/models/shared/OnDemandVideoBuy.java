package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandVideoBuy
 * Information about purchasing this video.
**/
public class OnDemandVideoBuy {
    @JsonProperty("active")
    public Boolean active;
    public OnDemandVideoBuy withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("price")
    public java.util.Map<String, Object> price;
    public OnDemandVideoBuy withPrice(java.util.Map<String, Object> price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchased")
    public Boolean purchased;
    public OnDemandVideoBuy withPurchased(Boolean purchased) {
        this.purchased = purchased;
        return this;
    }
}