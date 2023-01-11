package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoriesResponseData {
    @JsonProperty("category_groups")
    public CategoryGroupWithCategories[] categoryGroups;
    public CategoriesResponseData withCategoryGroups(CategoryGroupWithCategories[] categoryGroups) {
        this.categoryGroups = categoryGroups;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public CategoriesResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
}