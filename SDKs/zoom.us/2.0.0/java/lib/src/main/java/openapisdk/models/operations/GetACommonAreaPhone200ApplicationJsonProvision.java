package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetACommonAreaPhone200ApplicationJsonProvision
 * Provisioning information of the common area phone.
**/
public class GetACommonAreaPhone200ApplicationJsonProvision {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_accounts")
    public GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts[] sipAccounts;
    public GetACommonAreaPhone200ApplicationJsonProvision withSipAccounts(GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts[] sipAccounts) {
        this.sipAccounts = sipAccounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum type;
    public GetACommonAreaPhone200ApplicationJsonProvision withType(GetACommonAreaPhone200ApplicationJsonProvisionTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetACommonAreaPhone200ApplicationJsonProvision withUrl(String url) {
        this.url = url;
        return this;
    }
}