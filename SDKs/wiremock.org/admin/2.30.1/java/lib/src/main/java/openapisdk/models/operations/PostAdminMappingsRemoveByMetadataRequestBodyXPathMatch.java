package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch {
    @JsonProperty("matchesXpath")
    public String matchesXpath;
    public PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch withMatchesXpath(String matchesXpath) {
        this.matchesXpath = matchesXpath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("namespaces")
    public java.util.Map<String, Object> namespaces;
    public PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch withNamespaces(java.util.Map<String, Object> namespaces) {
        this.namespaces = namespaces;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valuePattern")
    public java.util.Map<String, Object> valuePattern;
    public PostAdminMappingsRemoveByMetadataRequestBodyXPathMatch withValuePattern(java.util.Map<String, Object> valuePattern) {
        this.valuePattern = valuePattern;
        return this;
    }
}