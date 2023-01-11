package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnDemandPage {
    @JsonProperty("background")
    public OnDemandPagePicture background;
    public OnDemandPage withBackground(OnDemandPagePicture background) {
        this.background = background;
        return this;
    }
    @JsonProperty("colors")
    public OnDemandPageColors colors;
    public OnDemandPage withColors(OnDemandPageColors colors) {
        this.colors = colors;
        return this;
    }
    @JsonProperty("content_rating")
    public String[] contentRating;
    public OnDemandPage withContentRating(String[] contentRating) {
        this.contentRating = contentRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_time")
    public String createdTime;
    public OnDemandPage withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public OnDemandPage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("domain_link")
    public String domainLink;
    public OnDemandPage withDomainLink(String domainLink) {
        this.domainLink = domainLink;
        return this;
    }
    @JsonProperty("episodes")
    public OnDemandPageEpisodes episodes;
    public OnDemandPage withEpisodes(OnDemandPageEpisodes episodes) {
        this.episodes = episodes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("film")
    public Video film;
    public OnDemandPage withFilm(Video film) {
        this.film = film;
        return this;
    }
    @JsonProperty("genres")
    public OnDemandGenre[] genres;
    public OnDemandPage withGenres(OnDemandGenre[] genres) {
        this.genres = genres;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public OnDemandPage withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public OnDemandPageMetadata metadata;
    public OnDemandPage withMetadata(OnDemandPageMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified_time")
    public String modifiedTime;
    public OnDemandPage withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public OnDemandPage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public OnDemandPagePicture pictures;
    public OnDemandPage withPictures(OnDemandPagePicture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("preorder")
    public OnDemandPagePreorder preorder;
    public OnDemandPage withPreorder(OnDemandPagePreorder preorder) {
        this.preorder = preorder;
        return this;
    }
    @JsonProperty("published")
    public OnDemandPagePublished published;
    public OnDemandPage withPublished(OnDemandPagePublished published) {
        this.published = published;
        return this;
    }
    @JsonProperty("rating")
    public Double rating;
    public OnDemandPage withRating(Double rating) {
        this.rating = rating;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public OnDemandPage withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sku")
    public String sku;
    public OnDemandPage withSku(String sku) {
        this.sku = sku;
        return this;
    }
    @JsonProperty("subscription")
    public OnDemandPageSubscription subscription;
    public OnDemandPage withSubscription(OnDemandPageSubscription subscription) {
        this.subscription = subscription;
        return this;
    }
    @JsonProperty("theme")
    public String theme;
    public OnDemandPage withTheme(String theme) {
        this.theme = theme;
        return this;
    }
    @JsonProperty("thumbnail")
    public OnDemandPagePicture thumbnail;
    public OnDemandPage withThumbnail(OnDemandPagePicture thumbnail) {
        this.thumbnail = thumbnail;
        return this;
    }
    @JsonProperty("trailer")
    public OnDemandPageVideo trailer;
    public OnDemandPage withTrailer(OnDemandPageVideo trailer) {
        this.trailer = trailer;
        return this;
    }
    @JsonProperty("type")
    public OnDemandPageTypeEnum type;
    public OnDemandPage withType(OnDemandPageTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandPage withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("user")
    public OnDemandPageUser user;
    public OnDemandPage withUser(OnDemandPageUser user) {
        this.user = user;
        return this;
    }
}