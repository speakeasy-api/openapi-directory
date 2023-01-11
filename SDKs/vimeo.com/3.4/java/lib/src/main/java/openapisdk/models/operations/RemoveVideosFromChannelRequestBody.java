package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveVideosFromChannelRequestBody {
    @JsonProperty("video_uri")
    public String videoUri;
    public RemoveVideosFromChannelRequestBody withVideoUri(String videoUri) {
        this.videoUri = videoUri;
        return this;
    }
}