package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPhrasesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetPhrasesPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}