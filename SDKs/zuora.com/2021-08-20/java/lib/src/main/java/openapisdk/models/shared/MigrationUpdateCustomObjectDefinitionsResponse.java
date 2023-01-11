package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MigrationUpdateCustomObjectDefinitionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public CustomObjectDefinitionUpdateActionResponse[] actions;
    public MigrationUpdateCustomObjectDefinitionsResponse withActions(CustomObjectDefinitionUpdateActionResponse[] actions) {
        this.actions = actions;
        return this;
    }
}