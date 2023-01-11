package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetAdminMappings200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public GetAdminMappings200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}