package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandGenreMetadataConnections
 * A collection of information connected to this resource.
**/
public class OnDemandGenreMetadataConnections {
    @JsonProperty("pages")
    public OnDemandGenreMetadataConnectionsPages pages;
    public OnDemandGenreMetadataConnections withPages(OnDemandGenreMetadataConnectionsPages pages) {
        this.pages = pages;
        return this;
    }
}