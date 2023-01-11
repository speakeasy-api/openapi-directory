package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReplaceVideosInAlbumRequestBody {
    @JsonProperty("videos")
    public String videos;
    public ReplaceVideosInAlbumRequestBody withVideos(String videos) {
        this.videos = videos;
        return this;
    }
}