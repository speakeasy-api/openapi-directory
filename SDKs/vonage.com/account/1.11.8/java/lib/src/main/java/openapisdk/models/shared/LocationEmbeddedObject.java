package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationEmbeddedObject
 * Location object
**/
public class LocationEmbeddedObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Location data;
    public LocationEmbeddedObject withData(Location data) {
        this.data = data;
        return this;
    }
}