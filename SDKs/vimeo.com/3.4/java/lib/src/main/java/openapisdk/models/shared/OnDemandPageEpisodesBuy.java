package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandPageEpisodesBuy {
    @JsonProperty("active")
    public Boolean active;
    public OnDemandPageEpisodesBuy withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("price")
    public Double price;
    public OnDemandPageEpisodesBuy withPrice(Double price) {
        this.price = price;
        return this;
    }
}