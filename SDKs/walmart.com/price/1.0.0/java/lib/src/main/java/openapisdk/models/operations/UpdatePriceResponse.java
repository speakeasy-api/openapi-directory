package openapisdk.models.operations;



public class UpdatePriceResponse {
    public byte[] body;
    public UpdatePriceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdatePriceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePriceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public UpdatePrice200ApplicationJson updatePrice200ApplicationJSONObject;
    public UpdatePriceResponse withUpdatePrice200ApplicationJsonObject(UpdatePrice200ApplicationJson updatePrice200ApplicationJSONObject) {
        this.updatePrice200ApplicationJSONObject = updatePrice200ApplicationJSONObject;
        return this;
    }
}