package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostBillingDocumentFilesDeletionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PostBillingDocumentFilesDeletionJobResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PostBillingDocumentFilesDeletionJobResponseStatusEnum status;
    public PostBillingDocumentFilesDeletionJobResponse withStatus(PostBillingDocumentFilesDeletionJobResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostBillingDocumentFilesDeletionJobResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}