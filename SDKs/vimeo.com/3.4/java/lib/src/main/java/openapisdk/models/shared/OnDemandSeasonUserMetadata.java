package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandSeasonUserMetadata
 * The user's metadata.
**/
public class OnDemandSeasonUserMetadata {
    @JsonProperty("connections")
    public OnDemandSeasonUserMetadataConnections connections;
    public OnDemandSeasonUserMetadata withConnections(OnDemandSeasonUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public OnDemandSeasonUserMetadataInteractions interactions;
    public OnDemandSeasonUserMetadata withInteractions(OnDemandSeasonUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}