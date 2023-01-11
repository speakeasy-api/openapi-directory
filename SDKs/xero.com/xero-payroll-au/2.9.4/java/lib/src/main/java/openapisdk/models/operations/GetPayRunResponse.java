package openapisdk.models.operations;



public class GetPayRunResponse {
    public String contentType;
    public GetPayRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayRuns payRuns;
    public GetPayRunResponse withPayRuns(openapisdk.models.shared.PayRuns payRuns) {
        this.payRuns = payRuns;
        return this;
    }
    public Long statusCode;
    public GetPayRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}