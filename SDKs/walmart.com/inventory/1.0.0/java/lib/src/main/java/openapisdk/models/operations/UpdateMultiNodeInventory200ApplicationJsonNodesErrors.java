package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateMultiNodeInventory200ApplicationJsonNodesErrors
 * Node Update Error description.
**/
public class UpdateMultiNodeInventory200ApplicationJsonNodesErrors {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("category")
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum category;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withCategory(UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("causes")
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses[] causes;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withCauses(UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses[] causes) {
        this.causes = causes;
        return this;
    }
    @JsonProperty("code")
    public String code;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorIdentifiers")
    public java.util.Map<String, java.util.Map<String, Object>> errorIdentifiers;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withErrorIdentifiers(java.util.Map<String, java.util.Map<String, Object>> errorIdentifiers) {
        this.errorIdentifiers = errorIdentifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("info")
    public String info;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withInfo(String info) {
        this.info = info;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum severity;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrors withSeverity(UpdateMultiNodeInventory200ApplicationJsonNodesErrorsSeverityEnum severity) {
        this.severity = severity;
        return this;
    }
}