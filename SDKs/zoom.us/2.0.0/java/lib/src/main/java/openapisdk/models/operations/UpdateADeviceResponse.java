package openapisdk.models.operations;



public class UpdateADeviceResponse {
    public byte[] body;
    public UpdateADeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateADeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateADeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateADevice204ApplicationJSONAny;
    public UpdateADeviceResponse withUpdateADevice204ApplicationJsonAny(Object updateADevice204ApplicationJSONAny) {
        this.updateADevice204ApplicationJSONAny = updateADevice204ApplicationJSONAny;
        return this;
    }
}