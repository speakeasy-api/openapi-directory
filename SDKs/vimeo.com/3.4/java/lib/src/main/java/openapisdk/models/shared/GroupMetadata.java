package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupMetadata
 * Metadata about the group.
**/
public class GroupMetadata {
    @JsonProperty("connections")
    public GroupMetadataConnections connections;
    public GroupMetadata withConnections(GroupMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public GroupMetadataInteractions interactions;
    public GroupMetadata withInteractions(GroupMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}