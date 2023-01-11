package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExportNsxRecommendedRulesRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RecommendedRulesRequest request;
    public ExportNsxRecommendedRulesRequest withRequest(openapisdk.models.shared.RecommendedRulesRequest request) {
        this.request = request;
        return this;
    }
    public ExportNsxRecommendedRulesSecurity security;
    public ExportNsxRecommendedRulesRequest withSecurity(ExportNsxRecommendedRulesSecurity security) {
        this.security = security;
        return this;
    }
}