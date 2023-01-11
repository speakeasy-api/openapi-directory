package openapisdk.models.operations;



public class UserApiGetAlbumForUserResponse {
    public openapisdk.models.shared.AlbumForUserForApiContract albumForUserForApiContract;
    public UserApiGetAlbumForUserResponse withAlbumForUserForApiContract(openapisdk.models.shared.AlbumForUserForApiContract albumForUserForApiContract) {
        this.albumForUserForApiContract = albumForUserForApiContract;
        return this;
    }
    public byte[] body;
    public UserApiGetAlbumForUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetAlbumForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiGetAlbumForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}