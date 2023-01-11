package openapisdk.models.operations;



public class GetWfsInventoryResponse {
    public String contentType;
    public GetWfsInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetWfsInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetWfsInventory200ApplicationJson getWFSInventory200ApplicationJSONObject;
    public GetWfsInventoryResponse withGetWfsInventory200ApplicationJsonObject(GetWfsInventory200ApplicationJson getWFSInventory200ApplicationJSONObject) {
        this.getWFSInventory200ApplicationJSONObject = getWFSInventory200ApplicationJSONObject;
        return this;
    }
}