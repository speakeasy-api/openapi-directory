package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OnDemandGenreMetadata {
    @JsonProperty("connections")
    public OnDemandGenreMetadataConnections connections;
    public OnDemandGenreMetadata withConnections(OnDemandGenreMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}