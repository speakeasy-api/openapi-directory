package openapisdk.models.operations;



public class AlbumApiGetUserCollectionsResponse {
    public openapisdk.models.shared.AlbumForUserForApiContract[] albumForUserForApiContracts;
    public AlbumApiGetUserCollectionsResponse withAlbumForUserForApiContracts(openapisdk.models.shared.AlbumForUserForApiContract[] albumForUserForApiContracts) {
        this.albumForUserForApiContracts = albumForUserForApiContracts;
        return this;
    }
    public byte[] body;
    public AlbumApiGetUserCollectionsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AlbumApiGetUserCollectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AlbumApiGetUserCollectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}