package openapisdk.models.operations;



public class GetInventoryRequest {
    public GetInventoryQueryParams queryParams;
    public GetInventoryRequest withQueryParams(GetInventoryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetInventoryHeaders headers;
    public GetInventoryRequest withHeaders(GetInventoryHeaders headers) {
        this.headers = headers;
        return this;
    }
}