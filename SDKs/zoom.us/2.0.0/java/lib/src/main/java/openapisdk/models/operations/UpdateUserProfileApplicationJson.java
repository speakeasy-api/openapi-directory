package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateUserProfileApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public String extensionNumber;
    public UpdateUserProfileApplicationJson withExtensionNumber(String extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public UpdateUserProfileApplicationJson withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}