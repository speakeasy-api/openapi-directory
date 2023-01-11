package openapisdk.models.operations;



public class SongApiGetHighlightedSongsResponse {
    public byte[] body;
    public SongApiGetHighlightedSongsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetHighlightedSongsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SongForApiContract[] songForApiContracts;
    public SongApiGetHighlightedSongsResponse withSongForApiContracts(openapisdk.models.shared.SongForApiContract[] songForApiContracts) {
        this.songForApiContracts = songForApiContracts;
        return this;
    }
    public Long statusCode;
    public SongApiGetHighlightedSongsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}