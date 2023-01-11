package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetWordFrequencyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=word")
    public String word;
    public GetWordFrequencyPathParams withWord(String word) {
        this.word = word;
        return this;
    }
}