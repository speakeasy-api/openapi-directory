package openapisdk.models.operations;



public class DeviceListRequest {
    public DeviceListQueryParams queryParams;
    public DeviceListRequest withQueryParams(DeviceListQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DeviceListSecurity security;
    public DeviceListRequest withSecurity(DeviceListSecurity security) {
        this.security = security;
        return this;
    }
}