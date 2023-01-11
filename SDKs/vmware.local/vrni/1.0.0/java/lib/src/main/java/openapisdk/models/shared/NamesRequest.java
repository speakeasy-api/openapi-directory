package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NamesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public NameRequestParam[] entities;
    public NamesRequest withEntities(NameRequestParam[] entities) {
        this.entities = entities;
        return this;
    }
}