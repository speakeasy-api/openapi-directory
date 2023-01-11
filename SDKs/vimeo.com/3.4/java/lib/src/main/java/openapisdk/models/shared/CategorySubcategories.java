package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategorySubcategories {
    @JsonProperty("link")
    public String link;
    public CategorySubcategories withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CategorySubcategories withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CategorySubcategories withUri(String uri) {
        this.uri = uri;
        return this;
    }
}