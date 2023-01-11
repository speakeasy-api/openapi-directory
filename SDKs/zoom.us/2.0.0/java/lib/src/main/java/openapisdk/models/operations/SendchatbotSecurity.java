package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SendchatbotSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientCredentials clientCredentials;
    public SendchatbotSecurity withClientCredentials(openapisdk.models.shared.SchemeClientCredentials clientCredentials) {
        this.clientCredentials = clientCredentials;
        return this;
    }
}