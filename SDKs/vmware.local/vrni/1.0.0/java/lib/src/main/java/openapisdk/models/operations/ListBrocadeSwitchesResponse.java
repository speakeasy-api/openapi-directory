package openapisdk.models.operations;



public class ListBrocadeSwitchesResponse {
    public String contentType;
    public ListBrocadeSwitchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListBrocadeSwitchesResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListBrocadeSwitchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}