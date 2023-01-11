package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddARoom201ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AddARoom201ApplicationJson withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public AddARoom201ApplicationJson withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AddARoom201ApplicationJson withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("room_id")
    public String roomId;
    public AddARoom201ApplicationJson withRoomId(String roomId) {
        this.roomId = roomId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public AddARoom201ApplicationJsonTypeEnum type;
    public AddARoom201ApplicationJson withType(AddARoom201ApplicationJsonTypeEnum type) {
        this.type = type;
        return this;
    }
}