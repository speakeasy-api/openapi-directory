package openapisdk.models.operations;



public class UpdatePayRunResponse {
    public String contentType;
    public UpdatePayRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PayRuns payRuns;
    public UpdatePayRunResponse withPayRuns(openapisdk.models.shared.PayRuns payRuns) {
        this.payRuns = payRuns;
        return this;
    }
    public Long statusCode;
    public UpdatePayRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}