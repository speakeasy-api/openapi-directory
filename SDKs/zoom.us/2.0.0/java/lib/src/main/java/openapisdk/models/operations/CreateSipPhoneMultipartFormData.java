package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipPhoneMultipartFormData {
    @SpeakeasyMetadata("multipartForm:name=authorization_name")
    public String authorizationName;
    public CreateSipPhoneMultipartFormData withAuthorizationName(String authorizationName) {
        this.authorizationName = authorizationName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=domain")
    public String domain;
    public CreateSipPhoneMultipartFormData withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=password")
    public String password;
    public CreateSipPhoneMultipartFormData withPassword(String password) {
        this.password = password;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=proxy_server")
    public String proxyServer;
    public CreateSipPhoneMultipartFormData withProxyServer(String proxyServer) {
        this.proxyServer = proxyServer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=proxy_server2")
    public String proxyServer2;
    public CreateSipPhoneMultipartFormData withProxyServer2(String proxyServer2) {
        this.proxyServer2 = proxyServer2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=proxy_server3")
    public String proxyServer3;
    public CreateSipPhoneMultipartFormData withProxyServer3(String proxyServer3) {
        this.proxyServer3 = proxyServer3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=register_server")
    public String registerServer;
    public CreateSipPhoneMultipartFormData withRegisterServer(String registerServer) {
        this.registerServer = registerServer;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=register_server2")
    public String registerServer2;
    public CreateSipPhoneMultipartFormData withRegisterServer2(String registerServer2) {
        this.registerServer2 = registerServer2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=register_server3")
    public String registerServer3;
    public CreateSipPhoneMultipartFormData withRegisterServer3(String registerServer3) {
        this.registerServer3 = registerServer3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=registration_expire_time")
    public Long registrationExpireTime;
    public CreateSipPhoneMultipartFormData withRegistrationExpireTime(Long registrationExpireTime) {
        this.registrationExpireTime = registrationExpireTime;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transport_protocol")
    public CreateSipPhoneMultipartFormDataTransportProtocolEnum transportProtocol;
    public CreateSipPhoneMultipartFormData withTransportProtocol(CreateSipPhoneMultipartFormDataTransportProtocolEnum transportProtocol) {
        this.transportProtocol = transportProtocol;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transport_protocol2")
    public CreateSipPhoneMultipartFormDataTransportProtocol2Enum transportProtocol2;
    public CreateSipPhoneMultipartFormData withTransportProtocol2(CreateSipPhoneMultipartFormDataTransportProtocol2Enum transportProtocol2) {
        this.transportProtocol2 = transportProtocol2;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=transport_protocol3")
    public CreateSipPhoneMultipartFormDataTransportProtocol3Enum transportProtocol3;
    public CreateSipPhoneMultipartFormData withTransportProtocol3(CreateSipPhoneMultipartFormDataTransportProtocol3Enum transportProtocol3) {
        this.transportProtocol3 = transportProtocol3;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_email")
    public String userEmail;
    public CreateSipPhoneMultipartFormData withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=user_name")
    public String userName;
    public CreateSipPhoneMultipartFormData withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("multipartForm:name=voice_mail")
    public String voiceMail;
    public CreateSipPhoneMultipartFormData withVoiceMail(String voiceMail) {
        this.voiceMail = voiceMail;
        return this;
    }
}