package openapisdk.models.operations;



public class SongListApiGetFeaturedListsResponse {
    public byte[] body;
    public SongListApiGetFeaturedListsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public SongListApiGetFeaturedListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PartialFindResultSongListForApiContract partialFindResultSongListForApiContract;
    public SongListApiGetFeaturedListsResponse withPartialFindResultSongListForApiContract(openapisdk.models.shared.PartialFindResultSongListForApiContract partialFindResultSongListForApiContract) {
        this.partialFindResultSongListForApiContract = partialFindResultSongListForApiContract;
        return this;
    }
    public Long statusCode;
    public SongListApiGetFeaturedListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}