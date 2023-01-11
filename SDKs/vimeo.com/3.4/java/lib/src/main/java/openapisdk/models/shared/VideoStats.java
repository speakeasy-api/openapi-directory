package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VideoStats
 * A collection of stats associated with this video.
**/
public class VideoStats {
    @JsonProperty("plays")
    public Double plays;
    public VideoStats withPlays(Double plays) {
        this.plays = plays;
        return this;
    }
}