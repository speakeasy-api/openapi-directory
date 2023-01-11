package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforceValidMapping")
    public Boolean enforceValidMapping;
    public PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate withEnforceValidMapping(Boolean enforceValidMapping) {
        this.enforceValidMapping = enforceValidMapping;
        return this;
    }
}