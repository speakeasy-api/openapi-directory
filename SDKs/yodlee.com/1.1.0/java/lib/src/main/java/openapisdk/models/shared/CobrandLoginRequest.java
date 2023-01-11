package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CobrandLoginRequest {
    @JsonProperty("cobrand")
    public Cobrand cobrand;
    public CobrandLoginRequest withCobrand(Cobrand cobrand) {
        this.cobrand = cobrand;
        return this;
    }
}