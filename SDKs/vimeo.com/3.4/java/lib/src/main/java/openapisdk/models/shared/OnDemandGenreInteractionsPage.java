package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandGenreInteractionsPage
 * Interactions for On Demand pages that are in this genre.
**/
public class OnDemandGenreInteractionsPage {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandGenreInteractionsPage withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandGenreInteractionsPage withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandGenreInteractionsPage withUri(String uri) {
        this.uri = uri;
        return this;
    }
}