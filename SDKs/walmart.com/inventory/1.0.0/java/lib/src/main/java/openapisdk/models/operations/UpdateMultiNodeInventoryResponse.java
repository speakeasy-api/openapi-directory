package openapisdk.models.operations;



public class UpdateMultiNodeInventoryResponse {
    public String contentType;
    public UpdateMultiNodeInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateMultiNodeInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateMultiNodeInventory200ApplicationJson updateMultiNodeInventory200ApplicationJSONObject;
    public UpdateMultiNodeInventoryResponse withUpdateMultiNodeInventory200ApplicationJsonObject(UpdateMultiNodeInventory200ApplicationJson updateMultiNodeInventory200ApplicationJSONObject) {
        this.updateMultiNodeInventory200ApplicationJSONObject = updateMultiNodeInventory200ApplicationJSONObject;
        return this;
    }
}