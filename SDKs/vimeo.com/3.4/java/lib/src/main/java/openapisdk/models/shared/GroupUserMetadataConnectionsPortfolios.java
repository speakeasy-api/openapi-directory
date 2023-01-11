package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GroupUserMetadataConnectionsPortfolios
 * Information about this user's portfolios.
**/
public class GroupUserMetadataConnectionsPortfolios {
    @JsonProperty("options")
    public String[] options;
    public GroupUserMetadataConnectionsPortfolios withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public GroupUserMetadataConnectionsPortfolios withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public GroupUserMetadataConnectionsPortfolios withUri(String uri) {
        this.uri = uri;
        return this;
    }
}