package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ServicePrincipalsAddOwnerRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, java.util.Map<String, Object>> addOwnerParameters;
    public ServicePrincipalsAddOwnerRequests withAddOwnerParameters(java.util.Map<String, java.util.Map<String, Object>> addOwnerParameters) {
        this.addOwnerParameters = addOwnerParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public java.util.Map<String, java.util.Map<String, Object>> addOwnerParameters1;
    public ServicePrincipalsAddOwnerRequests withAddOwnerParameters1(java.util.Map<String, java.util.Map<String, Object>> addOwnerParameters1) {
        this.addOwnerParameters1 = addOwnerParameters1;
        return this;
    }
}