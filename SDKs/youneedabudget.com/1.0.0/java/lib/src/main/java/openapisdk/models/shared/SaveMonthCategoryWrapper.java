package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveMonthCategoryWrapper {
    @JsonProperty("category")
    public SaveMonthCategory category;
    public SaveMonthCategoryWrapper withCategory(SaveMonthCategory category) {
        this.category = category;
        return this;
    }
}