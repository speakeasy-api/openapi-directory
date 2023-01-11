package openapisdk.models.operations;



public class ListAristaSwitchesResponse {
    public String contentType;
    public ListAristaSwitchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListAristaSwitchesResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListAristaSwitchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}