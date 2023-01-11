package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandVideoRent
 * Information about renting this video.
**/
public class OnDemandVideoRent {
    @JsonProperty("active")
    public Boolean active;
    public OnDemandVideoRent withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("price")
    public java.util.Map<String, Object> price;
    public OnDemandVideoRent withPrice(java.util.Map<String, Object> price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("purchased")
    public Boolean purchased;
    public OnDemandVideoRent withPurchased(Boolean purchased) {
        this.purchased = purchased;
        return this;
    }
}