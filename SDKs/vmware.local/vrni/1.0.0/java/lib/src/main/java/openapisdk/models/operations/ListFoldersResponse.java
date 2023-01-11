package openapisdk.models.operations;



public class ListFoldersResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListFoldersResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListFoldersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListFoldersResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListFoldersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}