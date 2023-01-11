package openapisdk.models.operations;



public class ListZrDevicesResponse {
    public byte[] body;
    public ListZrDevicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListZrDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListZrDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListZrDevices200ApplicationJson listZRDevices200ApplicationJSONObject;
    public ListZrDevicesResponse withListZrDevices200ApplicationJsonObject(ListZrDevices200ApplicationJson listZRDevices200ApplicationJSONObject) {
        this.listZRDevices200ApplicationJSONObject = listZRDevices200ApplicationJSONObject;
        return this;
    }
}