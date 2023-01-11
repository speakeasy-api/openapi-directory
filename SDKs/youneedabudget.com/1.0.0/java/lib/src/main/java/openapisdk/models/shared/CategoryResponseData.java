package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResponseData {
    @JsonProperty("category")
    public Category category;
    public CategoryResponseData withCategory(Category category) {
        this.category = category;
        return this;
    }
}