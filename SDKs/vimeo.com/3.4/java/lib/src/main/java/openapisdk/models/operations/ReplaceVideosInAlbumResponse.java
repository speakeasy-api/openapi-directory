package openapisdk.models.operations;



public class ReplaceVideosInAlbumResponse {
    public String contentType;
    public ReplaceVideosInAlbumResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReplaceVideosInAlbumResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public ReplaceVideosInAlbumResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}