package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UploadVideoAlt1RequestBodyEmbed {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buttons")
    public UploadVideoAlt1RequestBodyEmbedButtons buttons;
    public UploadVideoAlt1RequestBodyEmbed withButtons(UploadVideoAlt1RequestBodyEmbedButtons buttons) {
        this.buttons = buttons;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public UploadVideoAlt1RequestBodyEmbed withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logos")
    public UploadVideoAlt1RequestBodyEmbedLogos logos;
    public UploadVideoAlt1RequestBodyEmbed withLogos(UploadVideoAlt1RequestBodyEmbedLogos logos) {
        this.logos = logos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("playbar")
    public Boolean playbar;
    public UploadVideoAlt1RequestBodyEmbed withPlaybar(Boolean playbar) {
        this.playbar = playbar;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public UploadVideoAlt1RequestBodyEmbedTitle title;
    public UploadVideoAlt1RequestBodyEmbed withTitle(UploadVideoAlt1RequestBodyEmbedTitle title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("volume")
    public Boolean volume;
    public UploadVideoAlt1RequestBodyEmbed withVolume(Boolean volume) {
        this.volume = volume;
        return this;
    }
}