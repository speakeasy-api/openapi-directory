package openapisdk.models.operations;



public class GetRelatedWordsRequest {
    public GetRelatedWordsPathParams pathParams;
    public GetRelatedWordsRequest withPathParams(GetRelatedWordsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetRelatedWordsQueryParams queryParams;
    public GetRelatedWordsRequest withQueryParams(GetRelatedWordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}