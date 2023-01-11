package openapisdk.models.operations;



public class GetRevenueRecRulebyProductRatePlanChargeResponse {
    public String contentType;
    public GetRevenueRecRulebyProductRatePlanChargeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRevenueRecognitionRuleAssociationType getRevenueRecognitionRuleAssociationType;
    public GetRevenueRecRulebyProductRatePlanChargeResponse withGetRevenueRecognitionRuleAssociationType(openapisdk.models.shared.GetRevenueRecognitionRuleAssociationType getRevenueRecognitionRuleAssociationType) {
        this.getRevenueRecognitionRuleAssociationType = getRevenueRecognitionRuleAssociationType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueRecRulebyProductRatePlanChargeResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueRecRulebyProductRatePlanChargeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}