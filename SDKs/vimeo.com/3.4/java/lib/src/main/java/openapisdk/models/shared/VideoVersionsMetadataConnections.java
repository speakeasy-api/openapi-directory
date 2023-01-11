package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class VideoVersionsMetadataConnections {
    @JsonProperty("video")
    public VideoVersionsMetadataConnectionsVideo video;
    public VideoVersionsMetadataConnections withVideo(VideoVersionsMetadataConnectionsVideo video) {
        this.video = video;
        return this;
    }
}