package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class MicroSecGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entity")
    public Reference entity;
    public MicroSecGroup withEntity(Reference entity) {
        this.entity = entity;
        return this;
    }
}