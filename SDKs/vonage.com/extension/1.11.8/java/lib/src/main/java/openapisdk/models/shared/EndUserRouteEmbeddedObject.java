package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EndUserRouteEmbeddedObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public EndUserRoute data;
    public EndUserRouteEmbeddedObject withData(EndUserRoute data) {
        this.data = data;
        return this;
    }
}