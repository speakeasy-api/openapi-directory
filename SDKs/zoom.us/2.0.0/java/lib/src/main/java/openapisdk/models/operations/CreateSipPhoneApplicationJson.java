package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSipPhoneApplicationJson {
    @JsonProperty("authorization_name")
    public String authorizationName;
    public CreateSipPhoneApplicationJson withAuthorizationName(String authorizationName) {
        this.authorizationName = authorizationName;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public CreateSipPhoneApplicationJson withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public CreateSipPhoneApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("proxy_server")
    public String proxyServer;
    public CreateSipPhoneApplicationJson withProxyServer(String proxyServer) {
        this.proxyServer = proxyServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_server2")
    public String proxyServer2;
    public CreateSipPhoneApplicationJson withProxyServer2(String proxyServer2) {
        this.proxyServer2 = proxyServer2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("proxy_server3")
    public String proxyServer3;
    public CreateSipPhoneApplicationJson withProxyServer3(String proxyServer3) {
        this.proxyServer3 = proxyServer3;
        return this;
    }
    @JsonProperty("register_server")
    public String registerServer;
    public CreateSipPhoneApplicationJson withRegisterServer(String registerServer) {
        this.registerServer = registerServer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("register_server2")
    public String registerServer2;
    public CreateSipPhoneApplicationJson withRegisterServer2(String registerServer2) {
        this.registerServer2 = registerServer2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("register_server3")
    public String registerServer3;
    public CreateSipPhoneApplicationJson withRegisterServer3(String registerServer3) {
        this.registerServer3 = registerServer3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_expire_time")
    public Long registrationExpireTime;
    public CreateSipPhoneApplicationJson withRegistrationExpireTime(Long registrationExpireTime) {
        this.registrationExpireTime = registrationExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol")
    public CreateSipPhoneApplicationJsonTransportProtocolEnum transportProtocol;
    public CreateSipPhoneApplicationJson withTransportProtocol(CreateSipPhoneApplicationJsonTransportProtocolEnum transportProtocol) {
        this.transportProtocol = transportProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol2")
    public CreateSipPhoneApplicationJsonTransportProtocol2Enum transportProtocol2;
    public CreateSipPhoneApplicationJson withTransportProtocol2(CreateSipPhoneApplicationJsonTransportProtocol2Enum transportProtocol2) {
        this.transportProtocol2 = transportProtocol2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol3")
    public CreateSipPhoneApplicationJsonTransportProtocol3Enum transportProtocol3;
    public CreateSipPhoneApplicationJson withTransportProtocol3(CreateSipPhoneApplicationJsonTransportProtocol3Enum transportProtocol3) {
        this.transportProtocol3 = transportProtocol3;
        return this;
    }
    @JsonProperty("user_email")
    public String userEmail;
    public CreateSipPhoneApplicationJson withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonProperty("user_name")
    public String userName;
    public CreateSipPhoneApplicationJson withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonProperty("voice_mail")
    public String voiceMail;
    public CreateSipPhoneApplicationJson withVoiceMail(String voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}