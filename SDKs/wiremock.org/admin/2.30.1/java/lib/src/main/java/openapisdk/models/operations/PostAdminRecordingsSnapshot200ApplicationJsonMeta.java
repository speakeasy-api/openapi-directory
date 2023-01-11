package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminRecordingsSnapshot200ApplicationJsonMeta {
    @JsonProperty("total")
    public Long total;
    public PostAdminRecordingsSnapshot200ApplicationJsonMeta withTotal(Long total) {
        this.total = total;
        return this;
    }
}