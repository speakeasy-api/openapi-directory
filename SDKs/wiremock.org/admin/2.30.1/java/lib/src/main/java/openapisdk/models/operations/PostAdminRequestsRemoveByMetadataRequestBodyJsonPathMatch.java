package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreArrayOrder")
    public Boolean ignoreArrayOrder;
    public PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch withIgnoreArrayOrder(Boolean ignoreArrayOrder) {
        this.ignoreArrayOrder = ignoreArrayOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreExtraElements")
    public Boolean ignoreExtraElements;
    public PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch withIgnoreExtraElements(Boolean ignoreExtraElements) {
        this.ignoreExtraElements = ignoreExtraElements;
        return this;
    }
    @JsonProperty("matchesJsonPath")
    public String matchesJsonPath;
    public PostAdminRequestsRemoveByMetadataRequestBodyJsonPathMatch withMatchesJsonPath(String matchesJsonPath) {
        this.matchesJsonPath = matchesJsonPath;
        return this;
    }
}