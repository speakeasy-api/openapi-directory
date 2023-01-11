package openapisdk.models.operations;



public class PriceBulkUploadsResponse {
    public byte[] body;
    public PriceBulkUploadsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PriceBulkUploadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PriceBulkUploadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PriceBulkUploads200ApplicationJson priceBulkUploads200ApplicationJSONObject;
    public PriceBulkUploadsResponse withPriceBulkUploads200ApplicationJsonObject(PriceBulkUploads200ApplicationJson priceBulkUploads200ApplicationJSONObject) {
        this.priceBulkUploads200ApplicationJSONObject = priceBulkUploads200ApplicationJSONObject;
        return this;
    }
}