package openapisdk.models.operations;



public class SongListApiGetSongsRequest {
    public SongListApiGetSongsPathParams pathParams;
    public SongListApiGetSongsRequest withPathParams(SongListApiGetSongsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SongListApiGetSongsQueryParams queryParams;
    public SongListApiGetSongsRequest withQueryParams(SongListApiGetSongsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}