package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OnDemandVideoInteractionsPage
 * Information about how the authenticated user can interact with the connection to the video's On Demand page.
**/
public class OnDemandVideoInteractionsPage {
    @JsonProperty("added")
    public Boolean added;
    public OnDemandVideoInteractionsPage withAdded(Boolean added) {
        this.added = added;
        return this;
    }
    @JsonProperty("options")
    public String[] options;
    public OnDemandVideoInteractionsPage withOptions(String[] options) {
        this.options = options;
        return this;
    }
    @JsonProperty("uri")
    public String uri;
    public OnDemandVideoInteractionsPage withUri(String uri) {
        this.uri = uri;
        return this;
    }
}