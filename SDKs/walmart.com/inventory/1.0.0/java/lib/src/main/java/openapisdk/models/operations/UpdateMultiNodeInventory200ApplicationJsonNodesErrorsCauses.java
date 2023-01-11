package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("field")
    public String field;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public UpdateMultiNodeInventory200ApplicationJsonNodesErrorsCauses withType(String type) {
        this.type = type;
        return this;
    }
}