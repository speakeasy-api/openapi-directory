package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsPatchRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ApplicationUpdateParameters applicationUpdateParameters;
    public ApplicationsPatchRequests withApplicationUpdateParameters(openapisdk.models.shared.ApplicationUpdateParameters applicationUpdateParameters) {
        this.applicationUpdateParameters = applicationUpdateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.ApplicationUpdateParameters applicationUpdateParameters1;
    public ApplicationsPatchRequests withApplicationUpdateParameters1(openapisdk.models.shared.ApplicationUpdateParameters applicationUpdateParameters1) {
        this.applicationUpdateParameters1 = applicationUpdateParameters1;
        return this;
    }
}