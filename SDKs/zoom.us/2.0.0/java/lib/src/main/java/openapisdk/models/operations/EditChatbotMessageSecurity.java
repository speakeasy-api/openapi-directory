package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EditChatbotMessageSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeClientCredentials clientCredentials;
    public EditChatbotMessageSecurity withClientCredentials(openapisdk.models.shared.SchemeClientCredentials clientCredentials) {
        this.clientCredentials = clientCredentials;
        return this;
    }
}