package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadata
 * The user's metadata.
**/
public class UserMetadata {
    @JsonProperty("connections")
    public UserMetadataConnections connections;
    public UserMetadata withConnections(UserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public UserMetadataInteractions interactions;
    public UserMetadata withInteractions(UserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}