package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals {
    @JsonProperty("equalToJson")
    public String equalToJson;
    public PostAdminRequestsRemoveByMetadataRequestBodyJsonEquals withEqualToJson(String equalToJson) {
        this.equalToJson = equalToJson;
        return this;
    }
}