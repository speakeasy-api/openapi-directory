package openapisdk.models.operations;



public class SongApiGetRatingsRequest {
    public SongApiGetRatingsPathParams pathParams;
    public SongApiGetRatingsRequest withPathParams(SongApiGetRatingsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SongApiGetRatingsQueryParams queryParams;
    public SongApiGetRatingsRequest withQueryParams(SongApiGetRatingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}