package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddWordsToWordListPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permalink")
    public String permalink;
    public AddWordsToWordListPathParams withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
}