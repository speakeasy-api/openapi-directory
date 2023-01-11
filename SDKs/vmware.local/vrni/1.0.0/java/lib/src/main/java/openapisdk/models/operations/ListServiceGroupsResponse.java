package openapisdk.models.operations;



public class ListServiceGroupsResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListServiceGroupsResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListServiceGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime;
    public ListServiceGroupsResponse withPagedListResponseWithTime(openapisdk.models.shared.PagedListResponseWithTime pagedListResponseWithTime) {
        this.pagedListResponseWithTime = pagedListResponseWithTime;
        return this;
    }
    public Long statusCode;
    public ListServiceGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}