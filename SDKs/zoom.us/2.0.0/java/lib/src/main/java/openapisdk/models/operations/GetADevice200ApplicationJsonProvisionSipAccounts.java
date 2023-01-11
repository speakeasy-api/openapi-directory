package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetADevice200ApplicationJsonProvisionSipAccounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorization_id")
    public String authorizationId;
    public GetADevice200ApplicationJsonProvisionSipAccounts withAuthorizationId(String authorizationId) {
        this.authorizationId = authorizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_proxy")
    public String outboundProxy;
    public GetADevice200ApplicationJsonProvisionSipAccounts withOutboundProxy(String outboundProxy) {
        this.outboundProxy = outboundProxy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public GetADevice200ApplicationJsonProvisionSipAccounts withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shared_line")
    public GetADevice200ApplicationJsonProvisionSipAccountsSharedLine sharedLine;
    public GetADevice200ApplicationJsonProvisionSipAccounts withSharedLine(GetADevice200ApplicationJsonProvisionSipAccountsSharedLine sharedLine) {
        this.sharedLine = sharedLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_domain")
    public String sipDomain;
    public GetADevice200ApplicationJsonProvisionSipAccounts withSipDomain(String sipDomain) {
        this.sipDomain = sipDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public GetADevice200ApplicationJsonProvisionSipAccounts withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}