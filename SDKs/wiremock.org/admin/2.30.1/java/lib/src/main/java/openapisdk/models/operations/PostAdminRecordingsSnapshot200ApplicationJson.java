package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRecordingsSnapshot200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mappings")
    public PostAdminRecordingsSnapshot200ApplicationJsonMappings[] mappings;
    public PostAdminRecordingsSnapshot200ApplicationJson withMappings(PostAdminRecordingsSnapshot200ApplicationJsonMappings[] mappings) {
        this.mappings = mappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public PostAdminRecordingsSnapshot200ApplicationJsonMeta meta;
    public PostAdminRecordingsSnapshot200ApplicationJson withMeta(PostAdminRecordingsSnapshot200ApplicationJsonMeta meta) {
        this.meta = meta;
        return this;
    }
}