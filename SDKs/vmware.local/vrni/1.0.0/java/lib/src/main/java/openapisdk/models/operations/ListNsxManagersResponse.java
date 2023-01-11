package openapisdk.models.operations;



public class ListNsxManagersResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListNsxManagersResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListNsxManagersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListNsxManagersResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListNsxManagersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}