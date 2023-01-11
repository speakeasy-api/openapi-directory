package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadata
 * The user's metadata.
**/
public class OnDemandPageUserMetadata {
    @JsonProperty("connections")
    public OnDemandPageUserMetadataConnections connections;
    public OnDemandPageUserMetadata withConnections(OnDemandPageUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public OnDemandPageUserMetadataInteractions interactions;
    public OnDemandPageUserMetadata withInteractions(OnDemandPageUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}