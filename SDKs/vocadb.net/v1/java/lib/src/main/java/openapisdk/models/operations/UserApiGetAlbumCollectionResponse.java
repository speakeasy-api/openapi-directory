package openapisdk.models.operations;



public class UserApiGetAlbumCollectionResponse {
    public byte[] body;
    public UserApiGetAlbumCollectionResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetAlbumCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract partialFindResultAlbumForUserForApiContract;
    public UserApiGetAlbumCollectionResponse withPartialFindResultAlbumForUserForApiContract(openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract partialFindResultAlbumForUserForApiContract) {
        this.partialFindResultAlbumForUserForApiContract = partialFindResultAlbumForUserForApiContract;
        return this;
    }
    public Long statusCode;
    public UserApiGetAlbumCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}