package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsUpdateKeyCredentialsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters;
    public ServicePrincipalsUpdateKeyCredentialsRequests withKeyCredentialsUpdateParameters(openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters) {
        this.keyCredentialsUpdateParameters = keyCredentialsUpdateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters1;
    public ServicePrincipalsUpdateKeyCredentialsRequests withKeyCredentialsUpdateParameters1(openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters1) {
        this.keyCredentialsUpdateParameters1 = keyCredentialsUpdateParameters1;
        return this;
    }
}