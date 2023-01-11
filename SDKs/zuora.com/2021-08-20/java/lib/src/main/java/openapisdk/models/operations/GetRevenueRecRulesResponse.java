package openapisdk.models.operations;



public class GetRevenueRecRulesResponse {
    public String contentType;
    public GetRevenueRecRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRevenueRecognitionRuleAssociationType getRevenueRecognitionRuleAssociationType;
    public GetRevenueRecRulesResponse withGetRevenueRecognitionRuleAssociationType(openapisdk.models.shared.GetRevenueRecognitionRuleAssociationType getRevenueRecognitionRuleAssociationType) {
        this.getRevenueRecognitionRuleAssociationType = getRevenueRecognitionRuleAssociationType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetRevenueRecRulesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetRevenueRecRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}