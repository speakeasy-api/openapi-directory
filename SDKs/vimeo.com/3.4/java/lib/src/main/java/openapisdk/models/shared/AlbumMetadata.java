package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumMetadata
 * Metadata about the album.
**/
public class AlbumMetadata {
    @JsonProperty("connections")
    public AlbumMetadataConnections connections;
    public AlbumMetadata withConnections(AlbumMetadataConnections connections) {
        this.connections = connections;
        return this;
    }
    @JsonProperty("interactions")
    public AlbumMetadataInteractions interactions;
    public AlbumMetadata withInteractions(AlbumMetadataInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
}