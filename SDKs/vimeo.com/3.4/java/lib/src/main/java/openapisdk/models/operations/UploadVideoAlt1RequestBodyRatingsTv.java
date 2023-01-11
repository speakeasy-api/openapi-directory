package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodyRatingsTv {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason")
    public UploadVideoAlt1RequestBodyRatingsTvReasonEnum reason;
    public UploadVideoAlt1RequestBodyRatingsTv withReason(UploadVideoAlt1RequestBodyRatingsTvReasonEnum reason) {
        this.reason = reason;
        return this;
    }
}