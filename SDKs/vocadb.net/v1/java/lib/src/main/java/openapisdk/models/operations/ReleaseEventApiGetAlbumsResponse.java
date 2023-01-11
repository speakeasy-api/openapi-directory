package openapisdk.models.operations;



public class ReleaseEventApiGetAlbumsResponse {
    public openapisdk.models.shared.AlbumForApiContract[] albumForApiContracts;
    public ReleaseEventApiGetAlbumsResponse withAlbumForApiContracts(openapisdk.models.shared.AlbumForApiContract[] albumForApiContracts) {
        this.albumForApiContracts = albumForApiContracts;
        return this;
    }
    public byte[] body;
    public ReleaseEventApiGetAlbumsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReleaseEventApiGetAlbumsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReleaseEventApiGetAlbumsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}