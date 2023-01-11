package openapisdk.models.operations;



public class AlbumApiGetNewAlbumsResponse {
    public openapisdk.models.shared.AlbumForApiContract[] albumForApiContracts;
    public AlbumApiGetNewAlbumsResponse withAlbumForApiContracts(openapisdk.models.shared.AlbumForApiContract[] albumForApiContracts) {
        this.albumForApiContracts = albumForApiContracts;
        return this;
    }
    public byte[] body;
    public AlbumApiGetNewAlbumsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AlbumApiGetNewAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetNewAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}