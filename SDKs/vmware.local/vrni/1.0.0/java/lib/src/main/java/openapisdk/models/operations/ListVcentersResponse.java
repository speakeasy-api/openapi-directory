package openapisdk.models.operations;



public class ListVcentersResponse {
    public String contentType;
    public ListVcentersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListVcentersResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListVcentersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}