package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostBillingPreviewRun200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPreviewRunId")
    public String billingPreviewRunId;
    public PostBillingPreviewRun200ApplicationJson withBillingPreviewRunId(String billingPreviewRunId) {
        this.billingPreviewRunId = billingPreviewRunId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public PostBillingPreviewRun200ApplicationJson withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}