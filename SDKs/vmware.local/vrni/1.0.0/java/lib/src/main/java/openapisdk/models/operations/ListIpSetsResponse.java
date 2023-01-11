package openapisdk.models.operations;



public class ListIpSetsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListIpSetsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListIpSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListIpSetsResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListIpSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}