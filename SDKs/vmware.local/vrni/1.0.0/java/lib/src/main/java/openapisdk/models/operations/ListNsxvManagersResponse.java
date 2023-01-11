package openapisdk.models.operations;



public class ListNsxvManagersResponse {
    public String contentType;
    public ListNsxvManagersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListNsxvManagersResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListNsxvManagersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}