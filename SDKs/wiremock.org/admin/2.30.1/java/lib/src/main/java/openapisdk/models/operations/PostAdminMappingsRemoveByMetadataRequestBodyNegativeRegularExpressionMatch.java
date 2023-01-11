package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch {
    @JsonProperty("doesNotMatch")
    public String doesNotMatch;
    public PostAdminMappingsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch withDoesNotMatch(String doesNotMatch) {
        this.doesNotMatch = doesNotMatch;
        return this;
    }
}