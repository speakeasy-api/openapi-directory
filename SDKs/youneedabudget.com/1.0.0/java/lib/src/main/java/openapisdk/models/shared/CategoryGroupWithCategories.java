package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryGroupWithCategories {
    @JsonProperty("categories")
    public Category[] categories;
    public CategoryGroupWithCategories withCategories(Category[] categories) {
        this.categories = categories;
        return this;
    }
    @JsonProperty("deleted")
    public Boolean deleted;
    public CategoryGroupWithCategories withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("hidden")
    public Boolean hidden;
    public CategoryGroupWithCategories withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CategoryGroupWithCategories withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CategoryGroupWithCategories withName(String name) {
        this.name = name;
        return this;
    }
}