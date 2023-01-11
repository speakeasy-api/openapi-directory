package openapisdk.models.operations;



public class ListUcsManagersResponse {
    public String contentType;
    public ListUcsManagersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListUcsManagersResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListUcsManagersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}