package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBillingDocumentFilesDeletionJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public GetBillingDocumentFilesDeletionJobResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetBillingDocumentFilesDeletionJobResponseStatusEnum status;
    public GetBillingDocumentFilesDeletionJobResponse withStatus(GetBillingDocumentFilesDeletionJobResponseStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public GetBillingDocumentFilesDeletionJobResponse withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}