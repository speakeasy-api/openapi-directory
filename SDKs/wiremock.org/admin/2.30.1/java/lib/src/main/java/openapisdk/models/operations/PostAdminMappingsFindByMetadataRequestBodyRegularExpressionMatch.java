package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch {
    @JsonProperty("matches")
    public String matches;
    public PostAdminMappingsFindByMetadataRequestBodyRegularExpressionMatch withMatches(String matches) {
        this.matches = matches;
        return this;
    }
}