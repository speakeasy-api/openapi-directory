package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsStop200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappings")
    public PostAdminRecordingsStop200ApplicationJsonMappings[] mappings;
    public PostAdminRecordingsStop200ApplicationJson withMappings(PostAdminRecordingsStop200ApplicationJsonMappings[] mappings) {
        this.mappings = mappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PostAdminRecordingsStop200ApplicationJsonMeta meta;
    public PostAdminRecordingsStop200ApplicationJson withMeta(PostAdminRecordingsStop200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}