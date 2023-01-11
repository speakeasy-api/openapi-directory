package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch {
    @JsonProperty("doesNotMatch")
    public String doesNotMatch;
    public PostAdminMappingsFindByMetadataRequestBodyNegativeRegularExpressionMatch withDoesNotMatch(String doesNotMatch) {
        this.doesNotMatch = doesNotMatch;
        return this;
    }
}