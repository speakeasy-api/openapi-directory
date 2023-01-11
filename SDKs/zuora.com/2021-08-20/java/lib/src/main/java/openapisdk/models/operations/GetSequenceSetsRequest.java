package openapisdk.models.operations;



public class GetSequenceSetsRequest {
    public GetSequenceSetsQueryParams queryParams;
    public GetSequenceSetsRequest withQueryParams(GetSequenceSetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetSequenceSetsHeaders headers;
    public GetSequenceSetsRequest withHeaders(GetSequenceSetsHeaders headers) {
        this.headers = headers;
        return this;
    }
}