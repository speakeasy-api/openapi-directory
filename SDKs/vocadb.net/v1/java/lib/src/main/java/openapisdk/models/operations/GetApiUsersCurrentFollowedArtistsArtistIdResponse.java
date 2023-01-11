package openapisdk.models.operations;



public class GetApiUsersCurrentFollowedArtistsArtistIdResponse {
    public openapisdk.models.shared.ArtistForUserForApiContract artistForUserForApiContract;
    public GetApiUsersCurrentFollowedArtistsArtistIdResponse withArtistForUserForApiContract(openapisdk.models.shared.ArtistForUserForApiContract artistForUserForApiContract) {
        this.artistForUserForApiContract = artistForUserForApiContract;
        return this;
    }
    public byte[] body;
    public GetApiUsersCurrentFollowedArtistsArtistIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetApiUsersCurrentFollowedArtistsArtistIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiUsersCurrentFollowedArtistsArtistIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}