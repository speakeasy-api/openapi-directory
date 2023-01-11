package openapisdk.models.operations;



public class SongApiGetRatingsResponse {
    public byte[] body;
    public SongApiGetRatingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetRatingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RatedSongForUserForApiContract[] ratedSongForUserForApiContracts;
    public SongApiGetRatingsResponse withRatedSongForUserForApiContracts(openapisdk.models.shared.RatedSongForUserForApiContract[] ratedSongForUserForApiContracts) {
        this.ratedSongForUserForApiContracts = ratedSongForUserForApiContracts;
        return this;
    }
    public Long statusCode;
    public SongApiGetRatingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}