package openapisdk.models.operations;



public class SongApiPostRatingRequest {
    public SongApiPostRatingPathParams pathParams;
    public SongApiPostRatingRequest withPathParams(SongApiPostRatingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SongApiPostRatingRequests request;
    public SongApiPostRatingRequest withRequest(SongApiPostRatingRequests request) {
        this.request = request;
        return this;
    }
}