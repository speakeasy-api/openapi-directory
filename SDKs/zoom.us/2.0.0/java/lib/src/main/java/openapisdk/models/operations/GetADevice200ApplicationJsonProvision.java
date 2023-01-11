package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetADevice200ApplicationJsonProvision
 * Provisioning information of a device.
**/
public class GetADevice200ApplicationJsonProvision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_accounts")
    public GetADevice200ApplicationJsonProvisionSipAccounts[] sipAccounts;
    public GetADevice200ApplicationJsonProvision withSipAccounts(GetADevice200ApplicationJsonProvisionSipAccounts[] sipAccounts) {
        this.sipAccounts = sipAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetADevice200ApplicationJsonProvisionTypeEnum type;
    public GetADevice200ApplicationJsonProvision withType(GetADevice200ApplicationJsonProvisionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetADevice200ApplicationJsonProvision withUrl(String url) {
        this.url = url;
        return this;
    }
}