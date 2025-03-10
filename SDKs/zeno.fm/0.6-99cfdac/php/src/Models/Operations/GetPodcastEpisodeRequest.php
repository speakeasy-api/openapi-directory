<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class GetPodcastEpisodeRequest
{
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=episodeKey')]
    public string $episodeKey;
    
	#[SpeakeasyMetadata('pathParam:style=simple,explode=false,name=podcastKey')]
    public string $podcastKey;
    
	public function __construct()
	{
		$this->episodeKey = "";
		$this->podcastKey = "";
	}
}
