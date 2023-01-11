package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadata
 * The user's metadata.
**/
public class GroupUserMetadata {
    @JsonProperty("connections")
    public GroupUserMetadataConnections connections;
    public GroupUserMetadata withConnections(GroupUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public GroupUserMetadataInteractions interactions;
    public GroupUserMetadata withInteractions(GroupUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}