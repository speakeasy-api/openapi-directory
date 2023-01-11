package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDemandPageVideoTranscode
 * The transcode information for a video upload.
**/
public class OnDemandPageVideoTranscode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OnDemandPageVideoTranscodeStatusEnum status;
    public OnDemandPageVideoTranscode withStatus(OnDemandPageVideoTranscodeStatusEnum status) {
        this.status = status;
        return this;
    }
}