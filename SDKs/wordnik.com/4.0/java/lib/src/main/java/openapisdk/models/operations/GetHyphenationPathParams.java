package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetHyphenationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetHyphenationPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}