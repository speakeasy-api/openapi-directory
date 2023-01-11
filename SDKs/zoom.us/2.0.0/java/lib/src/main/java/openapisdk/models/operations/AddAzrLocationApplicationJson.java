package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddAzrLocationApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AddAzrLocationApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_location_id")
    public String parentLocationId;
    public AddAzrLocationApplicationJson withParentLocationId(String parentLocationId) {
        this.parentLocationId = parentLocationId;
        return this;
    }
}