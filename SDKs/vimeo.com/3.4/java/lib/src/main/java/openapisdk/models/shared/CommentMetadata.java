package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommentMetadata {
    @JsonProperty("connections")
    public CommentMetadataConnections connections;
    public CommentMetadata withConnections(CommentMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}