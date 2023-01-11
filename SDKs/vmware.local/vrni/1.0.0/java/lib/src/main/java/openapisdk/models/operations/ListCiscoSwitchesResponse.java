package openapisdk.models.operations;



public class ListCiscoSwitchesResponse {
    public String contentType;
    public ListCiscoSwitchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListCiscoSwitchesResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListCiscoSwitchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}