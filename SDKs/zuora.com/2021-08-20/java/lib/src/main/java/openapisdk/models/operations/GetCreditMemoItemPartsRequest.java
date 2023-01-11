package openapisdk.models.operations;



public class GetCreditMemoItemPartsRequest {
    public GetCreditMemoItemPartsPathParams pathParams;
    public GetCreditMemoItemPartsRequest withPathParams(GetCreditMemoItemPartsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetCreditMemoItemPartsQueryParams queryParams;
    public GetCreditMemoItemPartsRequest withQueryParams(GetCreditMemoItemPartsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetCreditMemoItemPartsHeaders headers;
    public GetCreditMemoItemPartsRequest withHeaders(GetCreditMemoItemPartsHeaders headers) {
        this.headers = headers;
        return this;
    }
}