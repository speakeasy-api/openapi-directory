package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyRatingsTv {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public UploadVideoRequestBodyRatingsTvReasonEnum reason;
    public UploadVideoRequestBodyRatingsTv withReason(UploadVideoRequestBodyRatingsTvReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}