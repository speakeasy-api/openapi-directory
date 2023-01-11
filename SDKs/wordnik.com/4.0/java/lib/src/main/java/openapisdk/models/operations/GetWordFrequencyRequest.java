package openapisdk.models.operations;



public class GetWordFrequencyRequest {
    public GetWordFrequencyPathParams pathParams;
    public GetWordFrequencyRequest withPathParams(GetWordFrequencyPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetWordFrequencyQueryParams queryParams;
    public GetWordFrequencyRequest withQueryParams(GetWordFrequencyQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
}