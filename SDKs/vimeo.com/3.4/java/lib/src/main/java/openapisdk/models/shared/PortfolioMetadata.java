package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PortfolioMetadata
 * Metadata about the album.
**/
public class PortfolioMetadata {
    @JsonProperty("connections")
    public PortfolioMetadataConnections connections;
    public PortfolioMetadata withConnections(PortfolioMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
}