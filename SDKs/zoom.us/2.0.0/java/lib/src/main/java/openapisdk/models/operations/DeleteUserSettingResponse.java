package openapisdk.models.operations;



public class DeleteUserSettingResponse {
    public byte[] body;
    public DeleteUserSettingResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteUserSettingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteUserSettingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteUserSetting204ApplicationJSONAny;
    public DeleteUserSettingResponse withDeleteUserSetting204ApplicationJsonAny(Object deleteUserSetting204ApplicationJSONAny) {
        this.deleteUserSetting204ApplicationJSONAny = deleteUserSetting204ApplicationJSONAny;
        return this;
    }
}