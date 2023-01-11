package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CommentMetadataConnections {
    @JsonProperty("replies")
    public CommentMetadataConnectionsReplies replies;
    public CommentMetadataConnections withReplies(CommentMetadataConnectionsReplies replies) {
        this.replies = replies;
        return this;
    }
}