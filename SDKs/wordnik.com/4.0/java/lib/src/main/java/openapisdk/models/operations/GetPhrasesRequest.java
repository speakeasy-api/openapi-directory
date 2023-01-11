package openapisdk.models.operations;



public class GetPhrasesRequest {
    public GetPhrasesPathParams pathParams;
    public GetPhrasesRequest withPathParams(GetPhrasesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetPhrasesQueryParams queryParams;
    public GetPhrasesRequest withQueryParams(GetPhrasesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}