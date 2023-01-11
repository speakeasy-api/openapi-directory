package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints
 * Specifies contraints to apply to custom object records.
 * 
**/
public class CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create")
    public CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate create;
    public CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraints withCreate(CustomObjectDefinitionUpdateActionRequestRelationshipRecordConstraintsCreate create) {
        this.create = create;
        return this;
    }
}