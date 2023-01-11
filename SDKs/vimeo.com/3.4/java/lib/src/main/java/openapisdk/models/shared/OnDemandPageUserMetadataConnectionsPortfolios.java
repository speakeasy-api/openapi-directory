package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandPageUserMetadataConnectionsPortfolios
 * Information about this user's portfolios.
**/
public class OnDemandPageUserMetadataConnectionsPortfolios {
    @JsonProperty("options")
    public String[] options;
    public OnDemandPageUserMetadataConnectionsPortfolios withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public OnDemandPageUserMetadataConnectionsPortfolios withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPageUserMetadataConnectionsPortfolios withUri(String uri) {
        this.uri = uri;
        return this;
    }
}