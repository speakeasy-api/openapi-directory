package openapisdk.models.operations;



public class PostAccountingPeriodResponse {
    public String contentType;
    public PostAccountingPeriodResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostAccountingPeriodResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public openapisdk.models.shared.PostAccountingPeriodResponseType postAccountingPeriodResponseType;
    public PostAccountingPeriodResponse withPostAccountingPeriodResponseType(openapisdk.models.shared.PostAccountingPeriodResponseType postAccountingPeriodResponseType) {
        this.postAccountingPeriodResponseType = postAccountingPeriodResponseType;
        return this;
    }
    public Long statusCode;
    public PostAccountingPeriodResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}