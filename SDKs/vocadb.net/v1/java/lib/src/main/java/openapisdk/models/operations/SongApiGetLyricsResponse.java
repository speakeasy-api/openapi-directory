package openapisdk.models.operations;



public class SongApiGetLyricsResponse {
    public byte[] body;
    public SongApiGetLyricsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongApiGetLyricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LyricsForSongContract lyricsForSongContract;
    public SongApiGetLyricsResponse withLyricsForSongContract(openapisdk.models.shared.LyricsForSongContract lyricsForSongContract) {
        this.lyricsForSongContract = lyricsForSongContract;
        return this;
    }
    public Long statusCode;
    public SongApiGetLyricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}