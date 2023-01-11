package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostBillingDocumentFilesDeletionJobRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountIds")
    public String[] accountIds;
    public PostBillingDocumentFilesDeletionJobRequest withAccountIds(String[] accountIds) {
        this.accountIds = accountIds;
        return this;
    }
}