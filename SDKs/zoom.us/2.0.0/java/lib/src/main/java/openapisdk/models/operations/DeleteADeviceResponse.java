package openapisdk.models.operations;



public class DeleteADeviceResponse {
    public byte[] body;
    public DeleteADeviceResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteADeviceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteADeviceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteADevice204ApplicationJSONAny;
    public DeleteADeviceResponse withDeleteADevice204ApplicationJsonAny(Object deleteADevice204ApplicationJSONAny) {
        this.deleteADevice204ApplicationJSONAny = deleteADevice204ApplicationJSONAny;
        return this;
    }
}