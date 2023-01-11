package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoMetadata
 * The video's metadata.
**/
public class OnDemandPageVideoMetadata {
    @JsonProperty("connections")
    public OnDemandPageVideoMetadataConnections connections;
    public OnDemandPageVideoMetadata withConnections(OnDemandPageVideoMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public OnDemandPageVideoMetadataInteractions interactions;
    public OnDemandPageVideoMetadata withInteractions(OnDemandPageVideoMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}