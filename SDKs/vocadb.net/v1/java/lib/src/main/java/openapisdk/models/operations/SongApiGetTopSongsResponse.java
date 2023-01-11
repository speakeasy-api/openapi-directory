package openapisdk.models.operations;



public class SongApiGetTopSongsResponse {
    public byte[] body;
    public SongApiGetTopSongsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetTopSongsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SongForApiContract[] songForApiContracts;
    public SongApiGetTopSongsResponse withSongForApiContracts(openapisdk.models.shared.SongForApiContract[] songForApiContracts) {
        this.songForApiContracts = songForApiContracts;
        return this;
    }
    public Long statusCode;
    public SongApiGetTopSongsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}