package openapisdk.models.operations;



public class ReplaceAlbumCustomThumbResponse {
    public String contentType;
    public ReplaceAlbumCustomThumbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReplaceAlbumCustomThumbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public ReplaceAlbumCustomThumbResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
    public openapisdk.models.shared.Picture picture;
    public ReplaceAlbumCustomThumbResponse withPicture(openapisdk.models.shared.Picture picture) {
        this.picture = picture;
        return this;
    }
}