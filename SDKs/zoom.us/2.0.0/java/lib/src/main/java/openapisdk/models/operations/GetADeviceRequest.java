package openapisdk.models.operations;



public class GetADeviceRequest {
    public GetADevicePathParams pathParams;
    public GetADeviceRequest withPathParams(GetADevicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetADeviceSecurity security;
    public GetADeviceRequest withSecurity(GetADeviceSecurity security) {
        this.security = security;
        return this;
    }
}