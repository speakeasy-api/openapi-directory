package openapisdk.models.operations;



public class ListCheckpointFirewallsResponse {
    public String contentType;
    public ListCheckpointFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DataSourceListResponse dataSourceListResponse;
    public ListCheckpointFirewallsResponse withDataSourceListResponse(openapisdk.models.shared.DataSourceListResponse dataSourceListResponse) {
        this.dataSourceListResponse = dataSourceListResponse;
        return this;
    }
    public Long statusCode;
    public ListCheckpointFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}