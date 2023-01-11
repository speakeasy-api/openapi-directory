package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreArrayOrder")
    public Boolean ignoreArrayOrder;
    public PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch withIgnoreArrayOrder(Boolean ignoreArrayOrder) {
        this.ignoreArrayOrder = ignoreArrayOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ignoreExtraElements")
    public Boolean ignoreExtraElements;
    public PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch withIgnoreExtraElements(Boolean ignoreExtraElements) {
        this.ignoreExtraElements = ignoreExtraElements;
        return this;
    }
    @JsonProperty("matchesJsonPath")
    public String matchesJsonPath;
    public PostAdminMappingsFindByMetadataRequestBodyJsonPathMatch withMatchesJsonPath(String matchesJsonPath) {
        this.matchesJsonPath = matchesJsonPath;
        return this;
    }
}