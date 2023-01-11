package openapisdk.models.operations;



public class ArtistApiGetOneRequest {
    public ArtistApiGetOnePathParams pathParams;
    public ArtistApiGetOneRequest withPathParams(ArtistApiGetOnePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ArtistApiGetOneQueryParams queryParams;
    public ArtistApiGetOneRequest withQueryParams(ArtistApiGetOneQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}