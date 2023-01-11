package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist
 * Auto Receptionist for each site.
**/
public class ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_id")
    public String extensionId;
    public ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist withExtensionId(String extensionId) {
        this.extensionId = extensionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ListPhoneSites200ApplicationJsonSitesMainAutoReceptionist withName(String name) {
        this.name = name;
        return this;
    }
}