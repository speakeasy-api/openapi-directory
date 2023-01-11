package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PvExtendedMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("json")
    public String json;
    public PvExtendedMetadata withJson(String json) {
        this.json = json;
        return this;
    }
}