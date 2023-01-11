package openapisdk.models.operations;



public class DashboardZoomRoomRequest {
    public DashboardZoomRoomPathParams pathParams;
    public DashboardZoomRoomRequest withPathParams(DashboardZoomRoomPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DashboardZoomRoomQueryParams queryParams;
    public DashboardZoomRoomRequest withQueryParams(DashboardZoomRoomQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DashboardZoomRoomSecurity security;
    public DashboardZoomRoomRequest withSecurity(DashboardZoomRoomSecurity security) {
        this.security = security;
        return this;
    }
}