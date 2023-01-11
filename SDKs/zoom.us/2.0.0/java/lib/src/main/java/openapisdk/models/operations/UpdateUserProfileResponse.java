package openapisdk.models.operations;



public class UpdateUserProfileResponse {
    public byte[] body;
    public UpdateUserProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateUserProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateUserProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateUserProfile204ApplicationJSONAny;
    public UpdateUserProfileResponse withUpdateUserProfile204ApplicationJsonAny(Object updateUserProfile204ApplicationJSONAny) {
        this.updateUserProfile204ApplicationJSONAny = updateUserProfile204ApplicationJSONAny;
        return this;
    }
}