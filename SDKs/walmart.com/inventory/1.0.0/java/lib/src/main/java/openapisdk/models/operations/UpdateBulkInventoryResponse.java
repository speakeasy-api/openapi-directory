package openapisdk.models.operations;



public class UpdateBulkInventoryResponse {
    public byte[] body;
    public UpdateBulkInventoryResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateBulkInventoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateBulkInventoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdateBulkInventory200ApplicationJson updateBulkInventory200ApplicationJSONObject;
    public UpdateBulkInventoryResponse withUpdateBulkInventory200ApplicationJsonObject(UpdateBulkInventory200ApplicationJson updateBulkInventory200ApplicationJSONObject) {
        this.updateBulkInventory200ApplicationJSONObject = updateBulkInventory200ApplicationJSONObject;
        return this;
    }
}