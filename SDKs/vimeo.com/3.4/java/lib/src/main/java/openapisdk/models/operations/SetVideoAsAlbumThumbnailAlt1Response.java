package openapisdk.models.operations;



public class SetVideoAsAlbumThumbnailAlt1Response {
    public String contentType;
    public SetVideoAsAlbumThumbnailAlt1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public SetVideoAsAlbumThumbnailAlt1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Album album;
    public SetVideoAsAlbumThumbnailAlt1Response withAlbum(openapisdk.models.shared.Album album) {
        this.album = album;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public SetVideoAsAlbumThumbnailAlt1Response withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
}