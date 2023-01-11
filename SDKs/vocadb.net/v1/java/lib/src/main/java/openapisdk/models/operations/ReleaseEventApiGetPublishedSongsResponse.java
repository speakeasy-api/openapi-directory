package openapisdk.models.operations;



public class ReleaseEventApiGetPublishedSongsResponse {
    public byte[] body;
    public ReleaseEventApiGetPublishedSongsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ReleaseEventApiGetPublishedSongsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SongForApiContract[] songForApiContracts;
    public ReleaseEventApiGetPublishedSongsResponse withSongForApiContracts(openapisdk.models.shared.SongForApiContract[] songForApiContracts) {
        this.songForApiContracts = songForApiContracts;
        return this;
    }
    public Long statusCode;
    public ReleaseEventApiGetPublishedSongsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}