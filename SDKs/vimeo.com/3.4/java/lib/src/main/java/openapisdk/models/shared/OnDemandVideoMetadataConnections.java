package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandVideoMetadataConnections {
    @JsonProperty("season")
    public OnDemandVideoMetadataConnectionsSeason season;
    public OnDemandVideoMetadataConnections withSeason(OnDemandVideoMetadataConnectionsSeason season) {
        this.season = season;
        return this;
    }
}