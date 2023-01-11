package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryParent
 * The container of this category's parent category, if the current category is a subcategory.
**/
public class CategoryParent {
    @JsonProperty("link")
    public String link;
    public CategoryParent withLink(String link) {
        this.link = link;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CategoryParent withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CategoryParent withUri(String uri) {
        this.uri = uri;
        return this;
    }
}