package openapisdk.models.operations;



public class UserApiGetArtistForUserResponse {
    public openapisdk.models.shared.ArtistForUserForApiContract artistForUserForApiContract;
    public UserApiGetArtistForUserResponse withArtistForUserForApiContract(openapisdk.models.shared.ArtistForUserForApiContract artistForUserForApiContract) {
        this.artistForUserForApiContract = artistForUserForApiContract;
        return this;
    }
    public byte[] body;
    public UserApiGetArtistForUserResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetArtistForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UserApiGetArtistForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}