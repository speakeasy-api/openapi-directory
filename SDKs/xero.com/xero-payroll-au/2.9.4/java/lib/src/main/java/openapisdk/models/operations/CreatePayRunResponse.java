package openapisdk.models.operations;



public class CreatePayRunResponse {
    public String contentType;
    public CreatePayRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayRuns payRuns;
    public CreatePayRunResponse withPayRuns(openapisdk.models.shared.PayRuns payRuns) {
        this.payRuns = payRuns;
        return this;
    }
    public Long statusCode;
    public CreatePayRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}