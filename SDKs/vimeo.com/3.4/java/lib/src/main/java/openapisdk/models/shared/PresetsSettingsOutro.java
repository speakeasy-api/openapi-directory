package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PresetsSettingsOutro {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clips")
    public String clips;
    public PresetsSettingsOutro withClips(String clips) {
        this.clips = clips;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("link")
    public PresetsSettingsOutroLink link;
    public PresetsSettingsOutro withLink(PresetsSettingsOutroLink link) {
        this.link = link;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public PresetsSettingsOutro withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("type")
    public PresetsSettingsOutroTypeEnum type;
    public PresetsSettingsOutro withType(PresetsSettingsOutroTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("videos")
    public String videos;
    public PresetsSettingsOutro withVideos(String videos) {
        this.videos = videos;
        return this;
    }
}