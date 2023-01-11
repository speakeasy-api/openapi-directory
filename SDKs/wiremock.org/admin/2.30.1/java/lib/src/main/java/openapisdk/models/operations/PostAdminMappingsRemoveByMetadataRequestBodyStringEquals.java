package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminMappingsRemoveByMetadataRequestBodyStringEquals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseInsensitive")
    public Boolean caseInsensitive;
    public PostAdminMappingsRemoveByMetadataRequestBodyStringEquals withCaseInsensitive(Boolean caseInsensitive) {
        this.caseInsensitive = caseInsensitive;
        return this;
    }
    @JsonProperty("equalTo")
    public Boolean equalTo;
    public PostAdminMappingsRemoveByMetadataRequestBodyStringEquals withEqualTo(Boolean equalTo) {
        this.equalTo = equalTo;
        return this;
    }
}