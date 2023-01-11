package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Album {
    @JsonProperty("allow_continuous_play")
    public Boolean allowContinuousPlay;
    public Album withAllowContinuousPlay(Boolean allowContinuousPlay) {
        this.allowContinuousPlay = allowContinuousPlay;
        return this;
    }
    @JsonProperty("allow_downloads")
    public Boolean allowDownloads;
    public Album withAllowDownloads(Boolean allowDownloads) {
        this.allowDownloads = allowDownloads;
        return this;
    }
    @JsonProperty("allow_share")
    public Boolean allowShare;
    public Album withAllowShare(Boolean allowShare) {
        this.allowShare = allowShare;
        return this;
    }
    @JsonProperty("brand_color")
    public String brandColor;
    public Album withBrandColor(String brandColor) {
        this.brandColor = brandColor;
        return this;
    }
    @JsonProperty("created_time")
    public String createdTime;
    public Album withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("custom_logo")
    public AlbumPicture customLogo;
    public Album withCustomLogo(AlbumPicture customLogo) {
        this.customLogo = customLogo;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Album withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public Album withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("duration")
    public Double duration;
    public Album withDuration(Double duration) {
        this.duration = duration;
        return this;
    }
    @JsonProperty("embed")
    public AlbumEmbed embed;
    public Album withEmbed(AlbumEmbed embed) {
        this.embed = embed;
        return this;
    }
    @JsonProperty("embed_brand_color")
    public Boolean embedBrandColor;
    public Album withEmbedBrandColor(Boolean embedBrandColor) {
        this.embedBrandColor = embedBrandColor;
        return this;
    }
    @JsonProperty("embed_custom_logo")
    public Boolean embedCustomLogo;
    public Album withEmbedCustomLogo(Boolean embedCustomLogo) {
        this.embedCustomLogo = embedCustomLogo;
        return this;
    }
    @JsonProperty("hide_nav")
    public Boolean hideNav;
    public Album withHideNav(Boolean hideNav) {
        this.hideNav = hideNav;
        return this;
    }
    @JsonProperty("hide_vimeo_logo")
    public Boolean hideVimeoLogo;
    public Album withHideVimeoLogo(Boolean hideVimeoLogo) {
        this.hideVimeoLogo = hideVimeoLogo;
        return this;
    }
    @JsonProperty("layout")
    public AlbumLayoutEnum layout;
    public Album withLayout(AlbumLayoutEnum layout) {
        this.layout = layout;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public Album withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public AlbumMetadata metadata;
    public Album withMetadata(AlbumMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public Album withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Album withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("pictures")
    public Picture pictures;
    public Album withPictures(Picture pictures) {
        this.pictures = pictures;
        return this;
    }
    @JsonProperty("privacy")
    public AlbumPrivacy privacy;
    public Album withPrivacy(AlbumPrivacy privacy) {
        this.privacy = privacy;
        return this;
    }
    @JsonProperty("resource_key")
    public String resourceKey;
    public Album withResourceKey(String resourceKey) {
        this.resourceKey = resourceKey;
        return this;
    }
    @JsonProperty("review_mode")
    public Boolean reviewMode;
    public Album withReviewMode(Boolean reviewMode) {
        this.reviewMode = reviewMode;
        return this;
    }
    @JsonProperty("sort")
    public AlbumSortEnum sort;
    public Album withSort(AlbumSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @JsonProperty("theme")
    public AlbumThemeEnum theme;
    public Album withTheme(AlbumThemeEnum theme) {
        this.theme = theme;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Album withUri(String uri) {
        this.uri = uri;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public Album withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonProperty("use_custom_domain")
    public Boolean useCustomDomain;
    public Album withUseCustomDomain(Boolean useCustomDomain) {
        this.useCustomDomain = useCustomDomain;
        return this;
    }
    @JsonProperty("user")
    public User user;
    public Album withUser(User user) {
        this.user = user;
        return this;
    }
    @JsonProperty("web_brand_color")
    public Boolean webBrandColor;
    public Album withWebBrandColor(Boolean webBrandColor) {
        this.webBrandColor = webBrandColor;
        return this;
    }
    @JsonProperty("web_custom_logo")
    public Boolean webCustomLogo;
    public Album withWebCustomLogo(Boolean webCustomLogo) {
        this.webCustomLogo = webCustomLogo;
        return this;
    }
}