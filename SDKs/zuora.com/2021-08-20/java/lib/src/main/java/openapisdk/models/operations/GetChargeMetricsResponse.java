package openapisdk.models.operations;



public class GetChargeMetricsResponse {
    public openapisdk.models.shared.ChargeMetricsResponse chargeMetricsResponse;
    public GetChargeMetricsResponse withChargeMetricsResponse(openapisdk.models.shared.ChargeMetricsResponse chargeMetricsResponse) {
        this.chargeMetricsResponse = chargeMetricsResponse;
        return this;
    }
    public openapisdk.models.shared.CommonReasonsErrorResponse commonReasonsErrorResponse;
    public GetChargeMetricsResponse withCommonReasonsErrorResponse(openapisdk.models.shared.CommonReasonsErrorResponse commonReasonsErrorResponse) {
        this.commonReasonsErrorResponse = commonReasonsErrorResponse;
        return this;
    }
    public String contentType;
    public GetChargeMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetChargeMetricsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetChargeMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}