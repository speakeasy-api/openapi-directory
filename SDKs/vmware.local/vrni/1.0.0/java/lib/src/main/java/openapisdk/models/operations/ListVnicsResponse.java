package openapisdk.models.operations;



public class ListVnicsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListVnicsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListVnicsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListVnicsResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListVnicsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}