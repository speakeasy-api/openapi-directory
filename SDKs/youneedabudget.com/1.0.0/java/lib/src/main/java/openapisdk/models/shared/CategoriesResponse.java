package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CategoriesResponse {
    @JsonProperty("data")
    public CategoriesResponseData data;
    public CategoriesResponse withData(CategoriesResponseData data) {
        this.data = data;
        return this;
    }
}