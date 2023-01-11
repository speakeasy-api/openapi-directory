package openapisdk.models.operations;



public class ListPhoneDevicesResponse {
    public byte[] body;
    public ListPhoneDevicesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListPhoneDevicesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListPhoneDevicesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListPhoneDevices200ApplicationJson listPhoneDevices200ApplicationJSONObject;
    public ListPhoneDevicesResponse withListPhoneDevices200ApplicationJsonObject(ListPhoneDevices200ApplicationJson listPhoneDevices200ApplicationJSONObject) {
        this.listPhoneDevices200ApplicationJSONObject = listPhoneDevices200ApplicationJSONObject;
        return this;
    }
}