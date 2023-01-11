package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SaveCategoryResponse {
    @JsonProperty("data")
    public SaveCategoryResponseData data;
    public SaveCategoryResponse withData(SaveCategoryResponseData data) {
        this.data = data;
        return this;
    }
}