<?php

/**
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

declare(strict_types=1);

namespace OpenAPI\OpenAPI\Models\Operations;


class CreateAssetResponse
{
    /**
     * return single object - create new asset
     * 
     * @var ?\OpenAPI\OpenAPI\Models\Shared\Asset $asset
     */
	
    public ?\OpenAPI\OpenAPI\Models\Shared\Asset $asset = null;
    
	
    public string $contentType;
    
	
    public int $statusCode;
    
	
    public ?\Psr\Http\Message\ResponseInterface $rawResponse = null;
    
	public function __construct()
	{
		$this->asset = null;
		$this->contentType = "";
		$this->statusCode = 0;
		$this->rawResponse = null;
	}
}
