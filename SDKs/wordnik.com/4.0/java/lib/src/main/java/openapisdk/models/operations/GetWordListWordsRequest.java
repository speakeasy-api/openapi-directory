package openapisdk.models.operations;



public class GetWordListWordsRequest {
    public GetWordListWordsPathParams pathParams;
    public GetWordListWordsRequest withPathParams(GetWordListWordsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWordListWordsQueryParams queryParams;
    public GetWordListWordsRequest withQueryParams(GetWordListWordsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWordListWordsHeaders headers;
    public GetWordListWordsRequest withHeaders(GetWordListWordsHeaders headers) {
        this.headers = headers;
        return this;
    }
}