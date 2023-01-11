package openapisdk.models.operations;



public class GetFlowsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public GetFlowsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public GetFlowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public GetFlowsResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public GetFlowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}