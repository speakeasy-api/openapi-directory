package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SuggestVideoCategoryRequestBody {
    @JsonProperty("category")
    public String[] category;
    public SuggestVideoCategoryRequestBody withCategory(String[] category) {
        this.category = category;
        return this;
    }
}