package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutPublicNotificationDefinitionRequestFilterRule {
    @JsonProperty("condition")
    public String condition;
    public PutPublicNotificationDefinitionRequestFilterRule withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public PutPublicNotificationDefinitionRequestFilterRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("parameters")
    public java.util.Map<String, FilterRuleParameterDefinition> parameters;
    public PutPublicNotificationDefinitionRequestFilterRule withParameters(java.util.Map<String, FilterRuleParameterDefinition> parameters) {
        this.parameters = parameters;
        return this;
    }
}