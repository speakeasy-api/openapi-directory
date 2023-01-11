package openapisdk.models.operations;



public class ListApplicationsResponse {
    public String contentType;
    public ListApplicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedListResponse pagedListResponse;
    public ListApplicationsResponse withPagedListResponse(openapisdk.models.shared.PagedListResponse pagedListResponse) {
        this.pagedListResponse = pagedListResponse;
        return this;
    }
    public Long statusCode;
    public ListApplicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}