package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints
 * Specifies contraints to apply to custom object records.
 * 
**/
public class PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create")
    public PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate create;
    public PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraints withCreate(PostCustomObjectDefinitionsRequestDefinitionRelationshipsRecordConstraintsCreate create) {
        this.create = create;
        return this;
    }
}