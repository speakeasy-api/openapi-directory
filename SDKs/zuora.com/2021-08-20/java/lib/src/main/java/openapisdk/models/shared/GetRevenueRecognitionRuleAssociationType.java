package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRevenueRecognitionRuleAssociationType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revenueRecognitionRuleName")
    public String revenueRecognitionRuleName;
    public GetRevenueRecognitionRuleAssociationType withRevenueRecognitionRuleName(String revenueRecognitionRuleName) {
        this.revenueRecognitionRuleName = revenueRecognitionRuleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetRevenueRecognitionRuleAssociationType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}