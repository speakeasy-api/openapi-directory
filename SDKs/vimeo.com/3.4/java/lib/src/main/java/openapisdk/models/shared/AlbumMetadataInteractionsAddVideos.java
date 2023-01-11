package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumMetadataInteractionsAddVideos
 * An action indicating that the authenticated user is an admin of the album and may therefore add videos. This data requires a bearer token with the `private` scope.
**/
public class AlbumMetadataInteractionsAddVideos {
    @JsonProperty("options")
    public String[] options;
    public AlbumMetadataInteractionsAddVideos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public AlbumMetadataInteractionsAddVideos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}