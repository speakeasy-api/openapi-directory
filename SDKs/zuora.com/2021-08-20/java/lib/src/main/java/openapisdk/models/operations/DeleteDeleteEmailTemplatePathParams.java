package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDeleteEmailTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteDeleteEmailTemplatePathParams withId(String id) {
        this.id = id;
        return this;
    }
}