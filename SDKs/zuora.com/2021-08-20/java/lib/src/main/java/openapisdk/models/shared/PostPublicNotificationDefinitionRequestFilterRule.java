package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostPublicNotificationDefinitionRequestFilterRule {
    @JsonProperty("condition")
    public String condition;
    public PostPublicNotificationDefinitionRequestFilterRule withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PostPublicNotificationDefinitionRequestFilterRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("parameters")
    public java.util.Map<String, FilterRuleParameterDefinition> parameters;
    public PostPublicNotificationDefinitionRequestFilterRule withParameters(java.util.Map<String, FilterRuleParameterDefinition> parameters) {
        this.parameters = parameters;
        return this;
    }
}