package openapisdk.models.operations;



public class SongApiGetByIdRequest {
    public SongApiGetByIdPathParams pathParams;
    public SongApiGetByIdRequest withPathParams(SongApiGetByIdPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SongApiGetByIdQueryParams queryParams;
    public SongApiGetByIdRequest withQueryParams(SongApiGetByIdQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}