package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListRecommendedRulesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RecommendedRulesRequest request;
    public ListRecommendedRulesRequest withRequest(openapisdk.models.shared.RecommendedRulesRequest request) {
        this.request = request;
        return this;
    }
    public ListRecommendedRulesSecurity security;
    public ListRecommendedRulesRequest withSecurity(ListRecommendedRulesSecurity security) {
        this.security = security;
        return this;
    }
}