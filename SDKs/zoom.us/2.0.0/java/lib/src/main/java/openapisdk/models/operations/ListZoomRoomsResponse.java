package openapisdk.models.operations;



public class ListZoomRoomsResponse {
    public byte[] body;
    public ListZoomRoomsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public ListZoomRoomsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ListZoomRoomsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListZoomRooms200ApplicationJson listZoomRooms200ApplicationJSONObject;
    public ListZoomRoomsResponse withListZoomRooms200ApplicationJsonObject(ListZoomRooms200ApplicationJson listZoomRooms200ApplicationJSONObject) {
        this.listZoomRooms200ApplicationJSONObject = listZoomRooms200ApplicationJSONObject;
        return this;
    }
}