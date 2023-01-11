package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationsEmbeddedObject
 * Collection of location objects
**/
public class LocationsEmbeddedObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Location[] data;
    public LocationsEmbeddedObject withData(Location[] data) {
        this.data = data;
        return this;
    }
}