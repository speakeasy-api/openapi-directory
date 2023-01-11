package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsUpdateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServicePrincipalUpdateParameters servicePrincipalUpdateParameters;
    public ServicePrincipalsUpdateRequests withServicePrincipalUpdateParameters(openapisdk.models.shared.ServicePrincipalUpdateParameters servicePrincipalUpdateParameters) {
        this.servicePrincipalUpdateParameters = servicePrincipalUpdateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServicePrincipalUpdateParameters servicePrincipalUpdateParameters1;
    public ServicePrincipalsUpdateRequests withServicePrincipalUpdateParameters1(openapisdk.models.shared.ServicePrincipalUpdateParameters servicePrincipalUpdateParameters1) {
        this.servicePrincipalUpdateParameters1 = servicePrincipalUpdateParameters1;
        return this;
    }
}