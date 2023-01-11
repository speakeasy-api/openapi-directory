package openapisdk.models.operations;



public class UserApiGetFollowedArtistsResponse {
    public byte[] body;
    public UserApiGetFollowedArtistsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetFollowedArtistsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultArtistForUserForApiContract partialFindResultArtistForUserForApiContract;
    public UserApiGetFollowedArtistsResponse withPartialFindResultArtistForUserForApiContract(openapisdk.models.shared.PartialFindResultArtistForUserForApiContract partialFindResultArtistForUserForApiContract) {
        this.partialFindResultArtistForUserForApiContract = partialFindResultArtistForUserForApiContract;
        return this;
    }
    public Long statusCode;
    public UserApiGetFollowedArtistsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}