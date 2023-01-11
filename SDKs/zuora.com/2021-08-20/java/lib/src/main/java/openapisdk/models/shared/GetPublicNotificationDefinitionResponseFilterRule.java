package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPublicNotificationDefinitionResponseFilterRule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("condition")
    public String condition;
    public GetPublicNotificationDefinitionResponseFilterRule withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GetPublicNotificationDefinitionResponseFilterRule withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eventTypeName")
    public String eventTypeName;
    public GetPublicNotificationDefinitionResponseFilterRule withEventTypeName(String eventTypeName) {
        this.eventTypeName = eventTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetPublicNotificationDefinitionResponseFilterRule withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parameters")
    public java.util.Map<String, FilterRuleParameterDefinition> parameters;
    public GetPublicNotificationDefinitionResponseFilterRule withParameters(java.util.Map<String, FilterRuleParameterDefinition> parameters) {
        this.parameters = parameters;
        return this;
    }
}