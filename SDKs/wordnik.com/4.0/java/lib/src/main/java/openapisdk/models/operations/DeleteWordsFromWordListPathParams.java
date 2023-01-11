package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWordsFromWordListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permalink")
    public String permalink;
    public DeleteWordsFromWordListPathParams withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
}