package openapisdk.models.operations;



public class UpdateInventoryForAnItemResponse {
    public byte[] body;
    public UpdateInventoryForAnItemResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateInventoryForAnItemResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateInventoryForAnItemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateInventoryForAnItem200ApplicationJson updateInventoryForAnItem200ApplicationJSONObject;
    public UpdateInventoryForAnItemResponse withUpdateInventoryForAnItem200ApplicationJsonObject(UpdateInventoryForAnItem200ApplicationJson updateInventoryForAnItem200ApplicationJSONObject) {
        this.updateInventoryForAnItem200ApplicationJSONObject = updateInventoryForAnItem200ApplicationJSONObject;
        return this;
    }
}