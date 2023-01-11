package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddARoomApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public AddARoomApplicationJson withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AddARoomApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public AddARoomApplicationJsonTypeEnum type;
    public AddARoomApplicationJson withType(AddARoomApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
}