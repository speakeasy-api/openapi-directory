package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsFindByMetadataRequestBodyJsonEquals {
    @JsonProperty("equalToJson")
    public String equalToJson;
    public PostAdminMappingsFindByMetadataRequestBodyJsonEquals withEqualToJson(String equalToJson) {
        this.equalToJson = equalToJson;
        return this;
    }
}