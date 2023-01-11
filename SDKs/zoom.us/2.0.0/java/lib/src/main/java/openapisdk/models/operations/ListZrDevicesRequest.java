package openapisdk.models.operations;



public class ListZrDevicesRequest {
    public ListZrDevicesPathParams pathParams;
    public ListZrDevicesRequest withPathParams(ListZrDevicesPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListZrDevicesSecurity security;
    public ListZrDevicesRequest withSecurity(ListZrDevicesSecurity security) {
        this.security = security;
        return this;
    }
}