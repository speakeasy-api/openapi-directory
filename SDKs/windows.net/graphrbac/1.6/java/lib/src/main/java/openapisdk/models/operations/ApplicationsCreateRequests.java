package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsCreateRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationCreateParameters applicationCreateParameters;
    public ApplicationsCreateRequests withApplicationCreateParameters(openapisdk.models.shared.ApplicationCreateParameters applicationCreateParameters) {
        this.applicationCreateParameters = applicationCreateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ApplicationCreateParameters applicationCreateParameters1;
    public ApplicationsCreateRequests withApplicationCreateParameters1(openapisdk.models.shared.ApplicationCreateParameters applicationCreateParameters1) {
        this.applicationCreateParameters1 = applicationCreateParameters1;
        return this;
    }
}