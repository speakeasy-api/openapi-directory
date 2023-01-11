package openapisdk.models.operations;



public class DashboardZoomRoomsResponse {
    public byte[] body;
    public DashboardZoomRoomsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public DashboardZoomRoomsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DashboardZoomRoomsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public DashboardZoomRoomsZoomRoomList zoomRoomList;
    public DashboardZoomRoomsResponse withZoomRoomList(DashboardZoomRoomsZoomRoomList zoomRoomList) {
        this.zoomRoomList = zoomRoomList;
        return this;
    }
}