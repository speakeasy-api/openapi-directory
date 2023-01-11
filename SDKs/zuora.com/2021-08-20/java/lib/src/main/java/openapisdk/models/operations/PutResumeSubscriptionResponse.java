package openapisdk.models.operations;



public class PutResumeSubscriptionResponse {
    public String contentType;
    public PutResumeSubscriptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PutResumeSubscriptionResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PutSubscriptionResumeResponseType putSubscriptionResumeResponseType;
    public PutResumeSubscriptionResponse withPutSubscriptionResumeResponseType(openapisdk.models.shared.PutSubscriptionResumeResponseType putSubscriptionResumeResponseType) {
        this.putSubscriptionResumeResponseType = putSubscriptionResumeResponseType;
        return this;
    }
    public Long statusCode;
    public PutResumeSubscriptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}