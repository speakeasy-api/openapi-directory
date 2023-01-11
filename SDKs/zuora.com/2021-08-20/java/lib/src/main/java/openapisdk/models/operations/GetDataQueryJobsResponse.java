package openapisdk.models.operations;



public class GetDataQueryJobsResponse {
    public String contentType;
    public GetDataQueryJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDataQueryJobsResponse getDataQueryJobsResponse;
    public GetDataQueryJobsResponse withGetDataQueryJobsResponse(openapisdk.models.shared.GetDataQueryJobsResponse getDataQueryJobsResponse) {
        this.getDataQueryJobsResponse = getDataQueryJobsResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDataQueryJobsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDataQueryJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}