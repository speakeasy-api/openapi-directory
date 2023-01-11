package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsRecommendedUsers
 * A Collection of recommended users for the current user to follow. This data requires a bearer token with the `private` scope.
**/
public class CommentUserMetadataConnectionsRecommendedUsers {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsRecommendedUsers withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsRecommendedUsers withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsRecommendedUsers withUri(String uri) {
        this.uri = uri;
        return this;
    }
}