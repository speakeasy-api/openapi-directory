package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CommentUserMetadataConnectionsPortfolios
 * Information about this user's portfolios.
**/
public class CommentUserMetadataConnectionsPortfolios {
    @JsonProperty("options")
    public String[] options;
    public CommentUserMetadataConnectionsPortfolios withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public CommentUserMetadataConnectionsPortfolios withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CommentUserMetadataConnectionsPortfolios withUri(String uri) {
        this.uri = uri;
        return this;
    }
}