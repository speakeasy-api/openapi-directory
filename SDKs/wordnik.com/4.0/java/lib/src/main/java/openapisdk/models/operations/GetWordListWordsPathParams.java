package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordListWordsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=permalink")
    public String permalink;
    public GetWordListWordsPathParams withPermalink(String permalink) {
        this.permalink = permalink;
        return this;
    }
}