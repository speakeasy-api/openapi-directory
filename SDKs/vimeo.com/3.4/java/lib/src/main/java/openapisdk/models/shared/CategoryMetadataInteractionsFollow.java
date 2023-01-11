package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CategoryMetadataInteractionsFollow
 * An action indicating if the authenticated user has followed this category.
**/
public class CategoryMetadataInteractionsFollow {
    @JsonProperty("added")
    public Boolean added;
    public CategoryMetadataInteractionsFollow withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("added_time")
    public String addedTime;
    public CategoryMetadataInteractionsFollow withAddedTime(String addedTime) {
        this.addedTime = addedTime;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public CategoryMetadataInteractionsFollow withUri(String uri) {
        this.uri = uri;
        return this;
    }
}