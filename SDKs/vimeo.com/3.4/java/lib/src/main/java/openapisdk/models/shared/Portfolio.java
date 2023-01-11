package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Portfolio {
    @JsonProperty("created_time")
    public String createdTime;
    public Portfolio withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Portfolio withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("link")
    public String link;
    public Portfolio withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("metadata")
    public PortfolioMetadata metadata;
    public Portfolio withMetadata(PortfolioMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonProperty("modified_time")
    public String modifiedTime;
    public Portfolio withModifiedTime(String modifiedTime) {
        this.modifiedTime = modifiedTime;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Portfolio withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sort")
    public PortfolioSortEnum sort;
    public Portfolio withSort(PortfolioSortEnum sort) {
        this.sort = sort;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public Portfolio withUri(String uri) {
        this.uri = uri;
        return this;
    }
}