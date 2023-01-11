package openapisdk.models.operations;



public class ListJuniperSwitchesResponse {
    public String contentType;
    public ListJuniperSwitchesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListJuniperSwitchesResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListJuniperSwitchesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}