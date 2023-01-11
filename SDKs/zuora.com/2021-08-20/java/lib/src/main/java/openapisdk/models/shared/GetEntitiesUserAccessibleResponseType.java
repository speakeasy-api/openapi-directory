package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEntitiesUserAccessibleResponseType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entities")
    public GetEntitiesType[] entities;
    public GetEntitiesUserAccessibleResponseType withEntities(GetEntitiesType[] entities) {
        this.entities = entities;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetEntitiesUserAccessibleResponseType withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}