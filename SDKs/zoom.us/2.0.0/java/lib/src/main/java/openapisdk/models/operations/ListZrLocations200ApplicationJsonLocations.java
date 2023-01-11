package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListZrLocations200ApplicationJsonLocations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListZrLocations200ApplicationJsonLocations withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListZrLocations200ApplicationJsonLocations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_location_id")
    public String parentLocationId;
    public ListZrLocations200ApplicationJsonLocations withParentLocationId(String parentLocationId) {
        this.parentLocationId = parentLocationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ListZrLocations200ApplicationJsonLocationsTypeEnum type;
    public ListZrLocations200ApplicationJsonLocations withType(ListZrLocations200ApplicationJsonLocationsTypeEnum type) {
        this.type = type;
        return this;
    }
}