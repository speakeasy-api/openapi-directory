package openapisdk.models.operations;



public class ListPhoneDevicesRequest {
    public ListPhoneDevicesQueryParams queryParams;
    public ListPhoneDevicesRequest withQueryParams(ListPhoneDevicesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPhoneDevicesSecurity security;
    public ListPhoneDevicesRequest withSecurity(ListPhoneDevicesSecurity security) {
        this.security = security;
        return this;
    }
}