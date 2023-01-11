package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ApplicationsUpdateKeyCredentialsRequests {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters;
    public ApplicationsUpdateKeyCredentialsRequests withKeyCredentialsUpdateParameters(openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters) {
        this.keyCredentialsUpdateParameters = keyCredentialsUpdateParameters;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/json")
    public openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters1;
    public ApplicationsUpdateKeyCredentialsRequests withKeyCredentialsUpdateParameters1(openapisdk.models.shared.KeyCredentialsUpdateParameters keyCredentialsUpdateParameters1) {
        this.keyCredentialsUpdateParameters1 = keyCredentialsUpdateParameters1;
        return this;
    }
}