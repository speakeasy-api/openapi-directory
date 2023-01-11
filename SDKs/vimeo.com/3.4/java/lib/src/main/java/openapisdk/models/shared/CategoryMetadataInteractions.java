package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadataInteractions
 * The permissible actions related to the category.
**/
public class CategoryMetadataInteractions {
    @JsonProperty("follow")
    public CategoryMetadataInteractionsFollow follow;
    public CategoryMetadataInteractions withFollow(CategoryMetadataInteractionsFollow follow) {
        this.follow = follow;
        return this;
    }
}