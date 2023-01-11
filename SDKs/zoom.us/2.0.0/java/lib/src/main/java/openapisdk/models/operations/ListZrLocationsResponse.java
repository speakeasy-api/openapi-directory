package openapisdk.models.operations;



public class ListZrLocationsResponse {
    public byte[] body;
    public ListZrLocationsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListZrLocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListZrLocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListZrLocations200ApplicationJson listZRLocations200ApplicationJSONObject;
    public ListZrLocationsResponse withListZrLocations200ApplicationJsonObject(ListZrLocations200ApplicationJson listZRLocations200ApplicationJSONObject) {
        this.listZRLocations200ApplicationJSONObject = listZRLocations200ApplicationJSONObject;
        return this;
    }
}