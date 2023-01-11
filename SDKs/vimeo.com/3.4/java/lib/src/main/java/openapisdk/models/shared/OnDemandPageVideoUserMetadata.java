package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageVideoUserMetadata
 * The user's metadata.
**/
public class OnDemandPageVideoUserMetadata {
    @JsonProperty("connections")
    public OnDemandPageVideoUserMetadataConnections connections;
    public OnDemandPageVideoUserMetadata withConnections(OnDemandPageVideoUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public OnDemandPageVideoUserMetadataInteractions interactions;
    public OnDemandPageVideoUserMetadata withInteractions(OnDemandPageVideoUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}