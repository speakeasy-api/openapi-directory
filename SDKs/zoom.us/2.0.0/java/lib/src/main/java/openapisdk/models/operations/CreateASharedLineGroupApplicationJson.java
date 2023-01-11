package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateASharedLineGroupApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateASharedLineGroupApplicationJson withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public CreateASharedLineGroupApplicationJson withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public CreateASharedLineGroupApplicationJson withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public CreateASharedLineGroupApplicationJson withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
}