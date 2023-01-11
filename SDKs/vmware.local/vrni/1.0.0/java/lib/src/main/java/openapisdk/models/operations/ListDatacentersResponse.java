package openapisdk.models.operations;



public class ListDatacentersResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListDatacentersResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListDatacentersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListDatacentersResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListDatacentersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}