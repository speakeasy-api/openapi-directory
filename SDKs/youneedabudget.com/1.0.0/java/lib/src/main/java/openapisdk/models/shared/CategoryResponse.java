package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoryResponse {
    @JsonProperty("data")
    public CategoryResponseData data;
    public CategoryResponse withData(CategoryResponseData data) {
        this.data = data;
        return this;
    }
}