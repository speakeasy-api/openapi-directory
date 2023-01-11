package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddAzrLocation200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AddAzrLocation200ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AddAzrLocation200ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_location_id")
    public String parentLocationId;
    public AddAzrLocation200ApplicationJson withParentLocationId(String parentLocationId) {
        this.parentLocationId = parentLocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AddAzrLocation200ApplicationJsonTypeEnum type;
    public AddAzrLocation200ApplicationJson withType(AddAzrLocation200ApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
}