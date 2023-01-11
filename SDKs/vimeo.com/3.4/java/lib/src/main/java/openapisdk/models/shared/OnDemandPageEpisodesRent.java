package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPageEpisodesRent {
    @JsonProperty("active")
    public Boolean active;
    public OnDemandPageEpisodesRent withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("period")
    public OnDemandPageEpisodesRentPeriodEnum period;
    public OnDemandPageEpisodesRent withPeriod(OnDemandPageEpisodesRentPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public OnDemandPageEpisodesRent withPrice(Double price) {
        this.price = price;
        return this;
    }
}