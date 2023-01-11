package openapisdk.models.operations;



public class GetPayRunsResponse {
    public openapisdk.models.shared.ApiException apiException;
    public GetPayRunsResponse withApiException(openapisdk.models.shared.ApiException apiException) {
        this.apiException = apiException;
        return this;
    }
    public String contentType;
    public GetPayRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayRuns payRuns;
    public GetPayRunsResponse withPayRuns(openapisdk.models.shared.PayRuns payRuns) {
        this.payRuns = payRuns;
        return this;
    }
    public Long statusCode;
    public GetPayRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}