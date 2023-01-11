package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class FilterRuleParameterDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public FilterRuleParameterDefinition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public FilterRuleParameterDefinition withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public FilterRuleParameterDefinition withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueType")
    public FilterRuleParameterDefinitionValueTypeEnum valueType;
    public FilterRuleParameterDefinition withValueType(FilterRuleParameterDefinitionValueTypeEnum valueType) {
        this.valueType = valueType;
        return this;
    }
}