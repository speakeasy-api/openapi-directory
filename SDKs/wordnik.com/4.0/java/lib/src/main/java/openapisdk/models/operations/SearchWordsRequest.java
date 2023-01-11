package openapisdk.models.operations;



public class SearchWordsRequest {
    public SearchWordsPathParams pathParams;
    public SearchWordsRequest withPathParams(SearchWordsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public SearchWordsQueryParams queryParams;
    public SearchWordsRequest withQueryParams(SearchWordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}