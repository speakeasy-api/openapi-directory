package openapisdk.models.operations;



public class UpdateZrSettingsResponse {
    public byte[] body;
    public UpdateZrSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateZrSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateZrSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateZRSettings204ApplicationJSONAny;
    public UpdateZrSettingsResponse withUpdateZrSettings204ApplicationJsonAny(Object updateZRSettings204ApplicationJSONAny) {
        this.updateZRSettings204ApplicationJSONAny = updateZRSettings204ApplicationJSONAny;
        return this;
    }
}