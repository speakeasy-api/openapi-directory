package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch {
    @JsonProperty("matches")
    public String matches;
    public PostAdminMappingsRemoveByMetadataRequestBodyRegularExpressionMatch withMatches(String matches) {
        this.matches = matches;
        return this;
    }
}