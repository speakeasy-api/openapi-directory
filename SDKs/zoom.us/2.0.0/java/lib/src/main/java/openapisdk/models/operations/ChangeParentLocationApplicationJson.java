package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ChangeParentLocationApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_location_id")
    public String parentLocationId;
    public ChangeParentLocationApplicationJson withParentLocationId(String parentLocationId) {
        this.parentLocationId = parentLocationId;
        return this;
    }
}