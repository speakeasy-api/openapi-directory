package openapisdk.models.operations;



public class UpdateGroupSettingsResponse {
    public byte[] body;
    public UpdateGroupSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateGroupSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateGroupSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateGroupSettings204ApplicationJSONAny;
    public UpdateGroupSettingsResponse withUpdateGroupSettings204ApplicationJsonAny(Object updateGroupSettings204ApplicationJSONAny) {
        this.updateGroupSettings204ApplicationJSONAny = updateGroupSettings204ApplicationJSONAny;
        return this;
    }
}