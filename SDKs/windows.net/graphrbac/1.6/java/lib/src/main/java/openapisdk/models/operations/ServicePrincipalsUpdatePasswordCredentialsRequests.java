package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsUpdatePasswordCredentialsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PasswordCredentialsUpdateParameters passwordCredentialsUpdateParameters;
    public ServicePrincipalsUpdatePasswordCredentialsRequests withPasswordCredentialsUpdateParameters(openapisdk.models.shared.PasswordCredentialsUpdateParameters passwordCredentialsUpdateParameters) {
        this.passwordCredentialsUpdateParameters = passwordCredentialsUpdateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.PasswordCredentialsUpdateParameters passwordCredentialsUpdateParameters1;
    public ServicePrincipalsUpdatePasswordCredentialsRequests withPasswordCredentialsUpdateParameters1(openapisdk.models.shared.PasswordCredentialsUpdateParameters passwordCredentialsUpdateParameters1) {
        this.passwordCredentialsUpdateParameters1 = passwordCredentialsUpdateParameters1;
        return this;
    }
}