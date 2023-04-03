# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### word

* `getAudio` - Fetches audio metadata for a word.
* `getDefinitions` - Return definitions for a word
* `getEtymologies` - Fetches etymology data
* `getExamples` - Returns examples for a word
* `getHyphenation` - Returns syllable information for a word
* `getPhrases` - Fetches bi-gram phrases for a word
* `getRelatedWords` - Given a word as a string, returns relationships from the Word Graph
* `getScrabbleScore` - Returns the Scrabble score for a word
* `getTextPronunciations` - Returns text pronunciations for a given word
* `getTopExample` - Returns a top example for a word
* `getWordFrequency` - Returns word usage over time

### words

* `getRandomWord` - Returns a single random WordObject
* `getRandomWords` - Returns an array of random WordObjects
* `getWordOfTheDay` - Returns a specific WordOfTheDay
* `reverseDictionary` - Reverse dictionary search
* `searchWords` - Searches words
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
