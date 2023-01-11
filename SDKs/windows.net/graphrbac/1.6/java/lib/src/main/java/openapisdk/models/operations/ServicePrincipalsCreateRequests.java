package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ServicePrincipalCreateParameters servicePrincipalCreateParameters;
    public ServicePrincipalsCreateRequests withServicePrincipalCreateParameters(openapisdk.models.shared.ServicePrincipalCreateParameters servicePrincipalCreateParameters) {
        this.servicePrincipalCreateParameters = servicePrincipalCreateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ServicePrincipalCreateParameters servicePrincipalCreateParameters1;
    public ServicePrincipalsCreateRequests withServicePrincipalCreateParameters1(openapisdk.models.shared.ServicePrincipalCreateParameters servicePrincipalCreateParameters1) {
        this.servicePrincipalCreateParameters1 = servicePrincipalCreateParameters1;
        return this;
    }
}