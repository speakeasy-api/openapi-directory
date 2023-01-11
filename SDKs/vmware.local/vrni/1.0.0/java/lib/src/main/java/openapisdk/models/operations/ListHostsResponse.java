package openapisdk.models.operations;



public class ListHostsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListHostsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListHostsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListHostsResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListHostsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}