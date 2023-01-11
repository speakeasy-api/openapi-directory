package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumMetadataInteractionsAddCustomThumbnails
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom thumbnails. This data requires a bearer token with the `private` scope.
**/
public class AlbumMetadataInteractionsAddCustomThumbnails {
    @JsonProperty("options")
    public String[] options;
    public AlbumMetadataInteractionsAddCustomThumbnails withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public AlbumMetadataInteractionsAddCustomThumbnails withUri(String uri) {
        this.uri = uri;
        return this;
    }
}