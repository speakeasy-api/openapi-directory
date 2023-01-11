package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NamesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public EntityName[] entities;
    public NamesResponse withEntities(EntityName[] entities) {
        this.entities = entities;
        return this;
    }
}