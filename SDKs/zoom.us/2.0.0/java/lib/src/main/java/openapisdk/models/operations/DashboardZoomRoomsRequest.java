package openapisdk.models.operations;



public class DashboardZoomRoomsRequest {
    public DashboardZoomRoomsQueryParams queryParams;
    public DashboardZoomRoomsRequest withQueryParams(DashboardZoomRoomsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardZoomRoomsSecurity security;
    public DashboardZoomRoomsRequest withSecurity(DashboardZoomRoomsSecurity security) {
        this.security = security;
        return this;
    }
}