package openapisdk.models.operations;



public class AlbumApiGetOneResponse {
    public openapisdk.models.shared.AlbumForApiContract albumForApiContract;
    public AlbumApiGetOneResponse withAlbumForApiContract(openapisdk.models.shared.AlbumForApiContract albumForApiContract) {
        this.albumForApiContract = albumForApiContract;
        return this;
    }
    public byte[] body;
    public AlbumApiGetOneResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AlbumApiGetOneResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetOneResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}