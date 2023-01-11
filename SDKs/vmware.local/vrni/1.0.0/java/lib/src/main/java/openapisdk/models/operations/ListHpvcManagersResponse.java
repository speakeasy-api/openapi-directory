package openapisdk.models.operations;



public class ListHpvcManagersResponse {
    public String contentType;
    public ListHpvcManagersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListHpvcManagersResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListHpvcManagersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}