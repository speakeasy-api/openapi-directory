package openapisdk.models.operations;



public class SongListApiGetSongsResponse {
    public byte[] body;
    public SongListApiGetSongsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongListApiGetSongsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultSongInListForApiContract partialFindResultSongInListForApiContract;
    public SongListApiGetSongsResponse withPartialFindResultSongInListForApiContract(openapisdk.models.shared.PartialFindResultSongInListForApiContract partialFindResultSongInListForApiContract) {
        this.partialFindResultSongInListForApiContract = partialFindResultSongInListForApiContract;
        return this;
    }
    public Long statusCode;
    public SongListApiGetSongsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}