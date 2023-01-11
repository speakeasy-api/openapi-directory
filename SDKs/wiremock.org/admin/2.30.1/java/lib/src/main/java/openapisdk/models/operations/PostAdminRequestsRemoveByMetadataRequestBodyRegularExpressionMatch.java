package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch {
    @JsonProperty("matches")
    public String matches;
    public PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch withMatches(String matches) {
        this.matches = matches;
        return this;
    }
}