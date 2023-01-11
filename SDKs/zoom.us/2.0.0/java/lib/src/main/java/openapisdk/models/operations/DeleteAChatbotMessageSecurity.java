package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAChatbotMessageSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientCredentials clientCredentials;
    public DeleteAChatbotMessageSecurity withClientCredentials(openapisdk.models.shared.SchemeClientCredentials clientCredentials) {
        this.clientCredentials = clientCredentials;
        return this;
    }
}