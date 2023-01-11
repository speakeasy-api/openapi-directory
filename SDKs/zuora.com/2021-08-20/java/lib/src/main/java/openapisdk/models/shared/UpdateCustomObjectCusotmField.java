package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateCustomObjectCusotmField
 * A reference to a field.
**/
public class UpdateCustomObjectCusotmField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("definition")
    public CustomObjectCustomFieldDefinitionUpdate definition;
    public UpdateCustomObjectCusotmField withDefinition(CustomObjectCustomFieldDefinitionUpdate definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterable")
    public Boolean filterable;
    public UpdateCustomObjectCusotmField withFilterable(Boolean filterable) {
        this.filterable = filterable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateCustomObjectCusotmField withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public UpdateCustomObjectCusotmField withRequired(Boolean required) {
        this.required = required;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetName")
    public String targetName;
    public UpdateCustomObjectCusotmField withTargetName(String targetName) {
        this.targetName = targetName;
        return this;
    }
}