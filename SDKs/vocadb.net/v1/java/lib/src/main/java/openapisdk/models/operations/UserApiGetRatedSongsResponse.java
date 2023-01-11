package openapisdk.models.operations;



public class UserApiGetRatedSongsResponse {
    public byte[] body;
    public UserApiGetRatedSongsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UserApiGetRatedSongsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract partialFindResultRatedSongForUserForApiContract;
    public UserApiGetRatedSongsResponse withPartialFindResultRatedSongForUserForApiContract(openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract partialFindResultRatedSongForUserForApiContract) {
        this.partialFindResultRatedSongForUserForApiContract = partialFindResultRatedSongForUserForApiContract;
        return this;
    }
    public Long statusCode;
    public UserApiGetRatedSongsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}