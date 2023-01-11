package openapisdk.models.operations;



public class PutRunTrialBalanceResponse {
    public openapisdk.models.shared.CommonResponseType commonResponseType;
    public PutRunTrialBalanceResponse withCommonResponseType(openapisdk.models.shared.CommonResponseType commonResponseType) {
        this.commonResponseType = commonResponseType;
        return this;
    }
    public String contentType;
    public PutRunTrialBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutRunTrialBalanceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PutRunTrialBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}