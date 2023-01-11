package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateCategoryRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryName")
    public String categoryName;
    public UpdateCategoryRequest withCategoryName(String categoryName) {
        this.categoryName = categoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highLevelCategoryName")
    public String highLevelCategoryName;
    public UpdateCategoryRequest withHighLevelCategoryName(String highLevelCategoryName) {
        this.highLevelCategoryName = highLevelCategoryName;
        return this;
    }
    @JsonProperty("id")
    public Long id;
    public UpdateCategoryRequest withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("source")
    public UpdateCategoryRequestSourceEnum source;
    public UpdateCategoryRequest withSource(UpdateCategoryRequestSourceEnum source) {
        this.source = source;
        return this;
    }
}