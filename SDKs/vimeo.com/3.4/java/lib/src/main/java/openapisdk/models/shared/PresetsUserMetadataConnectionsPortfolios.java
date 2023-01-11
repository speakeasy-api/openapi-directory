package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PresetsUserMetadataConnectionsPortfolios
 * Information about this user's portfolios.
**/
public class PresetsUserMetadataConnectionsPortfolios {
    @JsonProperty("options")
    public String[] options;
    public PresetsUserMetadataConnectionsPortfolios withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PresetsUserMetadataConnectionsPortfolios withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PresetsUserMetadataConnectionsPortfolios withUri(String uri) {
        this.uri = uri;
        return this;
    }
}