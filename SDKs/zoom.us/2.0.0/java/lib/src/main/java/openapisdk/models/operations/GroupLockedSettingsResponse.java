package openapisdk.models.operations;



public class GroupLockedSettingsResponse {
    public byte[] body;
    public GroupLockedSettingsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GroupLockedSettingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GroupLockedSettingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object groupLockedSettings204ApplicationJSONAny;
    public GroupLockedSettingsResponse withGroupLockedSettings204ApplicationJsonAny(Object groupLockedSettings204ApplicationJSONAny) {
        this.groupLockedSettings204ApplicationJSONAny = groupLockedSettings204ApplicationJSONAny;
        return this;
    }
}