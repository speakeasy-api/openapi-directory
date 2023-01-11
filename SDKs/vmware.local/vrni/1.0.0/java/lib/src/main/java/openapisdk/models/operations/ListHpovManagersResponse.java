package openapisdk.models.operations;



public class ListHpovManagersResponse {
    public String contentType;
    public ListHpovManagersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListHpovManagersResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListHpovManagersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}