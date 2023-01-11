package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRelatedWordsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetRelatedWordsPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}