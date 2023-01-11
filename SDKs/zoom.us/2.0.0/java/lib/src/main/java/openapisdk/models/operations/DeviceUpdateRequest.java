package openapisdk.models.operations;



public class DeviceUpdateRequest {
    public DeviceUpdatePathParams pathParams;
    public DeviceUpdateRequest withPathParams(DeviceUpdatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeviceUpdateRequests request;
    public DeviceUpdateRequest withRequest(DeviceUpdateRequests request) {
        this.request = request;
        return this;
    }
}