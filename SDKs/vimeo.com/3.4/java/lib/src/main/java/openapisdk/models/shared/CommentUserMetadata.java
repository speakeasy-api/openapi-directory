package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadata
 * The user's metadata.
**/
public class CommentUserMetadata {
    @JsonProperty("connections")
    public CommentUserMetadataConnections connections;
    public CommentUserMetadata withConnections(CommentUserMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public CommentUserMetadataInteractions interactions;
    public CommentUserMetadata withInteractions(CommentUserMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}