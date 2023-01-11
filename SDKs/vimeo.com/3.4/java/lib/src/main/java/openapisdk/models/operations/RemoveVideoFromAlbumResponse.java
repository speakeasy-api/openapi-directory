package openapisdk.models.operations;



public class RemoveVideoFromAlbumResponse {
    public String contentType;
    public RemoveVideoFromAlbumResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveVideoFromAlbumResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public RemoveVideoFromAlbumResponse withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}