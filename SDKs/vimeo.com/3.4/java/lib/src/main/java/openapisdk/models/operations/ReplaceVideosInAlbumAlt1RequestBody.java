package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReplaceVideosInAlbumAlt1RequestBody {
    @JsonProperty("videos")
    public String videos;
    public ReplaceVideosInAlbumAlt1RequestBody withVideos(String videos) {
        this.videos = videos;
        return this;
    }
}