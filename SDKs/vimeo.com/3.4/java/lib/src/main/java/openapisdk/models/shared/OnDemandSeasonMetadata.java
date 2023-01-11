package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandSeasonMetadata {
    @JsonProperty("connections")
    public OnDemandSeasonMetadataConnections connections;
    public OnDemandSeasonMetadata withConnections(OnDemandSeasonMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}