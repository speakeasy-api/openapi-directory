package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDocumentPropertiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=documentPropertiesId")
    public String documentPropertiesId;
    public DeleteDocumentPropertiesPathParams withDocumentPropertiesId(String documentPropertiesId) {
        this.documentPropertiesId = documentPropertiesId;
        return this;
    }
}