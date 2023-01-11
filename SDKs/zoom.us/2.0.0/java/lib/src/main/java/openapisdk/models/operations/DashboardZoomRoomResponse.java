package openapisdk.models.operations;



public class DashboardZoomRoomResponse {
    public byte[] body;
    public DashboardZoomRoomResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardZoomRoomResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardZoomRoomResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardZoomRoomZoomRoom zoomRoom;
    public DashboardZoomRoomResponse withZoomRoom(DashboardZoomRoomZoomRoom zoomRoom) {
        this.zoomRoom = zoomRoom;
        return this;
    }
}