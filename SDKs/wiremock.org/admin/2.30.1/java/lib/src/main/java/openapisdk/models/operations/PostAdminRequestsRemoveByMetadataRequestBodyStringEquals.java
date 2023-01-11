package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostAdminRequestsRemoveByMetadataRequestBodyStringEquals {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("caseInsensitive")
    public Boolean caseInsensitive;
    public PostAdminRequestsRemoveByMetadataRequestBodyStringEquals withCaseInsensitive(Boolean caseInsensitive) {
        this.caseInsensitive = caseInsensitive;
        return this;
    }
    @JsonProperty("equalTo")
    public Boolean equalTo;
    public PostAdminRequestsRemoveByMetadataRequestBodyStringEquals withEqualTo(Boolean equalTo) {
        this.equalTo = equalTo;
        return this;
    }
}