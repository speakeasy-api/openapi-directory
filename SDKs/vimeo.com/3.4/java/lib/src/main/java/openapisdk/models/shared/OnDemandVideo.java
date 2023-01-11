package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandVideo {
    @JsonProperty("buy")
    public OnDemandVideoBuy buy;
    public OnDemandVideo withBuy(OnDemandVideoBuy buy) {
        this.buy = buy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public OnDemandVideo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duration")
    public String duration;
    public OnDemandVideo withDuration(String duration) {
        this.duration = duration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("episode")
    public Double episode;
    public OnDemandVideo withEpisode(Double episode) {
        this.episode = episode;
        return this;
    }
    @JsonProperty("interactions")
    public OnDemandVideoInteractions interactions;
    public OnDemandVideo withInteractions(OnDemandVideoInteractions interactions) {
        this.interactions = interactions;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandVideo withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandVideoMetadata metadata;
    public OnDemandVideo withMetadata(OnDemandVideoMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public OnDemandVideo withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("options")
    public String[] options;
    public OnDemandVideo withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pictures")
    public Picture pictures;
    public OnDemandVideo withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("play_progress")
    public Double playProgress;
    public OnDemandVideo withPlayProgress(Double playProgress) {
        this.playProgress = playProgress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Double position;
    public OnDemandVideo withPosition(Double position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_date")
    public String releaseDate;
    public OnDemandVideo withReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
        return this;
    }
    @JsonProperty("release_year")
    public Double releaseYear;
    public OnDemandVideo withReleaseYear(Double releaseYear) {
        this.releaseYear = releaseYear;
        return this;
    }
    @JsonProperty("rent")
    public OnDemandVideoRent rent;
    public OnDemandVideo withRent(OnDemandVideoRent rent) {
        this.rent = rent;
        return this;
    }
    @JsonProperty("type")
    public OnDemandVideoTypeEnum type;
    public OnDemandVideo withType(OnDemandVideoTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandVideo withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user")
    public User user;
    public OnDemandVideo withUser(User user) {
        this.user = user;
        return this;
    }
}