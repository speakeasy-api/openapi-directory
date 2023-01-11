package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorization_id")
    public String authorizationId;
    public GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts withAuthorizationId(String authorizationId) {
        this.authorizationId = authorizationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_proxy")
    public String outboundProxy;
    public GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts withOutboundProxy(String outboundProxy) {
        this.outboundProxy = outboundProxy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sip_domain")
    public String sipDomain;
    public GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts withSipDomain(String sipDomain) {
        this.sipDomain = sipDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public GetACommonAreaPhone200ApplicationJsonProvisionSipAccounts withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}