package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AlbumMetadataInteractionsAddLogos
 * An action indicating that the authenticated user is an admin of the album and may therefore add custom logos. This data requires a bearer token with the `private` scope.
**/
public class AlbumMetadataInteractionsAddLogos {
    @JsonProperty("options")
    public String[] options;
    public AlbumMetadataInteractionsAddLogos withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public AlbumMetadataInteractionsAddLogos withUri(String uri) {
        this.uri = uri;
        return this;
    }
}