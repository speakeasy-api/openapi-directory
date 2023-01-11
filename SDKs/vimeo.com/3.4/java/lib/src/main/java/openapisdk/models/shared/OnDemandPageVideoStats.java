package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoStats
 * A collection of stats associated with this video.
**/
public class OnDemandPageVideoStats {
    @JsonProperty("plays")
    public Double plays;
    public OnDemandPageVideoStats withPlays(Double plays) {
        this.plays = plays;
        return this;
    }
}