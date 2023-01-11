package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipPhoneMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=authorization_name")
    public String authorizationName;
    public UpdateSipPhoneMultipartFormData withAuthorizationName(String authorizationName) {
        this.authorizationName = authorizationName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=domain")
    public String domain;
    public UpdateSipPhoneMultipartFormData withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public UpdateSipPhoneMultipartFormData withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=proxy_server")
    public String proxyServer;
    public UpdateSipPhoneMultipartFormData withProxyServer(String proxyServer) {
        this.proxyServer = proxyServer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=proxy_server2")
    public String proxyServer2;
    public UpdateSipPhoneMultipartFormData withProxyServer2(String proxyServer2) {
        this.proxyServer2 = proxyServer2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=proxy_server3")
    public String proxyServer3;
    public UpdateSipPhoneMultipartFormData withProxyServer3(String proxyServer3) {
        this.proxyServer3 = proxyServer3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=register_server")
    public String registerServer;
    public UpdateSipPhoneMultipartFormData withRegisterServer(String registerServer) {
        this.registerServer = registerServer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=register_server2")
    public String registerServer2;
    public UpdateSipPhoneMultipartFormData withRegisterServer2(String registerServer2) {
        this.registerServer2 = registerServer2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=register_server3")
    public String registerServer3;
    public UpdateSipPhoneMultipartFormData withRegisterServer3(String registerServer3) {
        this.registerServer3 = registerServer3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=registration_expire_time")
    public Long registrationExpireTime;
    public UpdateSipPhoneMultipartFormData withRegistrationExpireTime(Long registrationExpireTime) {
        this.registrationExpireTime = registrationExpireTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transport_protocol")
    public UpdateSipPhoneMultipartFormDataTransportProtocolEnum transportProtocol;
    public UpdateSipPhoneMultipartFormData withTransportProtocol(UpdateSipPhoneMultipartFormDataTransportProtocolEnum transportProtocol) {
        this.transportProtocol = transportProtocol;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transport_protocol2")
    public UpdateSipPhoneMultipartFormDataTransportProtocol2Enum transportProtocol2;
    public UpdateSipPhoneMultipartFormData withTransportProtocol2(UpdateSipPhoneMultipartFormDataTransportProtocol2Enum transportProtocol2) {
        this.transportProtocol2 = transportProtocol2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transport_protocol3")
    public UpdateSipPhoneMultipartFormDataTransportProtocol3Enum transportProtocol3;
    public UpdateSipPhoneMultipartFormData withTransportProtocol3(UpdateSipPhoneMultipartFormDataTransportProtocol3Enum transportProtocol3) {
        this.transportProtocol3 = transportProtocol3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_name")
    public String userName;
    public UpdateSipPhoneMultipartFormData withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=voice_mail")
    public String voiceMail;
    public UpdateSipPhoneMultipartFormData withVoiceMail(String voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}