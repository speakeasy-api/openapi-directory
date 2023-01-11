package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserMetadataConnectionsPortfolios
 * Information about this user's portfolios.
**/
public class UserMetadataConnectionsPortfolios {
    @JsonProperty("options")
    public String[] options;
    public UserMetadataConnectionsPortfolios withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public UserMetadataConnectionsPortfolios withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public UserMetadataConnectionsPortfolios withUri(String uri) {
        this.uri = uri;
        return this;
    }
}