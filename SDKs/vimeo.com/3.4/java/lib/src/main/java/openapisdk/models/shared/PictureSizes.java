package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PictureSizes {
    @JsonProperty("height")
    public Double height;
    public PictureSizes withHeight(Double height) {
        this.height = height;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public PictureSizes withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link_with_play_button")
    public String linkWithPlayButton;
    public PictureSizes withLinkWithPlayButton(String linkWithPlayButton) {
        this.linkWithPlayButton = linkWithPlayButton;
        return this;
    }
    @JsonProperty("width")
    public Double width;
    public PictureSizes withWidth(Double width) {
        this.width = width;
        return this;
    }
}