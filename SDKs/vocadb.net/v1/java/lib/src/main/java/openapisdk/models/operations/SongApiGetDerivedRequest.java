package openapisdk.models.operations;



public class SongApiGetDerivedRequest {
    public SongApiGetDerivedPathParams pathParams;
    public SongApiGetDerivedRequest withPathParams(SongApiGetDerivedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SongApiGetDerivedQueryParams queryParams;
    public SongApiGetDerivedRequest withQueryParams(SongApiGetDerivedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}