package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals {
    @JsonProperty("equalToJson")
    public String equalToJson;
    public PostAdminMappingsRemoveByMetadataRequestBodyJsonEquals withEqualToJson(String equalToJson) {
        this.equalToJson = equalToJson;
        return this;
    }
}