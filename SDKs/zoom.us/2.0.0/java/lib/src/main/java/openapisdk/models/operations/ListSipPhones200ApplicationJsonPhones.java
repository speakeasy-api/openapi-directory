package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSipPhones200ApplicationJsonPhones {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorization_name")
    public String authorizationName;
    public ListSipPhones200ApplicationJsonPhones withAuthorizationName(String authorizationName) {
        this.authorizationName = authorizationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public ListSipPhones200ApplicationJsonPhones withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListSipPhones200ApplicationJsonPhones withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("password")
    public String password;
    public ListSipPhones200ApplicationJsonPhones withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_server")
    public String proxyServer;
    public ListSipPhones200ApplicationJsonPhones withProxyServer(String proxyServer) {
        this.proxyServer = proxyServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_server2")
    public String proxyServer2;
    public ListSipPhones200ApplicationJsonPhones withProxyServer2(String proxyServer2) {
        this.proxyServer2 = proxyServer2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_server3")
    public String proxyServer3;
    public ListSipPhones200ApplicationJsonPhones withProxyServer3(String proxyServer3) {
        this.proxyServer3 = proxyServer3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("register_server")
    public String registerServer;
    public ListSipPhones200ApplicationJsonPhones withRegisterServer(String registerServer) {
        this.registerServer = registerServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("register_server2")
    public String registerServer2;
    public ListSipPhones200ApplicationJsonPhones withRegisterServer2(String registerServer2) {
        this.registerServer2 = registerServer2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("register_server3")
    public String registerServer3;
    public ListSipPhones200ApplicationJsonPhones withRegisterServer3(String registerServer3) {
        this.registerServer3 = registerServer3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_expire_time")
    public Long registrationExpireTime;
    public ListSipPhones200ApplicationJsonPhones withRegistrationExpireTime(Long registrationExpireTime) {
        this.registrationExpireTime = registrationExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol")
    public ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum transportProtocol;
    public ListSipPhones200ApplicationJsonPhones withTransportProtocol(ListSipPhones200ApplicationJsonPhonesTransportProtocolEnum transportProtocol) {
        this.transportProtocol = transportProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol2")
    public ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum transportProtocol2;
    public ListSipPhones200ApplicationJsonPhones withTransportProtocol2(ListSipPhones200ApplicationJsonPhonesTransportProtocol2Enum transportProtocol2) {
        this.transportProtocol2 = transportProtocol2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol3")
    public ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum transportProtocol3;
    public ListSipPhones200ApplicationJsonPhones withTransportProtocol3(ListSipPhones200ApplicationJsonPhonesTransportProtocol3Enum transportProtocol3) {
        this.transportProtocol3 = transportProtocol3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_email")
    public String userEmail;
    public ListSipPhones200ApplicationJsonPhones withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("user_name")
    public String userName;
    public ListSipPhones200ApplicationJsonPhones withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voice_mail")
    public String voiceMail;
    public ListSipPhones200ApplicationJsonPhones withVoiceMail(String voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}