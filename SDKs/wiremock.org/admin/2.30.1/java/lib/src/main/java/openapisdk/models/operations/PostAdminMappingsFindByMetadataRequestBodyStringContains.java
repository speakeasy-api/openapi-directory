package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsFindByMetadataRequestBodyStringContains {
    @JsonProperty("contains")
    public String contains;
    public PostAdminMappingsFindByMetadataRequestBodyStringContains withContains(String contains) {
        this.contains = contains;
        return this;
    }
}