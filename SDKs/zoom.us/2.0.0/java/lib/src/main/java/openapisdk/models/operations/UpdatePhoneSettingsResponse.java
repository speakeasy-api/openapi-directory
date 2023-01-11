package openapisdk.models.operations;



public class UpdatePhoneSettingsResponse {
    public byte[] body;
    public UpdatePhoneSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdatePhoneSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdatePhoneSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updatePhoneSettings204ApplicationJSONAny;
    public UpdatePhoneSettingsResponse withUpdatePhoneSettings204ApplicationJsonAny(Object updatePhoneSettings204ApplicationJSONAny) {
        this.updatePhoneSettings204ApplicationJSONAny = updatePhoneSettings204ApplicationJSONAny;
        return this;
    }
}