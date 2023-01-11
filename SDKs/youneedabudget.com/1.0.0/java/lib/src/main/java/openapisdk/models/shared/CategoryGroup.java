package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryGroup {
    @JsonProperty("deleted")
    public Boolean deleted;
    public CategoryGroup withDeleted(Boolean deleted) {
        this.deleted = deleted;
        return this;
    }
    @JsonProperty("hidden")
    public Boolean hidden;
    public CategoryGroup withHidden(Boolean hidden) {
        this.hidden = hidden;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public CategoryGroup withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CategoryGroup withName(String name) {
        this.name = name;
        return this;
    }
}