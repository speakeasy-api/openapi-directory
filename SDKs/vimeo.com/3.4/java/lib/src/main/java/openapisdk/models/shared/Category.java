package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Category {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public Picture icon;
    public Category withIcon(Picture icon) {
        this.icon = icon;
        return this;
    }
    @JsonProperty("last_video_featured_time")
    public String lastVideoFeaturedTime;
    public Category withLastVideoFeaturedTime(String lastVideoFeaturedTime) {
        this.lastVideoFeaturedTime = lastVideoFeaturedTime;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public Category withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public CategoryMetadata metadata;
    public Category withMetadata(CategoryMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Category withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parent")
    public CategoryParent parent;
    public Category withParent(CategoryParent parent) {
        this.parent = parent;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public Category withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Category withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subcategories")
    public CategorySubcategories[] subcategories;
    public Category withSubcategories(CategorySubcategories[] subcategories) {
        this.subcategories = subcategories;
        return this;
    }
    @JsonProperty("top_level")
    public Boolean topLevel;
    public Category withTopLevel(Boolean topLevel) {
        this.topLevel = topLevel;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Category withUri(String uri) {
        this.uri = uri;
        return this;
    }
}