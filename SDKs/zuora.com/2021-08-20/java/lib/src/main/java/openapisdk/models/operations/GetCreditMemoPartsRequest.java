package openapisdk.models.operations;



public class GetCreditMemoPartsRequest {
    public GetCreditMemoPartsPathParams pathParams;
    public GetCreditMemoPartsRequest withPathParams(GetCreditMemoPartsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCreditMemoPartsQueryParams queryParams;
    public GetCreditMemoPartsRequest withQueryParams(GetCreditMemoPartsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCreditMemoPartsHeaders headers;
    public GetCreditMemoPartsRequest withHeaders(GetCreditMemoPartsHeaders headers) {
        this.headers = headers;
        return this;
    }
}