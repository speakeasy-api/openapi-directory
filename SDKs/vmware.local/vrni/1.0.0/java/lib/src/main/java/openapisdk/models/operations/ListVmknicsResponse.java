package openapisdk.models.operations;



public class ListVmknicsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListVmknicsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListVmknicsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListVmknicsResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListVmknicsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}