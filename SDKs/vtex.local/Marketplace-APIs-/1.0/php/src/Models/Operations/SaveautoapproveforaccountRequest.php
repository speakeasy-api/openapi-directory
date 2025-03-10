<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;

use \OpenAPI\OpenAPI\Utils\SpeakeasyMetadata;
class SaveautoapproveforaccountRequest
{
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     * 
     * @var string $accept
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Accept')]
    public string $accept;
    
    /**
     * Describes the type of the content being sent.
     * 
     * @var string $contentType
     */
	#[SpeakeasyMetadata('header:style=simple,explode=false,name=Content-Type')]
    public string $contentType;
    
	#[SpeakeasyMetadata('request:mediaType=application/json')]
    public \OpenAPI\OpenAPI\Models\Shared\SaveautoapproveforaccountRequest $saveautoapproveforaccountRequest;
    
    /**
     * Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
     * 
     * @var string $accountName
     */
	#[SpeakeasyMetadata('queryParam:style=form,explode=true,name=accountName')]
    public string $accountName;
    
	public function __construct()
	{
		$this->accept = "";
		$this->contentType = "";
		$this->saveautoapproveforaccountRequest = new \OpenAPI\OpenAPI\Models\Shared\SaveautoapproveforaccountRequest();
		$this->accountName = "";
	}
}
