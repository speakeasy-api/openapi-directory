package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutDocumentPropertiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentPropertiesId")
    public String documentPropertiesId;
    public PutDocumentPropertiesPathParams withDocumentPropertiesId(String documentPropertiesId) {
        this.documentPropertiesId = documentPropertiesId;
        return this;
    }
}