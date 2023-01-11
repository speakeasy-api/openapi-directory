package openapisdk.models.operations;



public class DeleteAZoomRoomResponse {
    public byte[] body;
    public DeleteAZoomRoomResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DeleteAZoomRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteAZoomRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> deleteAZoomRoom204ApplicationJSONObject;
    public DeleteAZoomRoomResponse withDeleteAZoomRoom204ApplicationJsonObject(java.util.Map<String, Object> deleteAZoomRoom204ApplicationJSONObject) {
        this.deleteAZoomRoom204ApplicationJSONObject = deleteAZoomRoom204ApplicationJSONObject;
        return this;
    }
}