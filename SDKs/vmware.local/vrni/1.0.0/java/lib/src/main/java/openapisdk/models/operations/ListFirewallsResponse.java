package openapisdk.models.operations;



public class ListFirewallsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListFirewallsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListFirewallsResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}