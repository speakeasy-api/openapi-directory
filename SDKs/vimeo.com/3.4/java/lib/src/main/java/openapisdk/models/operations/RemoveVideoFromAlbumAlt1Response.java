package openapisdk.models.operations;



public class RemoveVideoFromAlbumAlt1Response {
    public String contentType;
    public RemoveVideoFromAlbumAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public RemoveVideoFromAlbumAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.LegacyError legacyError;
    public RemoveVideoFromAlbumAlt1Response withLegacyError(openapisdk.models.shared.LegacyError legacyError) {
        this.legacyError = legacyError;
        return this;
    }
}