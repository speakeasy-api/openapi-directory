package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsFindByMetadata200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public PostAdminMappingsFindByMetadata200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}