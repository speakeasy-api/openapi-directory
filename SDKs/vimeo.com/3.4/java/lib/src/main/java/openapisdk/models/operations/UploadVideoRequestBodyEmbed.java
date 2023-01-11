package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoRequestBodyEmbed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buttons")
    public UploadVideoRequestBodyEmbedButtons buttons;
    public UploadVideoRequestBodyEmbed withButtons(UploadVideoRequestBodyEmbedButtons buttons) {
        this.buttons = buttons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public UploadVideoRequestBodyEmbed withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logos")
    public UploadVideoRequestBodyEmbedLogos logos;
    public UploadVideoRequestBodyEmbed withLogos(UploadVideoRequestBodyEmbedLogos logos) {
        this.logos = logos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playbar")
    public Boolean playbar;
    public UploadVideoRequestBodyEmbed withPlaybar(Boolean playbar) {
        this.playbar = playbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public UploadVideoRequestBodyEmbedTitle title;
    public UploadVideoRequestBodyEmbed withTitle(UploadVideoRequestBodyEmbedTitle title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Boolean volume;
    public UploadVideoRequestBodyEmbed withVolume(Boolean volume) {
        this.volume = volume;
        return this;
    }
}