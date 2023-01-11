package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyRatingsMpaa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public UploadVideoRequestBodyRatingsMpaaReasonEnum reason;
    public UploadVideoRequestBodyRatingsMpaa withReason(UploadVideoRequestBodyRatingsMpaaReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}