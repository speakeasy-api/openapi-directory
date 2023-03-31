# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/wordnik.com/4.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAudioRequest(
    limit=548814,
    use_canonical="true",
    word="distinctio",
)
    
res = s.word.get_audio(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### word

* `get_audio` - Fetches audio metadata for a word.
* `get_definitions` - Return definitions for a word
* `get_etymologies` - Fetches etymology data
* `get_examples` - Returns examples for a word
* `get_hyphenation` - Returns syllable information for a word
* `get_phrases` - Fetches bi-gram phrases for a word
* `get_related_words` - Given a word as a string, returns relationships from the Word Graph
* `get_scrabble_score` - Returns the Scrabble score for a word
* `get_text_pronunciations` - Returns text pronunciations for a given word
* `get_top_example` - Returns a top example for a word
* `get_word_frequency` - Returns word usage over time

### words

* `get_random_word` - Returns a single random WordObject
* `get_random_words` - Returns an array of random WordObjects
* `get_word_of_the_day` - Returns a specific WordOfTheDay
* `reverse_dictionary` - Reverse dictionary search
* `search_words` - Searches words
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
