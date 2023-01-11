package openapisdk.models.operations;



public class SetVideoAsAlbumThumbnailResponse {
    public String contentType;
    public SetVideoAsAlbumThumbnailResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetVideoAsAlbumThumbnailResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Album album;
    public SetVideoAsAlbumThumbnailResponse withAlbum(openapisdk.models.shared.Album album) {
        this.album = album;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SetVideoAsAlbumThumbnailResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}