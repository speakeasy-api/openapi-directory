package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveCategoryResponseData {
    @JsonProperty("category")
    public Category category;
    public SaveCategoryResponseData withCategory(Category category) {
        this.category = category;
        return this;
    }
    @JsonProperty("server_knowledge")
    public Long serverKnowledge;
    public SaveCategoryResponseData withServerKnowledge(Long serverKnowledge) {
        this.serverKnowledge = serverKnowledge;
        return this;
    }
}