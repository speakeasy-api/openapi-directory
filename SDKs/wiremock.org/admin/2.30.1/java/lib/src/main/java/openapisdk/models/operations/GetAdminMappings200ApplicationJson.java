package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAdminMappings200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappings")
    public GetAdminMappings200ApplicationJsonMappings[] mappings;
    public GetAdminMappings200ApplicationJson withMappings(GetAdminMappings200ApplicationJsonMappings[] mappings) {
        this.mappings = mappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public GetAdminMappings200ApplicationJsonMeta meta;
    public GetAdminMappings200ApplicationJson withMeta(GetAdminMappings200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}