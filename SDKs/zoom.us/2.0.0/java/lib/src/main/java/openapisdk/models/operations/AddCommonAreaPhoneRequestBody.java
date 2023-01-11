package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddCommonAreaPhoneRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AddCommonAreaPhoneRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("display_name")
    public String displayName;
    public AddCommonAreaPhoneRequestBody withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("extension_number")
    public Long extensionNumber;
    public AddCommonAreaPhoneRequestBody withExtensionNumber(Long extensionNumber) {
        this.extensionNumber = extensionNumber;
        return this;
    }
    @JsonProperty("mac_address")
    public String macAddress;
    public AddCommonAreaPhoneRequestBody withMacAddress(String macAddress) {
        this.macAddress = macAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public AddCommonAreaPhoneRequestBody withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site_id")
    public String siteId;
    public AddCommonAreaPhoneRequestBody withSiteId(String siteId) {
        this.siteId = siteId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("time_zone")
    public String timeZone;
    public AddCommonAreaPhoneRequestBody withTimeZone(String timeZone) {
        this.timeZone = timeZone;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AddCommonAreaPhoneRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}