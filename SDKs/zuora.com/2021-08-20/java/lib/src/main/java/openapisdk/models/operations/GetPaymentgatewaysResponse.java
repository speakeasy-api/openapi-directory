package openapisdk.models.operations;



public class GetPaymentgatewaysResponse {
    public String contentType;
    public GetPaymentgatewaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPaymentGatwaysResponse getPaymentGatwaysResponse;
    public GetPaymentgatewaysResponse withGetPaymentGatwaysResponse(openapisdk.models.shared.GetPaymentGatwaysResponse getPaymentGatwaysResponse) {
        this.getPaymentGatwaysResponse = getPaymentGatwaysResponse;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetPaymentgatewaysResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetPaymentgatewaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}