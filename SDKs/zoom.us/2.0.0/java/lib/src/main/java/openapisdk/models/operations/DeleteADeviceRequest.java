package openapisdk.models.operations;



public class DeleteADeviceRequest {
    public DeleteADevicePathParams pathParams;
    public DeleteADeviceRequest withPathParams(DeleteADevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteADeviceSecurity security;
    public DeleteADeviceRequest withSecurity(DeleteADeviceSecurity security) {
        this.security = security;
        return this;
    }
}