package openapisdk.models.operations;



public class UpdateInventoryForAnItemRequest {
    public UpdateInventoryForAnItemQueryParams queryParams;
    public UpdateInventoryForAnItemRequest withQueryParams(UpdateInventoryForAnItemQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateInventoryForAnItemHeaders headers;
    public UpdateInventoryForAnItemRequest withHeaders(UpdateInventoryForAnItemHeaders headers) {
        this.headers = headers;
        return this;
    }
    public UpdateInventoryForAnItemRequests request;
    public UpdateInventoryForAnItemRequest withRequest(UpdateInventoryForAnItemRequests request) {
        this.request = request;
        return this;
    }
}