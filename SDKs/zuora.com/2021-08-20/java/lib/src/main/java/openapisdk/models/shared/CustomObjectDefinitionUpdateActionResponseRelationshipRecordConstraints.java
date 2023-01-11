package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints
 * Specifies contraints to apply to custom object records.
 * 
**/
public class CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create")
    public CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate create;
    public CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraints withCreate(CustomObjectDefinitionUpdateActionResponseRelationshipRecordConstraintsCreate create) {
        this.create = create;
        return this;
    }
}