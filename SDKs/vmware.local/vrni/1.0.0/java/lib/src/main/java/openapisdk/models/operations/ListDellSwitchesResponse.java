package openapisdk.models.operations;



public class ListDellSwitchesResponse {
    public String contentType;
    public ListDellSwitchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListDellSwitchesResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListDellSwitchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}