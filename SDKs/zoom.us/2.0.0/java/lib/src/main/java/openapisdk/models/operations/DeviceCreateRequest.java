package openapisdk.models.operations;



public class DeviceCreateRequest {
    public DeviceCreateRequests request;
    public DeviceCreateRequest withRequest(DeviceCreateRequests request) {
        this.request = request;
        return this;
    }
    public DeviceCreateSecurity security;
    public DeviceCreateRequest withSecurity(DeviceCreateSecurity security) {
        this.security = security;
        return this;
    }
}