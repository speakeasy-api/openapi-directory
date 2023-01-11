package openapisdk.models.operations;



public class AlbumApiGetListResponse {
    public byte[] body;
    public AlbumApiGetListResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AlbumApiGetListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultAlbumForApiContract partialFindResultAlbumForApiContract;
    public AlbumApiGetListResponse withPartialFindResultAlbumForApiContract(openapisdk.models.shared.PartialFindResultAlbumForApiContract partialFindResultAlbumForApiContract) {
        this.partialFindResultAlbumForApiContract = partialFindResultAlbumForApiContract;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}