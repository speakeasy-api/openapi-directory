package openapisdk.models.operations;



public class AddUserSettingResponse {
    public byte[] body;
    public AddUserSettingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public AddUserSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public AddUserSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddUserSetting201ApplicationJson addUserSetting201ApplicationJSONObject;
    public AddUserSettingResponse withAddUserSetting201ApplicationJsonObject(AddUserSetting201ApplicationJson addUserSetting201ApplicationJSONObject) {
        this.addUserSetting201ApplicationJSONObject = addUserSetting201ApplicationJSONObject;
        return this;
    }
    public Object addUserSetting400ApplicationJSONAny;
    public AddUserSettingResponse withAddUserSetting400ApplicationJsonAny(Object addUserSetting400ApplicationJSONAny) {
        this.addUserSetting400ApplicationJSONAny = addUserSetting400ApplicationJSONAny;
        return this;
    }
}