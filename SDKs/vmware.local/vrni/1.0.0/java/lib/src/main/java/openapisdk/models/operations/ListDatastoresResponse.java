package openapisdk.models.operations;



public class ListDatastoresResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListDatastoresResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListDatastoresResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListDatastoresResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListDatastoresResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}