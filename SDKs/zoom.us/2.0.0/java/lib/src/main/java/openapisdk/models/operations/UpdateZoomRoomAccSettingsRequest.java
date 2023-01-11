package openapisdk.models.operations;



public class UpdateZoomRoomAccSettingsRequest {
    public UpdateZoomRoomAccSettingsQueryParams queryParams;
    public UpdateZoomRoomAccSettingsRequest withQueryParams(UpdateZoomRoomAccSettingsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateZoomRoomAccSettingsRequests request;
    public UpdateZoomRoomAccSettingsRequest withRequest(UpdateZoomRoomAccSettingsRequests request) {
        this.request = request;
        return this;
    }
    public UpdateZoomRoomAccSettingsSecurity security;
    public UpdateZoomRoomAccSettingsRequest withSecurity(UpdateZoomRoomAccSettingsSecurity security) {
        this.security = security;
        return this;
    }
}