package openapisdk.models.operations;



public class ListRecommendedRulesResponse {
    public openapisdk.models.shared.ApiError apiError;
    public ListRecommendedRulesResponse withApiError(openapisdk.models.shared.ApiError apiError) {
        this.apiError = apiError;
        return this;
    }
    public String contentType;
    public ListRecommendedRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RecommendedRules recommendedRules;
    public ListRecommendedRulesResponse withRecommendedRules(openapisdk.models.shared.RecommendedRules recommendedRules) {
        this.recommendedRules = recommendedRules;
        return this;
    }
    public Long statusCode;
    public ListRecommendedRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}