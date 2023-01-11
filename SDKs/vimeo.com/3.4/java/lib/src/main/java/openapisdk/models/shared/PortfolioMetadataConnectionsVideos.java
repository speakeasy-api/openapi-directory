package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PortfolioMetadataConnectionsVideos
 * Information about the videos contained within this portfolio.
**/
public class PortfolioMetadataConnectionsVideos {
    @JsonProperty("options")
    public String[] options;
    public PortfolioMetadataConnectionsVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("total")
    public Double total;
    public PortfolioMetadataConnectionsVideos withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public PortfolioMetadataConnectionsVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}