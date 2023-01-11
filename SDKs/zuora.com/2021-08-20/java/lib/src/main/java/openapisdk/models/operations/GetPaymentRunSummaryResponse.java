package openapisdk.models.operations;



public class GetPaymentRunSummaryResponse {
    public String contentType;
    public GetPaymentRunSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentRunSummaryResponse getPaymentRunSummaryResponse;
    public GetPaymentRunSummaryResponse withGetPaymentRunSummaryResponse(openapisdk.models.shared.GetPaymentRunSummaryResponse getPaymentRunSummaryResponse) {
        this.getPaymentRunSummaryResponse = getPaymentRunSummaryResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentRunSummaryResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentRunSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}