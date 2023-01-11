package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MigrationUpdateCustomObjectDefinitionsRequest {
    @JsonProperty("actions")
    public CustomObjectDefinitionUpdateActionRequest[] actions;
    public MigrationUpdateCustomObjectDefinitionsRequest withActions(CustomObjectDefinitionUpdateActionRequest[] actions) {
        this.actions = actions;
        return this;
    }
}