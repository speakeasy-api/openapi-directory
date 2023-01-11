package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminMappingsFindByMetadata200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappings")
    public PostAdminMappingsFindByMetadata200ApplicationJsonMappings[] mappings;
    public PostAdminMappingsFindByMetadata200ApplicationJson withMappings(PostAdminMappingsFindByMetadata200ApplicationJsonMappings[] mappings) {
        this.mappings = mappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PostAdminMappingsFindByMetadata200ApplicationJsonMeta meta;
    public PostAdminMappingsFindByMetadata200ApplicationJson withMeta(PostAdminMappingsFindByMetadata200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}