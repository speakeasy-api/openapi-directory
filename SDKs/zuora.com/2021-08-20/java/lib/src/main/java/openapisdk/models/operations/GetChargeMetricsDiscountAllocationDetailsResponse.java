package openapisdk.models.operations;



public class GetChargeMetricsDiscountAllocationDetailsResponse {
    public openapisdk.models.shared.ChargeMetricsDiscountAllocationDetailResponse chargeMetricsDiscountAllocationDetailResponse;
    public GetChargeMetricsDiscountAllocationDetailsResponse withChargeMetricsDiscountAllocationDetailResponse(openapisdk.models.shared.ChargeMetricsDiscountAllocationDetailResponse chargeMetricsDiscountAllocationDetailResponse) {
        this.chargeMetricsDiscountAllocationDetailResponse = chargeMetricsDiscountAllocationDetailResponse;
        return this;
    }
    public openapisdk.models.shared.CommonReasonsErrorResponse commonReasonsErrorResponse;
    public GetChargeMetricsDiscountAllocationDetailsResponse withCommonReasonsErrorResponse(openapisdk.models.shared.CommonReasonsErrorResponse commonReasonsErrorResponse) {
        this.commonReasonsErrorResponse = commonReasonsErrorResponse;
        return this;
    }
    public String contentType;
    public GetChargeMetricsDiscountAllocationDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetChargeMetricsDiscountAllocationDetailsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetChargeMetricsDiscountAllocationDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}