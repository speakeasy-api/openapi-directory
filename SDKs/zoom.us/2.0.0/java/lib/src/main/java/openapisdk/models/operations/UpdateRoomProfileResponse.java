package openapisdk.models.operations;



public class UpdateRoomProfileResponse {
    public byte[] body;
    public UpdateRoomProfileResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public UpdateRoomProfileResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public UpdateRoomProfileResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateRoomProfile204ApplicationJSONObject;
    public UpdateRoomProfileResponse withUpdateRoomProfile204ApplicationJsonObject(java.util.Map<String, Object> updateRoomProfile204ApplicationJSONObject) {
        this.updateRoomProfile204ApplicationJSONObject = updateRoomProfile204ApplicationJSONObject;
        return this;
    }
}