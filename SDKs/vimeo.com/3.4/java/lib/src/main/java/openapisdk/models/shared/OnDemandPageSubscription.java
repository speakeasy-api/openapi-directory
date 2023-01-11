package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageSubscription
 * Information about subscribing to this On Demand page, if enabled.
**/
public class OnDemandPageSubscription {
    @JsonProperty("active")
    public Boolean active;
    public OnDemandPageSubscription withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPageSubscription withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public String period;
    public OnDemandPageSubscription withPeriod(String period) {
        this.period = period;
        return this;
    }
    @JsonProperty("price")
    public java.util.Map<String, Object> price;
    public OnDemandPageSubscription withPrice(java.util.Map<String, Object> price) {
        this.price = price;
        return this;
    }
}