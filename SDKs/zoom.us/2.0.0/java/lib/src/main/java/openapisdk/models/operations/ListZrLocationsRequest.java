package openapisdk.models.operations;



public class ListZrLocationsRequest {
    public ListZrLocationsQueryParams queryParams;
    public ListZrLocationsRequest withQueryParams(ListZrLocationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListZrLocationsSecurity security;
    public ListZrLocationsRequest withSecurity(ListZrLocationsSecurity security) {
        this.security = security;
        return this;
    }
}