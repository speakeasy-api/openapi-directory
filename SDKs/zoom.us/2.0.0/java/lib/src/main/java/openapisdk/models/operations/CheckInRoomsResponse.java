package openapisdk.models.operations;



public class CheckInRoomsResponse {
    public byte[] body;
    public CheckInRoomsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public CheckInRoomsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public CheckInRoomsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object checkInRooms202ApplicationJSONAny;
    public CheckInRoomsResponse withCheckInRooms202ApplicationJsonAny(Object checkInRooms202ApplicationJSONAny) {
        this.checkInRooms202ApplicationJSONAny = checkInRooms202ApplicationJSONAny;
        return this;
    }
}