<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class UpdateFolderSecurity
{
	#[SpeakeasyMetadata('security:scheme=true,type=oauth2,name=Authorization')]
    public string $oAuth2;
    
	public function __construct()
	{
		$this->oAuth2 = "";
	}
}
