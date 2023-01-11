package openapisdk.models.operations;



public class GetPaymentRunDataResponse {
    public String contentType;
    public GetPaymentRunDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentRunDataArrayResponse getPaymentRunDataArrayResponse;
    public GetPaymentRunDataResponse withGetPaymentRunDataArrayResponse(openapisdk.models.shared.GetPaymentRunDataArrayResponse getPaymentRunDataArrayResponse) {
        this.getPaymentRunDataArrayResponse = getPaymentRunDataArrayResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentRunDataResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentRunDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}