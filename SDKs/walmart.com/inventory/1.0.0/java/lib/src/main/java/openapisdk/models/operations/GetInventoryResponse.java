package openapisdk.models.operations;



public class GetInventoryResponse {
    public byte[] body;
    public GetInventoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetInventory200ApplicationJson getInventory200ApplicationJSONObject;
    public GetInventoryResponse withGetInventory200ApplicationJsonObject(GetInventory200ApplicationJson getInventory200ApplicationJSONObject) {
        this.getInventory200ApplicationJSONObject = getInventory200ApplicationJSONObject;
        return this;
    }
}