# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/wordnik.com/4.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.GetAudioRequest{
        Limit: 548814,
        UseCanonical: "true",
        Word: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Word.GetAudio(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### Word

* `GetAudio` - Fetches audio metadata for a word.
* `GetDefinitions` - Return definitions for a word
* `GetEtymologies` - Fetches etymology data
* `GetExamples` - Returns examples for a word
* `GetHyphenation` - Returns syllable information for a word
* `GetPhrases` - Fetches bi-gram phrases for a word
* `GetRelatedWords` - Given a word as a string, returns relationships from the Word Graph
* `GetScrabbleScore` - Returns the Scrabble score for a word
* `GetTextPronunciations` - Returns text pronunciations for a given word
* `GetTopExample` - Returns a top example for a word
* `GetWordFrequency` - Returns word usage over time

### Words

* `GetRandomWord` - Returns a single random WordObject
* `GetRandomWords` - Returns an array of random WordObjects
* `GetWordOfTheDay` - Returns a specific WordOfTheDay
* `ReverseDictionary` - Reverse dictionary search
* `SearchWords` - Searches words
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
