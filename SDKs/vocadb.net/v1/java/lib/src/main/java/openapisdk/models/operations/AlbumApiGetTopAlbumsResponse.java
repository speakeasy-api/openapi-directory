package openapisdk.models.operations;



public class AlbumApiGetTopAlbumsResponse {
    public openapisdk.models.shared.AlbumForApiContract[] albumForApiContracts;
    public AlbumApiGetTopAlbumsResponse withAlbumForApiContracts(openapisdk.models.shared.AlbumForApiContract[] albumForApiContracts) {
        this.albumForApiContracts = albumForApiContracts;
        return this;
    }
    public byte[] body;
    public AlbumApiGetTopAlbumsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AlbumApiGetTopAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetTopAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}