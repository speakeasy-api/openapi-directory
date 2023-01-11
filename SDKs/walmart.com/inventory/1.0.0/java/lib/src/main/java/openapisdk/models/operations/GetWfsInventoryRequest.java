package openapisdk.models.operations;



public class GetWfsInventoryRequest {
    public GetWfsInventoryQueryParams queryParams;
    public GetWfsInventoryRequest withQueryParams(GetWfsInventoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetWfsInventoryHeaders headers;
    public GetWfsInventoryRequest withHeaders(GetWfsInventoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}