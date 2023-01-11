package openapisdk.models.operations;



public class ListLayer2NetworksResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListLayer2NetworksResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListLayer2NetworksResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListLayer2NetworksResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListLayer2NetworksResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}