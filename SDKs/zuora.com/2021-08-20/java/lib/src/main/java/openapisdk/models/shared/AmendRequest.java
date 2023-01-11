package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AmendRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AmendOptions")
    public AmendRequestAmendOptions amendOptions;
    public AmendRequest withAmendOptions(AmendRequestAmendOptions amendOptions) {
        this.amendOptions = amendOptions;
        return this;
    }
    @JsonProperty("Amendments")
    public Amendment[] amendments;
    public AmendRequest withAmendments(Amendment[] amendments) {
        this.amendments = amendments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PreviewOptions")
    public AmendRequestPreviewOptions previewOptions;
    public AmendRequest withPreviewOptions(AmendRequestPreviewOptions previewOptions) {
        this.previewOptions = previewOptions;
        return this;
    }
}