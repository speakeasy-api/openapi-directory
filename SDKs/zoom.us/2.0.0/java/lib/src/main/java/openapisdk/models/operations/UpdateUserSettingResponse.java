package openapisdk.models.operations;



public class UpdateUserSettingResponse {
    public byte[] body;
    public UpdateUserSettingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateUserSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateUserSetting204ApplicationJSONAny;
    public UpdateUserSettingResponse withUpdateUserSetting204ApplicationJsonAny(Object updateUserSetting204ApplicationJSONAny) {
        this.updateUserSetting204ApplicationJSONAny = updateUserSetting204ApplicationJSONAny;
        return this;
    }
    public java.util.Map<String, Object> updateUserSetting400ApplicationJSONObject;
    public UpdateUserSettingResponse withUpdateUserSetting400ApplicationJsonObject(java.util.Map<String, Object> updateUserSetting400ApplicationJSONObject) {
        this.updateUserSetting400ApplicationJSONObject = updateUserSetting400ApplicationJSONObject;
        return this;
    }
}