package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VideoTranscode
 * The transcode information for a video upload.
**/
public class VideoTranscode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public VideoTranscodeStatusEnum status;
    public VideoTranscode withStatus(VideoTranscodeStatusEnum status) {
        this.status = status;
        return this;
    }
}