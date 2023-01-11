package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodyRatingsMpaa {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum reason;
    public UploadVideoAlt1RequestBodyRatingsMpaa withReason(UploadVideoAlt1RequestBodyRatingsMpaaReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}