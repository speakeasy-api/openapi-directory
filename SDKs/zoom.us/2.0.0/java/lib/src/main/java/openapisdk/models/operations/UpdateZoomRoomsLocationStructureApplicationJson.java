package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateZoomRoomsLocationStructureApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("structures")
    public String[] structures;
    public UpdateZoomRoomsLocationStructureApplicationJson withStructures(String[] structures) {
        this.structures = structures;
        return this;
    }
}