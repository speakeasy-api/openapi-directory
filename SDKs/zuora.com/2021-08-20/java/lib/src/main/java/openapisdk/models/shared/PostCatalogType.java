package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PostCatalogType {
    @JsonProperty("toEntityIds")
    public String[] toEntityIds;
    public PostCatalogType withToEntityIds(String[] toEntityIds) {
        this.toEntityIds = toEntityIds;
        return this;
    }
}