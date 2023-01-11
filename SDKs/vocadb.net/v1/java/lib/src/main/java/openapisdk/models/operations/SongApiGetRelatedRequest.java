package openapisdk.models.operations;



public class SongApiGetRelatedRequest {
    public SongApiGetRelatedPathParams pathParams;
    public SongApiGetRelatedRequest withPathParams(SongApiGetRelatedPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SongApiGetRelatedQueryParams queryParams;
    public SongApiGetRelatedRequest withQueryParams(SongApiGetRelatedQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}