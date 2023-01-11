package openapisdk.models.operations;



public class SongApiDeleteRequest {
    public SongApiDeletePathParams pathParams;
    public SongApiDeleteRequest withPathParams(SongApiDeletePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SongApiDeleteQueryParams queryParams;
    public SongApiDeleteRequest withQueryParams(SongApiDeleteQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}