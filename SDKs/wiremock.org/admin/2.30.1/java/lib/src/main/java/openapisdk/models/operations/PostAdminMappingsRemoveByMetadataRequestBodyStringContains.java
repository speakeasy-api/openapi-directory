package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsRemoveByMetadataRequestBodyStringContains {
    @JsonProperty("contains")
    public String contains;
    public PostAdminMappingsRemoveByMetadataRequestBodyStringContains withContains(String contains) {
        this.contains = contains;
        return this;
    }
}