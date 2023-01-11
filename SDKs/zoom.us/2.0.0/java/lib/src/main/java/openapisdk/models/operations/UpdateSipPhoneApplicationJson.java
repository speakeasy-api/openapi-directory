package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSipPhoneApplicationJson {
    @JsonProperty("authorization_name")
    public String authorizationName;
    public UpdateSipPhoneApplicationJson withAuthorizationName(String authorizationName) {
        this.authorizationName = authorizationName;
        return this;
    }
    @JsonProperty("domain")
    public String domain;
    public UpdateSipPhoneApplicationJson withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public UpdateSipPhoneApplicationJson withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("proxy_server")
    public String proxyServer;
    public UpdateSipPhoneApplicationJson withProxyServer(String proxyServer) {
        this.proxyServer = proxyServer;
        return this;
    }
    @JsonProperty("proxy_server2")
    public String proxyServer2;
    public UpdateSipPhoneApplicationJson withProxyServer2(String proxyServer2) {
        this.proxyServer2 = proxyServer2;
        return this;
    }
    @JsonProperty("proxy_server3")
    public String proxyServer3;
    public UpdateSipPhoneApplicationJson withProxyServer3(String proxyServer3) {
        this.proxyServer3 = proxyServer3;
        return this;
    }
    @JsonProperty("register_server")
    public String registerServer;
    public UpdateSipPhoneApplicationJson withRegisterServer(String registerServer) {
        this.registerServer = registerServer;
        return this;
    }
    @JsonProperty("register_server2")
    public String registerServer2;
    public UpdateSipPhoneApplicationJson withRegisterServer2(String registerServer2) {
        this.registerServer2 = registerServer2;
        return this;
    }
    @JsonProperty("register_server3")
    public String registerServer3;
    public UpdateSipPhoneApplicationJson withRegisterServer3(String registerServer3) {
        this.registerServer3 = registerServer3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registration_expire_time")
    public Long registrationExpireTime;
    public UpdateSipPhoneApplicationJson withRegistrationExpireTime(Long registrationExpireTime) {
        this.registrationExpireTime = registrationExpireTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol")
    public UpdateSipPhoneApplicationJsonTransportProtocolEnum transportProtocol;
    public UpdateSipPhoneApplicationJson withTransportProtocol(UpdateSipPhoneApplicationJsonTransportProtocolEnum transportProtocol) {
        this.transportProtocol = transportProtocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol2")
    public UpdateSipPhoneApplicationJsonTransportProtocol2Enum transportProtocol2;
    public UpdateSipPhoneApplicationJson withTransportProtocol2(UpdateSipPhoneApplicationJsonTransportProtocol2Enum transportProtocol2) {
        this.transportProtocol2 = transportProtocol2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transport_protocol3")
    public UpdateSipPhoneApplicationJsonTransportProtocol3Enum transportProtocol3;
    public UpdateSipPhoneApplicationJson withTransportProtocol3(UpdateSipPhoneApplicationJsonTransportProtocol3Enum transportProtocol3) {
        this.transportProtocol3 = transportProtocol3;
        return this;
    }
    @JsonProperty("user_name")
    public String userName;
    public UpdateSipPhoneApplicationJson withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonProperty("voice_mail")
    public String voiceMail;
    public UpdateSipPhoneApplicationJson withVoiceMail(String voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}