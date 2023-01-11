package openapisdk.models.operations;



public class UpdateADeviceRequest {
    public UpdateADevicePathParams pathParams;
    public UpdateADeviceRequest withPathParams(UpdateADevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateADeviceRequests request;
    public UpdateADeviceRequest withRequest(UpdateADeviceRequests request) {
        this.request = request;
        return this;
    }
    public UpdateADeviceSecurity security;
    public UpdateADeviceRequest withSecurity(UpdateADeviceSecurity security) {
        this.security = security;
        return this;
    }
}